import React from "react";
import animation from "./assets/images/hero-animacion.png";

const FloatingImage = () => {
  const styles = {
    floatingImage: {
      width: "100%",
      maxWidth: "600px", 
      display: "block",
      margin: "0 auto",
      animation: "float 3s ease-in-out infinite",
    },
  };

  return (
    <div>
      <img
        src={animation}
        alt="Floating Image"
        style={styles.floatingImage}
      />
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-70px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @media (max-width: 992px) {
            img {
              width: 100%; 
              max-width: 400px; 
              margin-top: 60px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingImage;
