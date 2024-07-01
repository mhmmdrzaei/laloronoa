import { PortableText } from "@portabletext/react";
import { Information } from "@/sanity/types/Information";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

export const dynamic = "force-dynamic";

type LinkMark = {
  blank?: boolean;
  href: string;
};

type Components = {
  marks: {
    link: (props: {
      value: LinkMark;
      children: React.ReactNode;
    }) => React.ReactNode;
  };
};

type HeaderProps = {
  info: Information[];
};

const components: Components = {
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

export default function InfoContent({ info }: HeaderProps) {
  return (
    <>
      {info.map((infoPage) => (
        <section className="pageMain aboutPage" key={infoPage._id}>
          <div className="aboutPageText">
            <PortableText
              value={infoPage.information}
              components={components as any}
            />
            <div className="contactInnerContainer">
              {infoPage.socialInfo.map((social) => {
                return (
                  <div className="contactEach" key={uuidv4()}>
                    <a href={`${social.socialURL}`} target="_blank">
                      {social.socialName}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <figure className="aboutImg">
            <Image
              src={infoPage.aboutVisual.aboutVisualURL}
              alt={infoPage.aboutVisual.attribution}
              width={500}
              height={500}
              loading="lazy"
            />
          </figure>
        </section>
      ))}
    </>
  );
}
