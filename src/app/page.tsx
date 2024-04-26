import Header from '@/components/header';
import HeroSection from '@/components/hero';
import React from 'react'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <HeroSection />
    </div>
  );
}
