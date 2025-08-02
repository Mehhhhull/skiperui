'use client'
import React from 'react'
import WrapButton from "@/components/ui/wrap-button"
import ShareButton from '@/components/ui/share-button'
import { Banana, Cloud, LandPlot, Twitter } from 'lucide-react'
import FlipLink from '@/components/ui/text-effect-flipper'
import { CardCarousel } from "@/components/ui/card-carousel"

const page = () => {
  const images = [
    { src: "/card1.jpg", alt: "Image 1" },
    { src: "/card2.jpg", alt: "Image 2" },
    { src: "/card3.jpg", alt: "Image 3" },
  ]
  return (
    <div>
     <h1 className='bg-red-600'>FOLLOW ME GUYSSSS</h1>
    <WrapButton>MKS</WrapButton>
    <ShareButton links={[{icon:Twitter},{icon:Banana},{icon:LandPlot},{icon:Cloud}]}>Share</ShareButton>

    <FlipLink href='https://github.com/Mehhhhull'>Github</FlipLink>

   <CardCarousel images={images}/>
    </div>
  )
}

export default page
