import React from "react";
import Marquee from "react-fast-marquee";

const ScrollingText = () => {
  return (
    <div style={{ backgroundColor: "#f0f8ff", padding: "50px 0" }}>
      <Marquee speed={100} gradient={false} pauseOnHover={true}>
        <h1 className="hover-fill-text">Surgery +</h1>
        <h1 className="hover-fill-text">Healthcare +</h1>
        <h1 className="hover-fill-text">Pharmacy +</h1>
      </Marquee>
    </div>
  );
};

export default ScrollingText;
