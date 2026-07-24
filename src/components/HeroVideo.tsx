import { useRef, useState } from "react";
import { HeartIcon } from "./Icons";

/**
 * Two-part hero video: part 1 is the ambient clinic shot, part 2 is
 * Dr Marjana welcoming patients in Serbian. The parts crossfade in a loop.
 * Both are self-hosted from public/; the branded card shows if a part
 * can't play.
 */
const PARTS = ["/hero.mp4", "/hero-2.mp4"];

export default function HeroVideo() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState([false, false]);
  const [muted, setMuted] = useState(true);
  const refs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  const anyReady = ready[0] || ready[1];

  function markReady(index: number) {
    setReady((prev) => {
      if (prev[index]) return prev;
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }

  function playPart(index: number) {
    const video = refs[index].current;
    if (!video) return;
    setActive(index);
    video.currentTime = 0;
    void video.play().catch(() => undefined);
  }

  function handleEnded(index: number) {
    const other = index === 0 ? 1 : 0;
    if (ready[other]) {
      playPart(other);
    } else {
      playPart(index);
    }
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-600 to-mint-600 shadow-lift">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
        <HeartIcon className="mb-4 h-12 w-12 text-mint-200" />
        <p className="font-display text-2xl sm:text-3xl">
          „Ovde se i najveći strah
          <br /> pretvara u osmeh."
        </p>
        <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-primary-100">
          Pesonident · od 1991.
        </p>
      </div>

      {PARTS.map((src, index) => (
        <video
          key={src}
          ref={refs[index]}
          autoPlay={index === 0}
          muted={muted}
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            anyReady && active === index ? "opacity-100" : "opacity-0"
          }`}
          onCanPlay={() => markReady(index)}
          onEnded={() => handleEnded(index)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}

      {anyReady && (
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Uključi zvuk" : "Isključi zvuk"}
          className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-950/60 text-white backdrop-blur transition-colors hover:bg-primary-950/80"
        >
          {muted ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
