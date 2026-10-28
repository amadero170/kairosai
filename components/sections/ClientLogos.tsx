import { SHOW_RVO } from "./flags";

// Logo strip, scrolling like a marquee. `invert` flips white-on-transparent logos so they read on canvas.
const logos = [
  { src: "/clients-logos/fester-logo.png", alt: "Fester", h: "h-9" },
  ...(SHOW_RVO ? [{ src: "/clients-logos/rvo-logo.svg", alt: "RVO", h: "h-8" }] : []),
  { src: "/clients-logos/mazda-white-logo-png-701751694713321wd3xjkgicu.png", alt: "Mazda", h: "h-9", invert: true },
  { src: "/clients-logos/haas.webp", alt: "Haas", h: "h-7" },
  { src: "/clients-logos/air-new-zealand-logo.svg", alt: "Air New Zealand", h: "h-6" },
  { src: "/clients-logos/ahoy-club-logo.webp", alt: "Ahoy Club", h: "h-5" },
  { src: "/clients-logos/connect-health-logo.png", alt: "ConnectHealth", h: "h-6" },
  { src: "/clients-logos/eyeon-logo.png", alt: "EyeOn Automations", h: "h-8" },
  { src: "/clients-logos/vive-solar-logo.png", alt: "Vive Solar", h: "h-6" },
  { src: "/clients-logos/outsiders-logo.svg", alt: "Outsiders", h: "h-4" },
  { src: "/clients-logos/little-closet-logo.png", alt: "Little Closet", h: "h-8" },
];

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex items-center gap-14 pr-14 flex-shrink-0" aria-hidden={hidden}>
      {logos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={hidden ? "" : logo.alt}
          className={`${logo.h} w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ${
            logo.invert ? "invert" : ""
          }`}
        />
      ))}
    </div>
  );
}

export default function ClientLogos() {
  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-[marquee_55s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
