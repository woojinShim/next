import Image from "next/image";
import homeImg from '/public/home.jpg';
import Hero from '@/components/hero'

export default function Home() {
  return (
    <Hero 
    imgData={homeImg}
    imgAlt='cat factory'
    title="Professional Cloud Hosting"
    />
      
    );
}
