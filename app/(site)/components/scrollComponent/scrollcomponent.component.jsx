"use client"
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComponent = () => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const scrollOffset = screenWidth > 700 ? 1.3 : 1.7;
    window.scrollTo(0, scrollOffset * window.innerHeight);
    const sections = gsap.utils.toArray(".section");

    const switchColor = (color) => {
      gsap.to(document.body, {
        duration: 1,
        ease: "power1.inOut",
        backgroundColor: color
      });
    };

    sections.forEach((section, i) => {
      const color = section.dataset.bgcolor;
      const previousColor = sections[i - 1]
        ? sections[i - 1].dataset.bgcolor
        : "#000000";
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => switchColor(color),
        onEnterBack: () => i === sections.length - 1 && switchColor(color),
        onLeave: () => i === sections.length - 1 && switchColor("#000000"),
        onLeaveBack: () => switchColor(previousColor),
        // markers: { indent: 150 * i },
        // id: i + 1       
      });
      gsap.fromTo(section.querySelector(".layout1"), {
        y: '-20%' // Start position
      }, {
        y: '10%', // End position
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // When the top of the section hits the bottom of the viewport
          end: "bottom top", // When the bottom of the section hits the top of the viewport
          scrub: true // Smooth scrubbing
        }
      });
      gsap.fromTo(section.querySelector(".layout2"), {
        y: '0%' // Start position
      }, {
        y: '80%', // End position
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // When the top of the section hits the bottom of the viewport
          end: "bottom top", // When the bottom of the section hits the top of the viewport
          scrub: true // Smooth scrubbing
        }
      });
      gsap.fromTo(section.querySelector(".first-image"), {
        y: '-1%' // Start position
      }, {
        y: '-10%', // End position
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // When the top of the section hits the bottom of the viewport
          end: "bottom top", // When the bottom of the section hits the top of the viewport
          scrub: true // Smooth scrubbing
        }
      });
      gsap.fromTo(section.querySelector(".second-image"), {
        y: '10%' // Start position
      }, {
        y: '0%', // End position
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // When the top of the section hits the bottom of the viewport
          end: "bottom top", // When the bottom of the section hits the top of the viewport
          scrub: true // Smooth scrubbing
        }
      });

        gsap.to({}, {
      scrollTrigger: {
        trigger: document.body,
        start: "700vh 0px",
        end: "bottom top",
        onEnter: () => {document.body.classList.remove('white-text')},
      onLeave: () => {document.body.classList.add('white-text')},
        onEnterBack: () => {document.body.classList.remove('white-text')},
        onLeaveBack: () => {document.body.classList.add('white-text')},
      }
    });

      
    });

    

    // Clean up ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null; // This component does not render any HTML itself
};

export default ScrollTriggerComponent;
