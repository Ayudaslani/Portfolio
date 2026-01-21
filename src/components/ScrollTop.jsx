import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setVisible(window.scrollY > 300);
    });
  }, []);

  return (
    visible && (
      <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <FaArrowUp />
      </div>
    )
  );
}

export default ScrollTop;
