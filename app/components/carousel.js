//import ใน /app/page.js

'use client';
import { useEffect } from 'react';
import Image from "next/image";

export default function Carousel() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  
  return (
    <div className="carousel-container" style={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "0 0 30px 30px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      marginBottom: "30px"
    }}>
      <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div style={{ position: "relative" }}>
              <Image 
                src="/p1.jpg" 
                className="d-block w-100" 
                alt="..." 
                width={1920} 
                height={690} 
                style={{
                  objectFit: "cover",
                  height: "70vh",
                  filter: "brightness(0.9)"
                }}
              />
              <div style={{
                position: "absolute",
                bottom: "20%",
                left: "10%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "20px",
                borderRadius: "15px",
                maxWidth: "400px",
                animation: "fadeInUp 1s ease-out",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}>
                <h2 style={{ color: "#d81b60" }}>Welcome to Sanrio World</h2>
                <p>Discover the cutest characters from Japan</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ position: "relative" }}>
              <Image 
                src="/p6.jpg" 
                className="d-block w-100" 
                alt="..." 
                width={1920} 
                height={690} 
                style={{
                  objectFit: "cover",
                  height: "70vh",
                  filter: "brightness(0.9)"
                }}
              />
              <div style={{
                position: "absolute",
                bottom: "20%",
                right: "10%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "20px",
                borderRadius: "15px",
                maxWidth: "400px",
                animation: "fadeInUp 1s ease-out",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}>
                <h2 style={{ color: "#d81b60" }}>Kawaii Collection</h2>
                <p>Explore our adorable character lineup</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ position: "relative" }}>
              <Image 
                src="/p8.jpg" 
                className="d-block w-100" 
                alt="..." 
                width={1920} 
                height={690} 
                style={{
                  objectFit: "cover",
                  height: "70vh",
                  filter: "brightness(0.9)"
                }}
              />
              <div style={{
                position: "absolute",
                bottom: "20%",
                left: "10%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "20px",
                borderRadius: "15px",
                maxWidth: "400px",
                animation: "fadeInUp 1s ease-out",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}>
                <h2 style={{ color: "#d81b60" }}>Cute Merchandise</h2>
                <p>Find your favorite character items</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="carousel-indicators" style={{ bottom: "20px" }}>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" 
            style={{ 
              width: "12px", 
              height: "12px", 
              borderRadius: "50%", 
              backgroundColor: "#f06292",
              border: "none",
              margin: "0 5px",
              transition: "all 0.3s ease"
            }}
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" 
            style={{ 
              width: "12px", 
              height: "12px", 
              borderRadius: "50%", 
              backgroundColor: "#f06292",
              border: "none",
              margin: "0 5px",
              transition: "all 0.3s ease"
            }}
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" 
            style={{ 
              width: "12px", 
              height: "12px", 
              borderRadius: "50%", 
              backgroundColor: "#f06292",
              border: "none",
              margin: "0 5px",
              transition: "all 0.3s ease"
            }}
            aria-label="Slide 3"></button>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            top: "50%",
            transform: "translateY(-50%)",
            left: "20px",
            opacity: "0.8",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
            e.currentTarget.style.opacity = "0.8";
          }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: "invert(50%) sepia(50%) saturate(1000%) hue-rotate(300deg)" }} />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            top: "50%",
            transform: "translateY(-50%)",
            right: "20px",
            opacity: "0.8",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
            e.currentTarget.style.opacity = "0.8";
          }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: "invert(50%) sepia(50%) saturate(1000%) hue-rotate(300deg)" }} />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .carousel-item {
          transition: transform 1.2s ease-in-out;
        }
        
        .carousel-indicators button:hover {
          transform: scale(1.2);
          background-color: #ec407a !important;
        }
        
        .carousel-container::after {
          content: "";
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 95%;
          height: 30px;
          background-color: #fce4ec;
          border-radius: 50%;
          z-index: -1;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
}