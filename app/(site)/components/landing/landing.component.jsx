import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Background from "../background/background.component";
const Landing = ({ settings }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const components = {
    marks: {
      link: ({ value, children }) => {
        const { blank, href } = value;
        return blank ? (
          <a href={href} target="_blank" rel="noopener">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        );
      },
    },
  };

  return (
    <section className="landingPage section" data-bgcolor='#ffffff'>
      <h1 className="pageTitle">{formattedDate}</h1>
      <Background>

        {settings.map((c) => (
          <div className="landingPageInner">
            <div className="navigation">
              <Link href={"#afterCurrent"} className="afterLink"></Link>
              <p>OPEN TIMELINE TO SCROLL THROUGH THE PROJECT</p>
              <Link href={"#beforeCurrent"} className="beforeLink"></Link>
            </div>
            <figure className="landingImg">
              <Image
                src={c.herovisual.heroImgUrl}
                width={1200}
                height={1200}
                alt={
                  c.herovisual.attribution
                    ? c.herovisual.attribution
                    : "A Project by Sofi Gudiño"
                }
                loading="lazy"
                quality={60}
              />
            </figure>
            <div className="landingText">
              <PortableText value={c.intro_text} components={components} />
            </div>
          </div>
        ))}
      </Background>
    </section>
  );
};

export default Landing;