import "./Header.css";
import { useState, useEffect } from "react";

export default function TopHeader() {
  const [subBio, setsubBio] = useState(true);
  const arraySub = subBio ? "WEB DEVELOPER" : "JAVA ENTHUSIAST";
  useEffect(() => {
    let xd = setInterval(() => {
      setsubBio((prev) => !prev);
    }, 4000);
    return () => {
      clearInterval(xd);
    };
  }, []);
  return (
    <>
      <div className="header_container">
        <h1>Cyber Security Blah blah</h1>
        <div className="div_holder">
          <h4 className="sub_header">{arraySub}</h4>
        </div>
      </div>
    </>
  );
}
