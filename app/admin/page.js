'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);


  useEffect(() => {

    async function getUsers() {
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
 
  getUsers()
  const interval  = setInterval(getUsers, 1000);
  return () => clearInterval(interval);
}, []);

  return (
    <>
      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-header bg-gradient text-white" style={{ backgroundColor: '#ec407a', fontWeight: 'bold', fontSize: '1.2rem' }}>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped align-middle text-center table-bordered">
                <thead className="table-danger">
                  <tr>
            <th className='col-md-2 text-center'>#</th>
            <th className='col-md-4'>Firstname</th>
            <th className='col-md-4'>Fullname</th>
            <th className='col-md-4'>Lastname</th>
            <th className='col-md-4'>Username</th>
            <th className='col-md-4'>Password</th>
            <th className='col-md-4'>Address</th>
            <th className='col-md-4'>Sex</th>
            <th className='col-md-4'>Birthday</th>
            <th className='col-md-1'>Eidt</th>
            <th className='col-md-1'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className='text-center'>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.fullname}</td>
              <td>{item.lastname}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.address}</td>
              <td>{item.sex}</td>
              <td>{item.birthday}</td>
        <td>
        <Link href={`/edit/${item.id}`} className="btn btn-sm btn-warning">
    <i className="bi bi-pencil-square"></i> แก้ไข
        </Link>
        </td>
    <td>
        <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-danger">
    <i className="bi bi-trash-fill"></i> ลบ
        </button>
    </td>
    </tr>
                    
          ))}
        </tbody>
      </table>
    </div>
    </div>

    </div>
    </div>
    <br /><br />

    </>
  );
}