"use client"

import { Title } from "@/components/Title";
import Image from "next/image";

type GalleryTripProps = {
  images: string[];
  coverImage: string;
};

export const GalleryTrip = ({
  images,
  coverImage,
}:GalleryTripProps) => {


  return (
    <div>
      <div className="relative h-[300px] w-full">
        {coverImage ? <Image src={coverImage} alt={'coverImage'} fill objectFit="cover" /> : null}
      </div>
      <div className="flex flex-wrap justify-center">
        {images ? images.map((image, index) => (
          <div key={index} className="relative h-[300px] w-[300px]">
            <Image src={image} alt={'image'} fill />
          </div>
        )): null}
        </div>
    </div>
  )
}