import { getsettings, getInformation, getProjects } from '@/sanity/sanity.utils'
import Header from '../components/header/header.component';
import InfoContent from '../components/infoContent/infoContent.component';

import type { Metadata } from 'next'
export const dynamic = 'force-dynamic'
 
export async function generateMetadata(
): Promise<Metadata> {
  const settings = await getsettings()
  return {
    title: `${settings[0].title} | About` ,
    description: settings[0].seoDescription,

    openGraph: {
      title: `${settings[0].title}` ,
      description: settings[0].seoDescription,
      url: 'tbd.com',
      siteName: `${settings[0].title}`,

      images: [
        {
          url: `${settings[0].seoImageUrl}` ,
          width: 1200,
          height: 628,
        },
        
        
      ],
      locale: 'en_US',
    type: 'website',
    },
  }
}

export default async function Information() {
  const settings = await getsettings()
  const info = await getInformation();
  const projects = await getProjects();

    return (
      
     
      <main className='officePage'>
        <Header set={settings} projects={projects}/>
        <InfoContent info={info} />

        
      </main>
    )
  }
  