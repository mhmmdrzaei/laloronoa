import { PortableTextBlock } from "sanity";

export type ProjectImage = {
  _type: 'projectImage';
  attribution: string;
  classImg: string;
  url: string;
};

export type ProjectVideo = {
  _type: 'project_video';
  attribution: string;
  url: string;
  
};

export type ProjectText = {
  _type: 'embedVid';
  text: string;
  url: string;

};

export type ProjectAssets = ProjectImage | ProjectVideo | ProjectText ;


export type SingleProject = {
  map(arg0: (items: any) => import("react").JSX.Element | null): unknown;
  _id: string;
  title: string;
  slug: string;
  date: any;
  classname: string;
  projectdescription: PortableTextBlock[];
  projectImages: ProjectAssets[];
  bgColour: string;

};
