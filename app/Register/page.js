'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    title: '',
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    birthDate: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    
    // Validate on blur
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'username':
        if (!value) error = 'กรุณากรอกชื่อผู้ใช้';
        else if (value.length < 4) error = 'ชื่อผู้ใช้ต้องมีอย่างน้อย 4 ตัวอักษร';
        break;
      case 'password':
        if (!value) error = 'กรุณากรอกรหัสผ่าน';
        else if (value.length < 6) error = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
        break;
      case 'title':
        if (!value) error = 'กรุณาเลือกคำนำหน้าชื่อ';
        break;
      case 'firstName':
        if (!value) error = 'กรุณากรอกชื่อ';
        break;
      case 'lastName':
        if (!value) error = 'กรุณากรอกนามสกุล';
        break;
      case 'address':
        if (!value) error = 'กรุณากรอกที่อยู่';
        break;
      case 'gender':
        if (!value) error = 'กรุณาเลือกเพศ';
        break;
      case 'birthDate':
        if (!value) error = 'กรุณาเลือกวันเกิด';
        break;
      case 'acceptTerms':
        if (!value) error = 'กรุณายอมรับเงื่อนไข';
        break;
      default:
        break;
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    
    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    // Validate all fields
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const touchedFields = {};
    Object.keys(formData).forEach(key => {
      touchedFields[key] = true;
    });
    setTouched(touchedFields);
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        // Redirect to login page after successful registration
        router.push('/login');
      }, 1500);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: 'url("https://i.pinimg.com/736x/ec/db/cf/ecdbcf924703da27cc68619d01d52b19.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px 0'
      }}
    >
      <div className="shadow p-5 rounded-4 bg-white" style={{ 
        width: '100%', 
        maxWidth: '900px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '8px',
            background: 'linear-gradient(to right, #ff69b4, #ff8dc7)'
          }}
        ></div>
        
        <h2 className="text-center mb-4" style={{ color: '#d81b60', fontWeight: 'bold' }}>ลงทะเบียน</h2>
        <p className="text-center text-muted mb-4">กรอกข้อมูลเพื่อสร้างบัญชีใหม่</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="username" className="form-label" style={{ color: '#ad1457', fontWeight: '500' }}>
              ชื่อผู้ใช้ <span className="text-danger">*</span>
            </label>
            <input 
              type="text" 
              className={`form-control ${touched.username && errors.username ? 'is-invalid' : ''}`} 
              id="username" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="กรอกชื่อผู้ใช้" 
              style={{
                borderColor: touched.username && errors.username ? '#dc3545' : '#f8bbd0',
                borderRadius: '10px',
                padding: '12px 15px'
              }}
            />
            {touched.username && errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ color: '#ad1457', fontWeight: '500' }}>
              รหัสผ่าน <span className="text-danger">*</span>
            </label>
            <input 
              type="password" 
              className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`} 
              id="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="กรอกรหัสผ่าน" 
              style={{
                borderColor: touched.password && errors.password ? '#dc3545' : '#f8bbd0',
                borderRadius: '10px',
                padding: '12px 15px'
              }}
            />
            {touched.password && errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label" style={{ color: '#ad1457', fontWeight: '500' }}>
              คำนำหน้าชื่อ <span className="text-danger">*</span>
            </label>
            <select 
              className={`form-select ${touched.title && errors.title ? 'is-invalid' : ''}`} 
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                borderColor: touched.title && errors.title ? '#dc3545' : '#f8bbd0',
                borderRadius: '10px',
                padding: '12px 15px'
              }}
            >
              <option value="">-- คำนำหน้าชื่อ --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
            {touched.title && errors.title && (
              <div className="invalid-feedback">{errors.title}</div>
            )}
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="firstName" className="form-label" style={{ color: '#ad1457', fontWeight: '500' }}>
                ชื่อ <span className="text-danger">*</span>
              </label>
              <input 
                type="text" 
                className={`form-control ${touched.firstName && errors.firstName ? 'is-invalid' : ''}`} 
                id="firstName" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="กรอกชื่อ" 
                style={{
                  borderColor: touched.firstName && errors.firstName ? '#dc3545' : '#f8bbd0',
                  borderRadius: '10px',
                  padding: '12px 15px'
                }}
              />
              {touched.firstName && errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label" style={{ color: '#ad1457', fontWeight: '500' }}>
                นามสกุล <span className="text-danger">*</span>
              </label>
              <input 
                type="text" 
                className={`form-control ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`} 
                id="lastName" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="กรอกนามสกุล" 
                style={{
                  borderColor: touched.lastName && errors.lastName ? '#dc3545' : '#f8bbd0',
                  borderRadius: '10px',
                  padding: '12px 15px'
                }}
              />
              {touched.lastName && errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label" style={{ color: '#ad1457', fontWeight: '500' }}>
              ที่อยู่ <span className="text-danger">*</span>
            </label>
            <textarea 
              className={`form-control ${touched.address && errors.address ? 'is-invalid' : ''}`} 
              id="address" 
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={3} 
              placeholder="กรอกที่อยู่..." 
              style={{
                borderColor: touched.address && errors.address ? '#dc3545' : '#f8bbd0',
                borderRadius: '10px',
                padding: '12px 15px'
              }}
            />
            {touched.address && errors.address && (
              <div className="invalid-feedback">{errors.address}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label d-block" style={{ color: '#ad1457', fontWeight: '500' }}>
              เพศ <span className="text-danger">*</span>
            </label>
            <div className="d-flex">
              <div className="form-check me-4">
                <input 
                  className={`form-check-input ${touched.gender && errors.gender ? 'is-invalid' : ''}`} 
                  type="radio" 
                  name="gender" 
                  id="genderMale" 
                  value="ชาย"
                  checked={formData.gender === 'ชาย'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    borderColor: touched.gender && errors.gender ? '#dc3545' : '#f8bbd0'
                  }}
                />
                <label className="form-check-label" htmlFor="genderMale">ชาย</label>
              </div>
              <div className="form-check">
                <input 
                  className={`form-check-input ${touched.gender && errors.gender ? 'is-invalid' : ''}`} 
                  type="radio" 
                  name="gender" 
                  id="genderFemale" 
                  value="หญิง"
                  checked={formData.gender === 'หญิง'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    borderColor: touched.gender && errors.gender ? '#dc3545' : '#f8bbd0'
                  }}
                />
                <label className="form-check-label" htmlFor="genderFemale">หญิง</label>
              </div>
            </div>
            {touched.gender && errors.gender && (
              <div className="text-danger small mt-1">{errors.gender}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="birthDate" className="form-label" style={{ color: '#ad1457', fontWeight: '500' }}>
              วันเกิด <span className="text-danger">*</span>
            </label>
            <input 
              type="date" 
              className={`form-control ${touched.birthDate && errors.birthDate ? 'is-invalid' : ''}`} 
              id="birthDate" 
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                borderColor: touched.birthDate && errors.birthDate ? '#dc3545' : '#f8bbd0',
                borderRadius: '10px',
                padding: '12px 15px'
              }}
            />
            {touched.birthDate && errors.birthDate && (
              <div className="invalid-feedback">{errors.birthDate}</div>
            )}
          </div>

          <div className="form-check mb-4">
            <input 
              className={`form-check-input ${touched.acceptTerms && errors.acceptTerms ? 'is-invalid' : ''}`} 
              type="checkbox" 
              id="acceptTerms" 
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                borderColor: touched.acceptTerms && errors.acceptTerms ? '#dc3545' : '#f8bbd0'
              }}
            />
            <label className="form-check-label" htmlFor="acceptTerms">
              ยอมรับ <a href="#" style={{ color: '#ec407a' }}>เงื่อนไขและข้อตกลง</a>
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
                backgroundColor: '#ec407a', 
                color: 'white',
                padding: '12px',
                borderRadius: '30px',
                fontWeight: '500',
                boxShadow: '0 4px 10px rgba(236, 64, 122, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = '#d81b60';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ec407a';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  กำลังลงทะเบียน...
                </>
              ) : 'ลงทะเบียน'}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="mb-0">
            มีบัญชีอยู่แล้ว? {' '}
            <Link href="/login" style={{ color: '#ec407a', textDecoration: 'none', fontWeight: '500' }}>
              เข้าสู่ระบบ
            </Link>
          </p>
        </div>
      </div>
      
      {/* Add Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
    </div>
  );
}

export default Register;