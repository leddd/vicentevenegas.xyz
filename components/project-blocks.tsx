'use client';
import { useState } from "react";
import Image from "next/image";

export type Img = { src: string; alt: string; w?: number; h?: number };
export type Vid = { src: string; poster?: string; label?: string };

export type Block =
  | { type: "text"; heading?: string; body: string }
  | { type: "image"; image: Img }
  | { type: "twoUp"; images?: [Img, Img]; videos?: [Vid, Vid] } // 👈 allow videos too
  | { type: "grid2x2"; images: [Img, Img, Img, Img] }
  | { type: "textImage"; side?: "left" | "right"; heading?: string; body: string; image: Img }
  | { type: "video"; src: string; poster?: string; label?: string }; // aspect is now inferred

function AutoAspectVideo({
  src, poster, label,
}: { src: string; poster?: string; label?: string }) {
  const [ratio, setRatio] = useState<number>(16 / 9); // safe fallback to prevent CLS
  return (
    <div className="col-span-6 lg:col-span-4 lg:col-start-2">
      <div
        className="relative rounded-2xl border border-[#2A2A2A] overflow-hidden"
        style={{ aspectRatio: ratio }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
          aria-label={label ?? "Autoplaying clip"}
          onLoadedMetadata={(e) => {
            const v = e.currentTarget;
            if (v.videoWidth && v.videoHeight) {
              setRatio(v.videoWidth / v.videoHeight);
            }
          }}
          className="absolute inset-0 w-full h-full object-cover"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

// Small helper for two-up videos
function TwoUpAutoVideo({ v }: { v: Vid }) {
  const [ratio, setRatio] = useState<number>(9 / 16); // good default for vertical clips
  return (
    <div className="relative rounded-2xl border border-[#2A2A2A] overflow-hidden" style={{ aspectRatio: ratio }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        aria-label={v.label ?? "Autoplaying clip"}
        poster={v.poster}
        onLoadedMetadata={(e) => {
          const el = e.currentTarget;
          if (el.videoWidth && el.videoHeight) setRatio(el.videoWidth / el.videoHeight);
        }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={v.src} type="video/mp4" />
      </video>
    </div>
  );
}

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
          const img = b.image;
          return (
            <div key={i} className="col-span-6 lg:col-span-4 lg:col-start-2">
              <div className="relative rounded-2xl border border-[#2A2A2A] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.w ?? 1600}
                  height={img.h ?? 1200}
                  className="w-full h-auto object-cover"
                  sizes="(min-width:1024px) 896px, 100vw"
                />
              </div>
            </div>
          );
        }

        if (b.type === "twoUp") {
          const hasVideos = Array.isArray(b.videos) && b.videos.length === 2;
          if (hasVideos) {
            return (
              <div key={i} className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {b.videos!.map((v, k) => (
                  <TwoUpAutoVideo key={k} v={v} />
                ))}
              </div>
            );
          }
          // Default: images
          return (
            <div key={i} className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {b.images!.map((img, k) => (
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

        if (b.type === "textImage") {
          const leftImage = b.side === "left";
          const img = b.image;
          return (
            <div key={i} className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {leftImage && (
                <div className="relative rounded-2xl border border-[#2A2A2A] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.w ?? 1600}
                    height={img.h ?? 1200}
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
                    src={img.src}
                    alt={img.alt}
                    width={img.w ?? 1600}
                    height={img.h ?? 1200}
                    className="w-full h-auto object-cover"
                    sizes="(min-width:1024px) 436px, 100vw"
                  />
                </div>
              )}
            </div>
          );
        }

        if (b.type === "video") {
          return <AutoAspectVideo key={i} src={b.src} poster={b.poster} label={b.label} />;
        }

        return null;
      })}
    </>
  );
}
