// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Settings } from "./types/Settings";
import { Information } from "./types/Information";
import { SingleProject } from "./types/Project"



export async function getsettings(): Promise<Settings[]> {
    return createClient(clientConfig).fetch(
      `*[_type == "siteSettings"]{
        _id,
       title,
       "herovisual": hero_image{
          "heroImgUrl": asset->url,
          attribution,
          
       },
       intro_text,
      "audio_comp": audio_comp.asset->url,
      "seoDescription": seo.description,
      "seoImageUrl": seo.seo_image.asset->url,
       
       
 }`
    )
  }

  export async function getProjects(): Promise<SingleProject[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "singleProject"]{
        _id,
        title,
        "slug": slug.current,
        classname,
        date,
          projectdescription,
        "projectImages": projectImages[]{
          "url": asset->url,
          attribution,
          _type,
          classImg,
          text
        },
          }`,
    )
  }

  export async function getInformation(): Promise<Information[]>{
    return createClient(clientConfig).fetch(
      groq`*[_type == "information"]{
        _id,
        title,
        information,
        socialInfo[] {
          _key,
          socialName,
          socialURL  
        },
        "aboutVisual": about_image{
        attribution,
          "aboutVisualURL": asset->url,
          
       },
        
    }`,

    )
  }



