import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero/Hero';

import Head from 'next/head';
import Image from 'next/image';
import OurProjects from '../components/OurProjects';
import TrustedBy from '../components/Trustedby';
export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC USTHB</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-gdsc-background font-IBM-Plex">

      <OurProjects/>
      <TrustedBy/>
        <Hero />
        <OurProjects />

      </main>
    </>
  );
}
