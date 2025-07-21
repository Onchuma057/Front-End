'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '1234') {
      router.push('/home');
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: 'url("https://i.pinimg.com/736x/ec/db/cf/ecdbcf924703da27cc68619d01d52b19.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="shadow p-5 rounded-4"
        style={{
          width: '900px',
          backgroundColor: 'rgba(242, 101, 164, 0.85)', // พื้นหลังกล่องโปร่งแสง
          backdropFilter: 'blur(3px)',
        }}
      >
        <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="กรอกชื่อผู้ใช้"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="กรอกรหัสผ่าน"
            />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">จำฉันไว้</label>
          </div>

          <div className="d-grid">
          <div className="d-grid">
  <button
    type="submit"
    className="btn"
    style={{ backgroundColor: '#ffffffff', color: 'black' }} // เขียวสด
  >
    Login
  </button>
</div>


          </div>
        </form>

        <div className="text-center mt-3">
          <Link href="/Register" className="text-decoration-none me-3">สมัครสมาชิก</Link>
          <Link href="/forgot-password" className="text-decoration-none">ลืมรหัสผ่าน?</Link>
        </div>
      </div>
    </div>
  );
}
