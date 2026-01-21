"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstname: "",
    fullname: "",
    lastname: "",
    address: "",
    sex: "",
    birthday: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/admin/users");
      return;
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate on blur
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "username":
        if (!value) error = "กรุณากรอกชื่อผู้ใช้";
        else if (value.length < 4)
          error = "ชื่อผู้ใช้ต้องมีอย่างน้อย 4 ตัวอักษร";
        break;
      case "password":
        if (!value) error = "กรุณากรอกรหัสผ่าน";
        else if (value.length < 6) error = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
        break;
      case "fullname":
        if (!value) error = "กรุณาเลือกคำนำหน้าชื่อ";
        break;
      case "firstname":
        if (!value) error = "กรุณากรอกชื่อ";
        break;
      case "lastname":
        if (!value) error = "กรุณากรอกนามสกุล";
        break;
      case "address":
        if (!value) error = "กรุณากรอกที่อยู่";
        break;
      case "sex":
        if (!value) error = "กรุณาเลือกเพศ";
        break;
      case "birthday":
        if (!value) error = "กรุณาเลือกวันเกิด";
        break;
      case "acceptTerms":
        if (!value) error = "กรุณายอมรับเงื่อนไข";
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const touchedFields = {};
    Object.keys(formData).forEach((key) => {
      touchedFields[key] = true;
    });
    setTouched(touchedFields);

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const res = await fetch(
          "https://back-end-five-indol.vercel.app/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (res.ok) {
          Swal.fire({
            icon: "success",
            title: "<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            router.push("/login");
          });

          // ✅ รีเซ็ตฟอร์ม
          setFormData({
            username: "",
            password: "",
            firstName: "",
            fullname: "",
            lastname: "",
            address: "",
            sex: "",
            birthday: "",
            acceptTerms: false,
          });

          setErrors({});
          setTouched({});
        } else {
          const data = await res.json();
          Swal.fire({
            icon: "error",
            title: "เกิดข้อผิดพลาด!",
            text: data?.message || "ไม่สามารถบันทึกข้อมูลได้",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด!",
          text: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์",
        });
      }

      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/736x/ec/db/cf/ecdbcf924703da27cc68619d01d52b19.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 0",
      }}
    >
      <div
        className="shadow p-5 rounded-4 bg-white"
        style={{
          width: "100%",
          maxWidth: "900px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "8px",
            background: "linear-gradient(to right, #ff69b4, #ff8dc7)",
          }}
        ></div>

        <h2
          className="text-center mb-4"
          style={{ color: "#d81b60", fontWeight: "bold" }}
        >
          ลงทะเบียน
        </h2>
        <p className="text-center text-muted mb-4">
          กรอกข้อมูลเพื่อสร้างบัญชีใหม่
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label
              htmlFor="username"
              className="form-label"
              style={{ color: "#ad1457", fontWeight: "500" }}
            >
              ชื่อผู้ใช้ <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                touched.username && errors.username ? "is-invalid" : ""
              }`}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="กรอกชื่อผู้ใช้"
              style={{
                borderColor:
                  touched.username && errors.username ? "#dc3545" : "#f8bbd0",
                borderRadius: "10px",
                padding: "12px 15px",
              }}
            />
            {touched.username && errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label"
              style={{ color: "#ad1457", fontWeight: "500" }}
            >
              รหัสผ่าน <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className={`form-control ${
                touched.password && errors.password ? "is-invalid" : ""
              }`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="กรอกรหัสผ่าน"
              style={{
                borderColor:
                  touched.password && errors.password ? "#dc3545" : "#f8bbd0",
                borderRadius: "10px",
                padding: "12px 15px",
              }}
            />
            {touched.password && errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="firstname"
              className="form-label"
              style={{ color: "#ad1457", fontWeight: "500" }}
            >
              คำนำหน้าชื่อ <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${
                touched.firstname && errors.firstname ? "is-invalid" : ""
              }`}
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                borderColor:
                  touched.firstname && errors.firstname ? "#dc3545" : "#f8bbd0",
                borderRadius: "10px",
                padding: "12px 15px",
              }}
            >
              <option value="">-- คำนำหน้าชื่อ --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
            {touched.fullname && errors.fullname && (
              <div className="invalid-feedback">{errors.fullname}</div>
            )}
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <label
                htmlFor="fullName"
                className="form-label"
                style={{ color: "#ad1457", fontWeight: "500" }}
              >
                ชื่อ <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${
                  touched.fullname && errors.fullname ? "is-invalid" : ""
                }`}
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="กรอกชื่อ"
                style={{
                  borderColor:
                    touched.fullname && errors.fullname ? "#dc3545" : "#f8bbd0",
                  borderRadius: "10px",
                  padding: "12px 15px",
                }}
              />
              {touched.fullname && errors.fullname && (
                <div className="invalid-feedback">{errors.fullname}</div>
              )}
            </div>
            <div className="col-md-6">
              <label
                htmlFor="lastname"
                className="form-label"
                style={{ color: "#ad1457", fontWeight: "500" }}
              >
                นามสกุล <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${
                  touched.lastname && errors.lastname ? "is-invalid" : ""
                }`}
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="กรอกนามสกุล"
                style={{
                  borderColor:
                    touched.lastname && errors.lastname ? "#dc3545" : "#f8bbd0",
                  borderRadius: "10px",
                  padding: "12px 15px",
                }}
              />
              {touched.lastname && errors.lastname && (
                <div className="invalid-feedback">{errors.lastname}</div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="address"
              className="form-label"
              style={{ color: "#ad1457", fontWeight: "500" }}
            >
              ที่อยู่ <span className="text-danger">*</span>
            </label>
            <textarea
              className={`form-control ${
                touched.address && errors.address ? "is-invalid" : ""
              }`}
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={3}
              placeholder="กรอกที่อยู่..."
              style={{
                borderColor:
                  touched.address && errors.address ? "#dc3545" : "#f8bbd0",
                borderRadius: "10px",
                padding: "12px 15px",
              }}
            />
            {touched.address && errors.address && (
              <div className="invalid-feedback">{errors.address}</div>
            )}
          </div>

          <div className="mb-3">
            <label
              className="form-label d-block"
              style={{ color: "#ad1457", fontWeight: "500" }}
            >
              เพศ <span className="text-danger">*</span>
            </label>
            <div className="d-flex">
              <div className="form-check me-4">
                <input
                  className={`form-check-input ${
                    touched.sex && errors.sex ? "is-invalid" : ""
                  }`}
                  type="radio"
                  name="sex"
                  id="genderMale"
                  value="ชาย"
                  checked={formData.sex === "ชาย"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    borderColor:
                      touched.sex && errors.sex ? "#dc3545" : "#f8bbd0",
                  }}
                />
                <label className="form-check-label" htmlFor="genderMale">
                  ชาย
                </label>
              </div>
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    touched.sex && errors.sex ? "is-invalid" : ""
                  }`}
                  type="radio"
                  name="sex"
                  id="genderFemale"
                  value="หญิง"
                  checked={formData.sex === "หญิง"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    borderColor:
                      touched.sex && errors.sex ? "#dc3545" : "#f8bbd0",
                  }}
                />
                <label className="form-check-label" htmlFor="genderFemale">
                  หญิง
                </label>
              </div>
            </div>
            {touched.sex && errors.sex && (
              <div className="text-danger small mt-1">{errors.sex}</div>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="birthday"
              className="form-label"
              style={{ color: "#ad1457", fontWeight: "500" }}
            >
              วันเกิด <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className={`form-control ${
                touched.birthday && errors.birthday ? "is-invalid" : ""
              }`}
              id="birthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                borderColor:
                  touched.birthday && errors.birthday ? "#dc3545" : "#f8bbd0",
                borderRadius: "10px",
                padding: "12px 15px",
              }}
            />
            {touched.birthday && errors.birthday && (
              <div className="invalid-feedback">{errors.birthday}</div>
            )}
          </div>

          <div className="form-check mb-4">
            <input
              className={`form-check-input ${
                touched.acceptTerms && errors.acceptTerms ? "is-invalid" : ""
              }`}
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                borderColor:
                  touched.acceptTerms && errors.acceptTerms
                    ? "#dc3545"
                    : "#f8bbd0",
              }}
            />
            <label className="form-check-label" htmlFor="acceptTerms">
              ยอมรับ{" "}
              <a href="#" style={{ color: "#ec407a" }}>
                เงื่อนไขและข้อตกลง
              </a>
            </label>
            {touched.acceptTerms && errors.acceptTerms && (
              <div className="invalid-feedback">{errors.acceptTerms}</div>
            )}
          </div>

          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn"
              disabled={isSubmitting}
              style={{
                backgroundColor: "#ec407a",
                color: "white",
                padding: "12px",
                borderRadius: "30px",
                fontWeight: "500",
                boxShadow: "0 4px 10px rgba(236, 64, 122, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = "#d81b60";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ec407a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  กำลังลงทะเบียน...
                </>
              ) : (
                "ลงทะเบียน"
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="mb-0">
            มีบัญชีอยู่แล้ว?{" "}
            <Link
              href="/login"
              style={{
                color: "#ec407a",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              เข้าสู่ระบบ
            </Link>
          </p>
        </div>
      </div>

      {/* Add Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      />
    </div>
  );
}

export default Register;
