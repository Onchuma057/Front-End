"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalClosing, setModalClosing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const timeout = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        observer.observe(item);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && showModal) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [showModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const getUsers = async () => {
    try {
      const res = await fetch(
        "https://backend-nextjs-virid.vercel.app/api/users",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      console.log("data", data);
      setItems(Array.isArray(data) ? data : data.users || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  const openEditModal = (user) => {
    setEditUser({...user}); // Create a copy to avoid direct mutation
    setModalClosing(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setEditUser(null);
      setModalClosing(false);
    }, 300); // Animation duration
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณต้องการลบผู้ใช้นี้ใช่หรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ec407a",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "ใช่, ลบเลย!",
      cancelButtonText: "ยกเลิก",
      background: "#fff0f5",
      color: "#ad1457"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://backend-nextjs-virid.vercel.app/api/users/${id}`,
            { method: "DELETE" }
          );
          if (!response.ok) throw new Error("Delete failed");
          Swal.fire({
            icon: "success",
            title: "ลบสำเร็จ!",
            text: "ลบข้อมูลผู้ใช้เรียบร้อยแล้ว",
            confirmButtonColor: "#ec407a",
            background: "#fff0f5",
            color: "#ad1457"
          });
          getUsers();
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire({
            icon: "error",
            title: "เกิดข้อผิดพลาด",
            text: "ไม่สามารถลบข้อมูลผู้ใช้ได้",
            confirmButtonColor: "#ec407a",
            background: "#fff0f5",
            color: "#ad1457"
          });
        }
      }
    });
  };

  const handleSave = async () => {
    if (!editUser) return;
    
    // Basic validation
    if (!editUser.firstname?.trim() || !editUser.lastname?.trim() || !editUser.username?.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณากรอกข้อมูล",
        text: "กรุณากรอกชื่อ นามสกุล และชื่อผู้ใช้",
        confirmButtonColor: "#ec407a",
        background: "#fff0f5",
        color: "#ad1457"
      });
      return;
    }

    try {
      const res = await fetch(
        "https://backend-nextjs-virid.vercel.app/api/users",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editUser),
        }
      );
      if (!res.ok) throw new Error("Update failed");

      Swal.fire({
        icon: "success",
        title: "บันทึกสำเร็จ",
        text: "อัพเดทข้อมูลผู้ใช้เรียบร้อยแล้ว",
        confirmButtonColor: "#ec407a",
        background: "#fff0f5",
        color: "#ad1457"
      });

      closeModal();
      getUsers();
    } catch (error) {
      console.error("Error updating user:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถบันทึกข้อมูลผู้ใช้ได้",
        confirmButtonColor: "#ec407a",
        background: "#fff0f5",
        color: "#ad1457"
      });
    }
  };

  const filteredUsers = activeFilter === 'all' 
    ? items 
    : items.filter(user => {
        if (activeFilter === 'male') return user.sex === 'ชาย';
        if (activeFilter === 'female') return user.sex === 'หญิง';
        return true;
      });

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <div className="text-center">
          <div className="spinner-border" style={{ color: "#ec407a", width: "3rem", height: "3rem" }} role="status">
            <span className="visually-hidden">กำลังโหลด...</span>
          </div>
          <h4 style={{ color: "#d81b60", marginTop: "20px" }}>กำลังโหลดข้อมูล...</h4>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container py-5">

        {/* Filter Tabs */}
        <div className="row mb-4 animate-on-scroll">
          <div className="col-12 text-center">
            <div className="btn-group" role="group" aria-label="User filters" style={{
              backgroundColor: "#fce4ec",
              padding: "5px",
              borderRadius: "30px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
            }}>
              <button 
                type="button" 
                className={`btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
                style={{
                  backgroundColor: activeFilter === 'all' ? "#ec407a" : "transparent",
                  color: activeFilter === 'all' ? "white" : "#ad1457",
                  border: "none",
                  borderRadius: "25px",
                  padding: "8px 20px",
                  margin: "0 5px",
                  fontWeight: "500",
                  transition: "all 0.3s ease"
                }}
              >
                ทั้งหมด ({items.length})
              </button>
              <button 
                type="button" 
                className={`btn ${activeFilter === 'male' ? 'active' : ''}`}
                onClick={() => setActiveFilter('male')}
                style={{
                  backgroundColor: activeFilter === 'male' ? "#ec407a" : "transparent",
                  color: activeFilter === 'male' ? "white" : "#ad1457",
                  border: "none",
                  borderRadius: "25px",
                  padding: "8px 20px",
                  margin: "0 5px",
                  fontWeight: "500",
                  transition: "all 0.3s ease"
                }}
              >
                ชาย ({items.filter(u => u.sex === 'ชาย').length})
              </button>
              <button 
                type="button" 
                className={`btn ${activeFilter === 'female' ? 'active' : ''}`}
                onClick={() => setActiveFilter('female')}
                style={{
                  backgroundColor: activeFilter === 'female' ? "#ec407a" : "transparent",
                  color: activeFilter === 'female' ? "white" : "#ad1457",
                  border: "none",
                  borderRadius: "25px",
                  padding: "8px 20px",
                  margin: "0 5px",
                  fontWeight: "500",
                  transition: "all 0.3s ease"
                }}
              >
                หญิง ({items.filter(u => u.sex === 'หญิง').length})
              </button>
            </div>
          </div>
        </div>

        {/* Users Cards */}
        <div className="row">
          {filteredUsers.map((item, index) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4 animate-on-scroll">
              <div className="card border-0 h-100" style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                background: "linear-gradient(135deg, #fff0f5 0%, #fce4ec 100%)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(244, 143, 177, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
              }}>
                <div className="card-header" style={{ 
                  backgroundColor: "#ec407a",
                  border: "none",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.1rem"
                }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>#{item.id}</span>
                    <div style={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      padding: "5px 12px",
                      borderRadius: "15px",
                      fontSize: "0.8rem"
                    }}>
                      {item.sex || 'ไม่ระบุ'}
                    </div>
                  </div>
                </div>

                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <div style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: item.sex === 'ชาย' ? "#81d4fa" : item.sex === 'หญิง' ? "#f8bbd0" : "#e1bee7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                      fontSize: "2rem",
                      color: "white",
                      fontWeight: "bold",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                    }}>
                      {item.firstname ? item.firstname.charAt(0).toUpperCase() : 'U'}
                    </div>
                  </div>

                  <h5 className="text-center mb-3" style={{ color: "#d81b60", fontWeight: "600" }}>
                    {item.firstname} {item.lastname}
                  </h5>

                  <div className="info-item mb-2">
                    <strong style={{ color: "#ad1457" }}>ชื่อเต็ม:</strong>
                    <span style={{ color: "#555", marginLeft: "8px" }}>{item.fullname || 'ไม่ระบุ'}</span>
                  </div>

                  <div className="info-item mb-2">
                    <strong style={{ color: "#ad1457" }}>ชื่อผู้ใช้:</strong>
                    <span style={{ color: "#555", marginLeft: "8px" }}>{item.username}</span>
                  </div>

                  <div className="info-item mb-2">
                    <strong style={{ color: "#ad1457" }}>ที่อยู่:</strong>
                    <span style={{ color: "#555", marginLeft: "8px" }}>{item.address || 'ไม่ระบุ'}</span>
                  </div>

                  <div className="info-item mb-3">
                    <strong style={{ color: "#ad1457" }}>วันเกิด:</strong>
                    <span style={{ color: "#555", marginLeft: "8px" }}>
                      {item.birthday ? new Date(item.birthday).toLocaleDateString('th-TH') : 'ไม่ระบุ'}
                    </span>
                  </div>

                  <div className="d-flex gap-2 justify-content-center">
                    <button
                      className="btn flex-fill"
                      onClick={() => openEditModal(item)}
                      style={{
                        backgroundColor: "#ffc107",
                        color: "white",
                        borderRadius: "15px",
                        padding: "8px 16px",
                        fontWeight: "500",
                        border: "none",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#ffb300";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#ffc107";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <i className="bi bi-pencil-square me-1"></i> แก้ไข
                    </button>
                    <button
                      className="btn flex-fill"
                      onClick={() => handleDelete(item.id)}
                      style={{
                        backgroundColor: "#f44336",
                        color: "white",
                        borderRadius: "15px",
                        padding: "8px 16px",
                        fontWeight: "500",
                        border: "none",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#d32f2f";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#f44336";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <i className="bi bi-trash3 me-1"></i> ลบ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-5 animate-on-scroll">
            <div style={{ fontSize: "4rem", color: "#f8bbd0", marginBottom: "20px" }}>
              <i className="bi bi-person-x"></i>
            </div>
            <h4 style={{ color: "#d81b60", marginBottom: "15px" }}>ไม่พบข้อมูลผู้ใช้</h4>
            <p style={{ color: "#ad1457" }}>ไม่มีผู้ใช้ในหมวดหมู่ที่เลือก</p>
          </div>
        )}

        {/* Statistics Section */}
        <div className="row mt-5 pt-4 animate-on-scroll">
          <div className="col-12 text-center mb-4">
            <h2 style={{
              color: "#d81b60",
              position: "relative",
              display: "inline-block",
              marginBottom: "20px"
            }}>
              <span style={{
                position: "relative",
                zIndex: "1"
              }}>สถิติผู้ใช้งาน</span>
              <span style={{
                position: "absolute",
                height: "8px",
                width: "100%",
                bottom: "0",
                left: "0",
                backgroundColor: "#f8bbd0",
                zIndex: "0"
              }}></span>
            </h2>
          </div>
          <div className="col-md-4 mb-3">
            <div className="text-center p-4" style={{
              backgroundColor: "#e1f5fe",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
            }}>
              <div style={{ fontSize: "3rem", color: "#0288d1", marginBottom: "10px" }}>
                <i className="bi bi-people"></i>
              </div>
              <h3 style={{ color: "#0277bd", margin: "0" }}>{items.length}</h3>
              <p style={{ color: "#0288d1", margin: "0" }}>ผู้ใช้ทั้งหมด</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="text-center p-4" style={{
              backgroundColor: "#e3f2fd",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
            }}>
              <div style={{ fontSize: "3rem", color: "#1976d2", marginBottom: "10px" }}>
                <i className="bi bi-person-check"></i>
              </div>
              <h3 style={{ color: "#1565c0", margin: "0" }}>{items.filter(u => u.sex === 'ชาย').length}</h3>
              <p style={{ color: "#1976d2", margin: "0" }}>ผู้ใช้ชาย</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="text-center p-4" style={{
              backgroundColor: "#fce4ec",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
            }}>
              <div style={{ fontSize: "3rem", color: "#ec407a", marginBottom: "10px" }}>
                <i className="bi bi-person-heart"></i>
              </div>
              <h3 style={{ color: "#d81b60", margin: "0" }}>{items.filter(u => u.sex === 'หญิง').length}</h3>
              <p style={{ color: "#ec407a", margin: "0" }}>ผู้ใช้หญิง</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Edit Modal */}
      {showModal && (
        <div 
          className={`modal-overlay ${modalClosing ? 'modal-overlay-closing' : ''}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className={`modal-content-enhanced ${modalClosing ? 'modal-content-closing' : ''}`}>
            {/* Modal Header with improved styling */}
            <div className="modal-header-enhanced">
              <div className="d-flex align-items-center">
                <div style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: editUser?.sex === 'ชาย' ? "#81d4fa" : editUser?.sex === 'หญิง' ? "#f8bbd0" : "#e1bee7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "15px",
                  fontSize: "1.5rem",
                  color: "white",
                  fontWeight: "bold"
                }}>
                  {editUser?.firstname ? editUser.firstname.charAt(0).toUpperCase() : 'U'}
                </div>
                <div>
                  <h5 style={{ color: "#d81b60", fontWeight: "700", margin: "0", fontSize: "1.3rem" }}>
                    แก้ไขข้อมูลผู้ใช้
                  </h5>
                  <p style={{ color: "#ad1457", margin: "0", fontSize: "0.9rem" }}>
                    {editUser?.firstname} {editUser?.lastname}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="btn-close-enhanced"
                onClick={closeModal}
                aria-label="Close"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            {/* Modal Body with form */}
            <form onSubmit={(e) => {e.preventDefault(); handleSave();}}>
              <div className="modal-body-enhanced">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label-enhanced">
                      <i className="bi bi-person me-2"></i> ชื่อ <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control-enhanced"
                      value={editUser?.firstname || ''}
                      onChange={(e) => setEditUser({ ...editUser, firstname: e.target.value })}
                      placeholder="กรอกชื่อ"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label-enhanced">
                      <i className="bi bi-person me-2"></i> นามสกุล <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control-enhanced"
                      value={editUser?.lastname || ''}
                      onChange={(e) => setEditUser({ ...editUser, lastname: e.target.value })}
                      placeholder="กรอกนามสกุล"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label-enhanced">
                    <i className="bi bi-person-badge me-2"></i> ชื่อเต็ม
                  </label>
                  <input
                    type="text"
                    className="form-control-enhanced"
                    value={editUser?.fullname || ''}
                    onChange={(e) => setEditUser({ ...editUser, fullname: e.target.value })}
                    placeholder="กรอกชื่อเต็ม"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label-enhanced">
                    <i className="bi bi-at me-2"></i> ชื่อผู้ใช้ <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control-enhanced"
                    value={editUser?.username || ''}
                    onChange={(e) => setEditUser({ ...editUser, username: e.target.value })}
                    placeholder="กรอกชื่อผู้ใช้"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label-enhanced">
                    <i className="bi bi-geo-alt me-2"></i> ที่อยู่
                  </label>
                  <textarea
                    className="form-control-enhanced"
                    rows="3"
                    value={editUser?.address || ''}
                    onChange={(e) => setEditUser({ ...editUser, address: e.target.value })}
                    placeholder="กรอกที่อยู่"
                    style={{ resize: "none" }}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label-enhanced">
                      <i className="bi bi-gender-ambiguous me-2"></i> เพศ
                    </label>
                    <select
                      className="form-control-enhanced"
                      value={editUser?.sex || ''}
                      onChange={(e) => setEditUser({ ...editUser, sex: e.target.value })}
                    >
                      <option value="">เลือกเพศ</option>
                      <option value="ชาย">ชาย</option>
                      <option value="หญิง">หญิง</option>
                      <option value="อื่นๆ">อื่นๆ</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label-enhanced">
                      <i className="bi bi-calendar-heart me-2"></i> วันเกิด
                    </label>
                    <input
                      type="date"
                      className="form-control-enhanced"
                      value={editUser?.birthday || ''}
                      onChange={(e) => setEditUser({ ...editUser, birthday: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer-enhanced">
                <button
                  type="button"
                  className="btn btn-cancel-enhanced"
                  onClick={closeModal}
                >
                  <i className="bi bi-x-circle me-2"></i> ยกเลิก
                </button>
                <button
                  type="submit"
                  className="btn btn-save-enhanced"
                >
                  <i className="bi bi-check-circle me-2"></i> บันทึกการแก้ไข
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />

      {/* Enhanced Styles */}
      <style jsx global>{`
        /* Modal Overlay Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
          padding: 20px;
          animation: modalFadeIn 0.3s ease-out;
        }

        .modal-overlay-closing {
          animation: modalFadeOut 0.3s ease-in;
        }

        /* Enhanced Modal Content */
        .modal-content-enhanced {
          background: white;
          border-radius: 25px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          width: 100%;
          max-width: 700px;
          max-height: 90vh;
          overflow-y: auto;
          animation: modalSlideIn 0.3s ease-out;
          transform-origin: center;
        }

        .modal-content-closing {
          animation: modalSlideOut 0.3s ease-in;
        }

        /* Enhanced Modal Header */
        .modal-header-enhanced {
          padding: 30px 35px 25px;
          border-bottom: 2px solid #fce4ec;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #fff0f5 0%, #fce4ec 100%);
          border-radius: 25px 25px 0 0;
        }

        .btn-close-enhanced {
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #999;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .btn-close-enhanced:hover {
          background-color: rgba(236, 64, 122, 0.1);
          color: #ec407a;
          transform: rotate(90deg);
        }

        /* Enhanced Modal Body */
        .modal-body-enhanced {
          padding: 35px;
          background: white;
        }

        /* Enhanced Form Controls */
        .form-label-enhanced {
          color: #ad1457;
          font-weight: 600;
          margin-bottom: 8px;
          display: block;
          font-size: 0.95rem;
        }

        .form-control-enhanced {
          width: 100%;
          padding: 15px 18px;
          border: 2px solid #f8bbd0;
          border-radius: 15px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background-color: #fafafa;
        }

        .form-control-enhanced:focus {
          outline: none;
          border-color: #ec407a;
          box-shadow: 0 0 0 3px rgba(236, 64, 122, 0.1);
          background-color: white;
          transform: translateY(-1px);
        }

        .form-control-enhanced::placeholder {
          color: #bbb;
          font-style: italic;
        }

        /* Required field indicator */
        .required {
          color: #f44336;
          font-weight: bold;
        }

        /* Enhanced Modal Footer */
        .modal-footer-enhanced {
          padding: 25px 35px 30px;
          border-top: 2px solid #fce4ec;
          display: flex;
          justify-content: flex-end;
          gap: 15px;
          background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
          border-radius: 0 0 25px 25px;
        }

        /* Enhanced Buttons */
        .btn-cancel-enhanced {
          padding: 12px 25px;
          border: 2px solid #ddd;
          background: white;
          color: #666;
          border-radius: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-cancel-enhanced:hover {
          background: #f5f5f5;
          border-color: #bbb;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .btn-save-enhanced {
          padding: 12px 30px;
          background: linear-gradient(135deg, #ec407a 0%, #d81b60 100%);
          color: white;
          border: none;
          border-radius: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 6px 20px rgba(236, 64, 122, 0.3);
        }

        .btn-save-enhanced:hover {
          background: linear-gradient(135deg, #d81b60 0%, #c2185b 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(236, 64, 122, 0.4);
        }

        .btn-save-enhanced:active {
          transform: translateY(0);
        }

        /* Modal Animations */
        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalFadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes modalSlideOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
          }
        }

        /* Enhanced Scrollbar for Modal */
        .modal-content-enhanced::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content-enhanced::-webkit-scrollbar-track {
          background: #f8bbd0;
          border-radius: 10px;
        }

        .modal-content-enhanced::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #ec407a 0%, #d81b60 100%);
          border-radius: 10px;
        }

        .modal-content-enhanced::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #d81b60 0%, #c2185b 100%);
        }

        /* Form field focus animation */
        .form-control-enhanced:focus + .form-label-enhanced {
          color: #ec407a;
        }

        /* Loading state for save button */
        .btn-save-enhanced:disabled {
          background: #ccc;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .modal-overlay {
            padding: 10px;
          }
          
          .modal-content-enhanced {
            max-width: 95%;
            max-height: 95vh;
            border-radius: 20px;
          }
          
          .modal-header-enhanced,
          .modal-body-enhanced,
          .modal-footer-enhanced {
            padding: 20px;
          }
          
          .modal-footer-enhanced {
            flex-direction: column;
          }
          
          .btn-cancel-enhanced,
          .btn-save-enhanced {
            width: 100%;
            margin: 5px 0;
          }
          
          .form-control-enhanced {
            padding: 12px 15px;
          }
        }

        @media (max-width: 480px) {
          .modal-header-enhanced h5 {
            font-size: 1.1rem;
          }
          
          .modal-header-enhanced p {
            font-size: 0.8rem;
          }
        }

        /* Additional existing styles */
        .info-item {
          padding: 8px 0;
          border-bottom: 1px solid rgba(248, 187, 208, 0.3);
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .btn-group .btn:hover {
          background-color: #f8bbd0 !important;
          color: #ad1457 !important;
        }

        .btn-group .btn.active:hover {
          background-color: #ec407a !important;
          color: white !important;
        }

        .spinner-border {
          animation: spinner-border 0.75s linear infinite;
        }

        @keyframes spinner-border {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        /* Card hover effects */
        .card:hover .card-header {
          background: linear-gradient(135deg, #ec407a 0%, #d81b60 100%) !important;
        }

        /* Button hover effects */
        .btn:not(.active):not(.btn-cancel-enhanced):not(.btn-save-enhanced):hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }

        /* Focus trap for accessibility */
        .modal-content-enhanced {
          position: relative;
        }

        /* Prevent background scroll when modal is open */
        body.modal-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}