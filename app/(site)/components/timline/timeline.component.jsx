"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TimeLine = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      console.log("Closing the menu");
    } else {
      console.log("Opening the menu");
    }
    setIsOpen(!isOpen);
    document.querySelector('.navigation').classList.toggle("navAnime");
  };
  const router = useRouter();

  return (
    <div className="timeline">
      <ul className={`menu ${isOpen ? "openMenu" : ""}`}>
        {projects
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((project) => {
            const handleCloseProject = () => {
              const projectName = project.slug;
              const aboutProjectName = `/#${project.slug}`;
              toggleMenu();
              const element = document.getElementById(projectName);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              } else {
                router.push("/");
              }
            };

            return (
              <li key={project._id} onClick={handleCloseProject}>
                {/* <Link href={`/#${project.slug}`}></Link> */}
                <span>{project.title}</span>
              </li>
            );
          })}
      </ul>
      <button onClick={toggleMenu}>{isOpen ? "Close" : "Timeline"}</button>
    </div>
  );
};

export default TimeLine;
