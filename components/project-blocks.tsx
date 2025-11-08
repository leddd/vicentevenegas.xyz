"use client";
import { useState } from "react";
import Image from "next/image";

export type Img = { src: string; alt: string; w?: number; h?: number };
export type Vid = {
  src: string;
  poster?: string;
  label?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
};

export type Block =
  | { type: "text"; heading?: string; body: string }
  | { type: "image"; image: Img }
  | { type: "twoUp"; images?: [Img, Img]; videos?: [Vid, Vid] }
  | { type: "grid2x2"; images: [Img, Img, Img, Img] }
  | {
      type: "textImage";
      side?: "left" | "right";
      heading?: string;
      body: string;
      image: Img;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      label?: string;
      autoplay?: boolean;
      muted?: boolean;
      loop?: boolean;
      playsInline?: boolean;
      controls?: boolean;
    }
  | {
      type: "spacer";
      height?: number; // height in px, optional
    };

// Single video block, auto aspect
function AutoAspectVideo({
  src,
  poster,
  label,
  autoplay,
  muted = true,
  loop,
  playsInline = true,
  controls,
}: {
  src: string;
  poster?: string;
  label?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
}) {
  const [ratio, setRatio] = useState<number>(16 / 9); // safe fallback to prevent CLS
  return (
    <div className="col-span-6 lg:col-span-4 lg:col-start-2">
      <div
        className="relative border border-border bg-card overflow-hidden"
        style={{ aspectRatio: ratio }}
      >
        <video
          autoPlay={autoplay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload="metadata"
          controls={controls}
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
    <div
      className="relative border border-border bg-card overflow-hidden"
      style={{ aspectRatio: ratio }}
    >
      <video
        autoPlay={v.autoplay}
        muted={v.muted ?? true}
        loop={v.loop}
        playsInline={v.playsInline ?? true}
        preload="metadata"
        controls={v.controls}
        aria-label={v.label ?? "Autoplaying clip"}
        poster={v.poster}
        onLoadedMetadata={(e) => {
          const el = e.currentTarget;
          if (el.videoWidth && el.videoHeight)
            setRatio(el.videoWidth / el.videoHeight);
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
            <section
              key={i}
              className="col-span-6 lg:col-span-4 lg:col-start-2 space-y-4"
            >
              {b.heading && (
                <h2 className="text-3xl font-normal text-[color:var(--vv-text-primary)]">
                  {b.heading}
                </h2>
              )}
              <p className="vv-body">
                {b.body}
              </p>
            </section>
          );
        }

        if (b.type === "image") {
          const img = b.image;
          return (
            <div
              key={i}
              className="col-span-6 lg:col-span-4 lg:col-start-2"
            >
              <div className="relative border border-border bg-card overflow-hidden">
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
              <div
                key={i}
                className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {b.videos!.map((v, k) => (
                  <TwoUpAutoVideo key={k} v={v} />
                ))}
              </div>
            );
          }
          // Default: images
          return (
            <div
              key={i}
              className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {b.images!.map((img, k) => (
                <div
                  key={k}
                  className="relative border border-border bg-card overflow-hidden"
                >
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
            <div
              key={i}
              className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {b.images.map((img, k) => (
                <div
                  key={k}
                  className="relative border border-border bg-card overflow-hidden"
                >
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
            <div
              key={i}
              className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
            >
              {leftImage && (
                <div className="relative border border-border bg-card overflow-hidden">
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
              <div className="space-y-4">
                {b.heading && (
                  <h2 className="text-[28px] font-medium text-[color:var(--vv-text-primary)]">
                    {b.heading}
                  </h2>
                )}
                <p className="vv-body">
                  {b.body}
                </p>
              </div>
              {!leftImage && (
                <div className="relative border border-border bg-card overflow-hidden">
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
          return (
            <AutoAspectVideo
              key={i}
              src={b.src}
              poster={b.poster}
              label={b.label}
              autoplay={b.autoplay}
              muted={b.muted}
              loop={b.loop}
              playsInline={b.playsInline}
              controls={b.controls}
            />
          );
        }

        if (b.type === "spacer") {
          return (
            <div
              key={i}
              className="col-span-6 lg:col-span-4 lg:col-start-2"
              style={{ height: b.height ? `${b.height}px` : "32px" }} // default 32px
              aria-hidden="true"
            />
          );
        }

        return null;
      })}
    </>
  );
}
