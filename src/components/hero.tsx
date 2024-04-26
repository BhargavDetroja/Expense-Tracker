import React from 'react'
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center space-y-6">
     
     <div className='flex justify-center'>
        <h2 className="text-3xl"> Hello </h2>
        <Avatar className="animate-bounce">
            <AvatarImage alt="Bhargav Detroja" src="https://em-content.zobj.net/source/telegram/386/waving-hand_1f44b.webp?height=120&width=100" />
        </Avatar> 
        {/* <h2 className="text-3xl">,  </h2> */}
      </div>
      <h1 className="text-5xl font-bold"> I'm Bhargav Detroja.</h1> 
      <p className="max-w-2xl text-xl animate-fade-in-up">
        Hello, I am Bhargav, web-developer based in India. I have rich experience in web site building and
        customization.
      </p>
      <div className="flex gap-4">
        <Button className="animate-scale-up">Hire Me</Button>
        <Button className="animate-scale-up" variant="outline">
          Get My CV
        </Button>
      </div>

      {/* <div className="container mx-auto mt-12">
        <div>
        <h1 className="text-6xl font-bold animate-bounce">I'm Bhargav Detroja.   </h1>
        <Avatar className="animate-bounce">
            <AvatarImage alt="Bhargav Detroja" src="https://em-content.zobj.net/source/telegram/386/waving-hand_1f44b.webp?height=100&width=100" />
        </Avatar>
     
      </div>
        <p className="text-xl text-gray-700 mt-4 mb-8">
          Hello, I am Bhargav, web-developer based on India. I have rich experience in web site building and
          customization.
        </p>
        <div className="space-x-4">
          <Button className="animate-pulse">Hire Me</Button>
          <Button className="animate-pulse" variant="outline">
            Get My CV
          </Button>
        </div>
      </div> */}
    </section>
  )
}

export default HeroSection