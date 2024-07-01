"use client";
export default function Nav() {
  const scrollAfter = () => {
    const after = "afterCurrent";

    setTimeout(() => {
      const element = document.getElementById(after);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const scrollBefore = () => {
    const before = "beforeCurrent";

    setTimeout(() => {
      const element = document.getElementById(before);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <div className="navigation">
      <div onClick={scrollAfter} className="afterLink"></div>
      <p>OPEN TIMELINE TO SCROLL THROUGH THE PROJECT</p>
      <div onClick={scrollBefore} className="beforeLink"></div>
    </div>
  );
}
