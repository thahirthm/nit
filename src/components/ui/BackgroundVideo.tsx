"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Muted, looping, inline background video that never shows the browser's ▶ button.
 *
 * - React sets `muted` as a DOM property, not an HTML attribute, so the server-rendered markup
 *   can lack it and iOS then refuses to autoplay. We force both before calling play().
 * - Some phones block autoplay entirely (iOS Low Power Mode, data saver). A still frame (`poster`)
 *   is shown instead, and the <video> stays fully transparent until it is actually playing, so the
 *   native ▶ overlay can never appear. Playback is retried on the visitor's first touch/scroll.
 *
 * The parent must be positioned (relative/absolute): the poster fills it with `posterClassName`.
 * The video itself must also be positioned (pass `absolute` or `relative` in `className`) so it
 * paints above the poster once it starts playing.
 */
export function BackgroundVideo({
  src,
  poster,
  className,
  posterClassName = "object-cover",
  priority,
}: {
  src: string;
  poster: string;
  className?: string;
  posterClassName?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    const onPlaying = () => setPlaying(true);
    video.addEventListener("playing", onPlaying);

    const events = ["touchstart", "click", "scroll", "keydown"] as const;
    const retry = () => {
      video.play().then(removeRetry).catch(() => {});
    };
    const removeRetry = () => events.forEach((e) => window.removeEventListener(e, retry));

    video.play().catch(() => {
      events.forEach((e) => window.addEventListener(e, retry, { passive: true }));
    });

    return () => {
      removeRetry();
      video.removeEventListener("playing", onPlaying);
    };
  }, []);

  return (
    <>
      <Image
        src={poster}
        alt=""
        aria-hidden
        fill
        priority={priority}
        sizes="100vw"
        quality={90}
        className={`pointer-events-none transition-opacity duration-500 ${posterClassName} ${playing ? "opacity-0" : "opacity-100"}`}
      />
      <video
        ref={ref}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        className={`pointer-events-none transition-opacity duration-500 [&::-webkit-media-controls-start-playback-button]:hidden [&::-webkit-media-controls]:hidden ${playing ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
      />
    </>
  );
}
