import { PortableTextBlock } from "sanity";

export type Social = {
  _type: 'social',
  socialName: string,
  socialURL: string,
};

export type AboutImage = {
  aboutVisualURL: string;
  attribution: string;
};


export type Information = {
  _id: string,
  title: string,
  url: string,
  aboutVisual:AboutImage,
  pageTitle: string,
  information: PortableTextBlock[],
  socialInfo: Social[],
};
