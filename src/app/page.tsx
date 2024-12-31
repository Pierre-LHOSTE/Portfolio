"use client";
import Background from "@/components/background/Background";
import ChatApp from "@/components/chat-app/ChatApp";
import Scroll from "@/components/chat-app/components/scroll/Scroll";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import "@/styles/app.css";
import "overlayscrollbars/overlayscrollbars.css";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ImagePreview from "@/components/image-preview/ImagePreview";
import Projects from "@/components/projects/ProjectsList";
import Stacks from "@/components/stack/Stacks";
import Timeline from "@/components/timeline/Timeline";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      <Scroll />
      <ChatApp />
      <Stacks />
      <Timeline />
      <Projects />
      <Contact />
      <ImagePreview />
      <Footer />
    </>
  );
}
