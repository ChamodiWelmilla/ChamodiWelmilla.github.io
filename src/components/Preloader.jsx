import React from "react";

const Preloader = () => {
  const preloaderStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 9999,
  };

  const imagesContainerStyle = {
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    marginBottom: "1.2%", 
  };

  const imageLeftStyle = {
    ...imageStyle,
    animation: "slideILeft 1.5s ease-in-out forwards 0s",
    paddingLeft: "4.5%",
    width: "28%",
    height: "auto",
  };

    const imageRightStyle = {
      ...imageStyle,
      animation: "slideIRight 1.5s ease-in-out forwards 0s",
      width: "23%",
      height: "auto",
    };

  return (
    <>
    <style>
        {`
        @keyframes slideILeft {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideIRight {
            0% {
                transform: translateX(100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }
        `}
    </style>
    <div style={preloaderStyle}>
      <div style={imagesContainerStyle}>
        <img src="/images/Top.png" alt="Image 1" style={imageLeftStyle} />
        <img src="/images/Bottom.png" alt="Image 2" style={imageRightStyle} />
      </div>
    </div>
    </>
  );
};

export default Preloader;
