import { getsettings, getProjects } from '@/sanity/sanity.utils';
import Header from './components/header/header.component';
import type { Metadata } from 'next';
import ProjectsAfterToday from './components/projectsAfterToday/projectsAfterToday.component'
import ProjectsBeforeToday from './components/projectsBeforeToday/projectsBeforeToday.component'
import Landing from './components/landing/landing.component'
import ScrollTriggerComponent from './components/scrollComponent/scrollcomponent.component'
import HomeComp from './components/homeComp/homeComp.component'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getsettings();
  return {
    title: `${settings[0].title}`,
    description: settings[0].seoDescription,
    openGraph: {
      title: `${settings[0].title}`,
      description: settings[0].seoDescription,
      url: 'https://laloronoa.vercel.app/',
      siteName: `${settings[0].title}`,
      images: [
        {
          url: `${settings[0].seoImageUrl}`,
          width: 1200,
          height: 628,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function Home() {
  const settings = await getsettings();
  const projects = await getProjects();

  return (
    <main>
      <Header set={settings} projects={projects}/>
      <ScrollTriggerComponent/>
      <ProjectsAfterToday projects={projects}/>
      <Landing settings={settings}/>
      <ProjectsBeforeToday projects={projects}/>
      
    </main>
  );
}
