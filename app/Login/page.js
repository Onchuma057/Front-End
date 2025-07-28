'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
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
        break;
      case 'password':
        if (!value) error = 'กรุณากรอกรหัสผ่าน';
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
      if (key !== 'rememberMe') { // Don't validate checkbox
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      username: true,
      password: true
    });
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        
        // Simple authentication check
        if (formData.username === 'admin' && formData.password === '1234') {
          router.push('/home');
        } else {
          setErrors({
            login: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
          });
        }
      }, 1000);
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
        maxWidth: '500px',
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
        
        <h2 className="text-center mb-4" style={{ color: '#d81b60', fontWeight: 'bold' }}>เข้าสู่ระบบ</h2>
        <p className="text-center text-muted mb-4">กรอกข้อมูลเพื่อเข้าสู่ระบบ</p>

        {errors.login && (
          <div className="alert alert-danger mb-4" role="alert">
            {errors.login}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="username" className="form-label" style={{ color: '#ad1457', fontWeight: '500' }}>
              ชื่อผู้ใช้ <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text" style={{ 
                backgroundColor: '#fce4ec', 
                borderColor: touched.username && errors.username ? '#dc3545' : '#f8bbd0',
                borderRight: 'none',
                borderRadius: '10px 0 0 10px'
              }}>
                <i className="bi bi-person" style={{ color: '#ec407a' }}></i>
              </span>
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
                  borderLeft: 'none',
                  borderRadius: '0 10px 10px 0',
                  padding: '12px 15px'
                }}
              />
            </div>
            {touched.username && errors.username && (
              <div className="text-danger small mt-1">{errors.username}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label" style={{ color: '#ad1457', fontWeight: '500' }}>
              รหัสผ่าน <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text" style={{ 
                backgroundColor: '#fce4ec', 
                borderColor: touched.password && errors.password ? '#dc3545' : '#f8bbd0',
                borderRight: 'none',
                borderRadius: '10px 0 0 10px'
              }}>
                <i className="bi bi-lock" style={{ color: '#ec407a' }}></i>
              </span>
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
                  borderLeft: 'none',
                  borderRadius: '0 10px 10px 0',
                  padding: '12px 15px'
                }}
              />
            </div>
            {touched.password && errors.password && (
              <div className="text-danger small mt-1">{errors.password}</div>
            )}
          </div>

          <div className="d-flex justify-content-between mb-4">
            <div className="form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="rememberMe" 
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                style={{
                  borderColor: '#f8bbd0',
                  backgroundColor: formData.rememberMe ? '#ec407a' : ''
                }}
              />
              <label className="form-check-label" htmlFor="rememberMe">จำฉันไว้</label>
            </div>
            <Link href="/forgot-password" style={{ color: '#ec407a', textDecoration: 'none', fontWeight: '500' }}>
              ลืมรหัสผ่าน?
            </Link>
          </div>

          <div className="d-grid gap-2 mb-4">
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
                  กำลังเข้าสู่ระบบ...
                </>
              ) : 'เข้าสู่ระบบ'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="mb-0">
            ยังไม่มีบัญชี? {' '}
            <Link href="/register" style={{ color: '#ec407a', textDecoration: 'none', fontWeight: '500' }}>
              สมัครสมาชิก
            </Link>
          </p>
        </div>
      </div>
      
      {/* Add Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
    </div>
  );
}