import { PortableTextBlock } from "sanity";

export type HeroImage = {
  attribution: string;
  heroImgUrl: string;
};



export type Settings = {
  _id: string;
  title: string;
  audio_comp: string;
  herovisual: HeroImage;
  seoDescription: string;
  intro_text: PortableTextBlock[];
  seoImageUrl: string;
};
