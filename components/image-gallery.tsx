import Image from "next/image";

import image1 from "@/public/image-1.jpg";
import image2 from "@/public/image-2.jpg";
import image3 from "@/public/image-3.jpg";
import image4 from "@/public/image-4.jpg";
import image5 from "@/public/image-5.jpg";
import portrait from "@/public/portrait.jpg";

export default function ImageGallery() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <Image
            alt="Image 1"
            fill
            loading="lazy"
            decoding="async"
            className="object-cover text-transparent"
            src={image1}
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
          <Image
            alt="Image 2"
            fill
            loading="lazy"
            decoding="async"
            className="object-cover text-transparent"
            src={image2}
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <Image
            alt="Image 3"
            fill
            loading="lazy"
            decoding="async"
            className="object-cover text-transparent"
            src={image3}
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <Image
            alt="Image 4"
            fill
            loading="lazy"
            decoding="async"
            className="object-cover text-transparent"
            src={image4}
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
          <Image
            alt="Image 5"
            fill
            loading="lazy"
            decoding="async"
            className="object-cover text-transparent"
            src={image5}
          />
        </div>
      </div>
    </div>
  );
}
