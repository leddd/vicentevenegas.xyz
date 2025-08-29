"use client";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;       // ms per char
  startDelay?: number;  // ms before typing
  onDone?: () => void;
};

export default function Typewriter({ text, speed = 240, startDelay = 0, onDone }: Props) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(id);
          onDone?.();
        }
      }, speed);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay, onDone]);

  return <span>{out}</span>;
}
