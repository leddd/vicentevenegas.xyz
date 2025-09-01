// components/project-blocks.tsx
'use client';

import Image from "next/image";

export type Img = { src: string; alt: string; w?: number; h?: number };

export type Block =
  | { type: "text"; heading?: string; body: string }
  | { type: "image"; image: Img }
  | { type: "twoUp"; images: [Img, Img] }
  | { type: "grid2x2"; images: [Img, Img, Img, Img] }
  | { type: "textImage"; side?: "left" | "right"; heading?: string; body: string; image: Img };

export function ProjectBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === "text") {
          return (
            <section key={i} className="col-span-6 lg:col-span-4 lg:col-start-2">
              {b.heading && <h2 className="text-[28px] font-semibold mb-3">{b.heading}</h2>}
              <p className="text-[18px] leading-[1.7] text-white/80">{b.body}</p>
            </section>
          );
        }

        if (b.type === "image") {
          return (
            <div key={i} className="col-span-6 lg:col-span-4 lg:col-start-2">
              <div className="relative rounded-2xl border border-[#2A2A2A] overflow-hidden">
                <Image
                  src={b.image.src}
                  alt={b.image.alt}
                  width={b.image.w ?? 1600}
                  height={b.image.h ?? 1200}
                  className="w-full h-auto object-cover"
                  sizes="(min-width:1024px) 896px, 100vw"
                />
              </div>
            </div>
          );
        }

        if (b.type === "twoUp") {
          return (
            <div key={i} className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {b.images.map((img, k) => (
                <div key={k} className="relative rounded-2xl border border-[#2A2A2A] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.w ?? 1600}
                    height={img.h ?? 1200}
                    className="w-full h-auto object-cover"
                    sizes="(min-width:1024px) 436px, 100vw"
                  />
                </div>
              ))}
            </div>
          );
        }

        if (b.type === "grid2x2") {
          return (
            <div key={i} className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {b.images.map((img, k) => (
                <div key={k} className="relative rounded-2xl border border-[#2A2A2A] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.w ?? 800}
                    height={img.h ?? 600}
                    className="w-full h-auto object-cover"
                    sizes="(min-width:1024px) 436px, 100vw"
                  />
                </div>
              ))}
            </div>
          );
        }

        // text + image side-by-side
        if (b.type === "textImage") {
          const leftImage = b.side === "left";
          return (
            <div key={i} className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {leftImage && (
                <div className="relative rounded-2xl border border-[#2A2A2A] overflow-hidden">
                  <Image
                    src={b.image.src}
                    alt={b.image.alt}
                    width={b.image.w ?? 1600}
                    height={b.image.h ?? 1200}
                    className="w-full h-auto object-cover"
                    sizes="(min-width:1024px) 436px, 100vw"
                  />
                </div>
              )}
              <div>
                {b.heading && <h2 className="text-[28px] font-semibold mb-3">{b.heading}</h2>}
                <p className="text-[18px] leading-[1.7] text-white/80">{b.body}</p>
              </div>
              {!leftImage && (
                <div className="relative rounded-2xl border border-[#2A2A2A] overflow-hidden">
                  <Image
                    src={b.image.src}
                    alt={b.image.alt}
                    width={b.image.w ?? 1600}
                    height={b.image.h ?? 1200}
                    className="w-full h-auto object-cover"
                    sizes="(min-width:1024px) 436px, 100vw"
                  />
                </div>
              )}
            </div>
          );
        }

        return null;
      })}
    </>
  );
}
