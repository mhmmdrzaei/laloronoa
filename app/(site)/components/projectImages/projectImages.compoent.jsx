import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";

export default function ProjectImages({ images }) {
  return (
    <>
      {images.map((items) => {
        switch (items._type) {
          case "project_video":
            return (
              <div className="projectVideo" key={uuidv4()}>
                <div className="projectVideo">
                  <video autoPlay loop muted playsInline>
                    <source src={items.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            );

          case "projectImage":
            return (
              <figure className={`${items.classImg} image`} key={uuidv4()}>
                <Image
                  src={items.url}
                  width={700}
                  height={700}
                  alt={
                    items.attribution
                      ? items.attribution
                      : "A Project by Sofi Gudiño"
                  }
                  loading="lazy"
                  quality={60}
                />
              </figure>
            );

          case "embedVid":
            const markup = { __html: `${items.text}` };
            return (
              <div className={`${items.classImg} projectVideo`} key={uuidv4()}>
                <div className="videotextContainer">
                  <div
                    className="embedVideoContent"
                    dangerouslySetInnerHTML={markup}
                  />
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
