"use client";
import { Settings } from "@/sanity/types/Settings";
import Image from "next/image";
import { SingleProject } from "@/sanity/types/Project";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import AudioPlayer from "../audioComponent/audioComponent.component";
import Timeline from "../timline/timeline.component"

export const dynamic = "force-dynamic";

type HeaderProps = {
  set: Settings[];
  projects: SingleProject[];
};

export default function Header({ set, projects }: HeaderProps) {
  return (
    <header>
      {set.map((setting) => (
        <>
          <h1 className="siteTitle">
            <Link href={"/"}>{setting.title}</Link>
          </h1>
          <h1 className="aboutLink">
            <Link href={"/about"}>About</Link>
          </h1>
          <AudioPlayer audio={setting.audio_comp} />
          <div className="sound"></div>
        </>
      ))}
    <Timeline projects={projects} />
    </header>
  );
}
