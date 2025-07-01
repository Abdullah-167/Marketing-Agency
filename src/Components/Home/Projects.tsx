"use client";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";

// ------------------
// Card Component
// ------------------
type CardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", style = {} }, ref) => (
    <div
      ref={ref}
      style={style}
      className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black text-white overflow-hidden shadow-xl [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${className}`}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

// ------------------
// Helpers
// ------------------
const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (
  el: Element | null,
  slot: ReturnType<typeof makeSlot>,
  skew: number
) => {
  if (!el) return;
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });
};

// ------------------
// Main Component
// ------------------
const ProjectShowcase = () => {
  const width = 500;
  const height = 400;
  const cardDistance = 60;
  const verticalDistance = 70;
  const skewAmount = 6;
  const easing = "elastic";

  const config = useMemo(() => {
    return easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };
  }, [easing]);

  const refs = useMemo<React.RefObject<HTMLDivElement | null>[]>(
    () => projects.map(() => React.createRef<HTMLDivElement>()),
    []
  );

  const order = useRef<number[]>(
    Array.from({ length: projects.length }, (_, i) => i)
  );

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  const triggerSwap = useCallback(() => {
    if (order.current.length < 2) return;

    const [front, ...rest] = order.current;
    const elFront = refs[front].current;
    if (!elFront) return;

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(elFront, {
      y: "+=500",
      duration: config.durDrop,
      ease: config.ease,
    });

    tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);

    rest.forEach((idx, i) => {
      const el = refs[idx].current;
      if (!el) return;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, "promote");
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove,
          ease: config.ease,
        },
        `promote+=${i * 0.15}`
      );
    });

    const backSlot = makeSlot(
      refs.length - 1,
      cardDistance,
      verticalDistance,
      refs.length
    );

    tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
    tl.call(
      () => {
        if (elFront) {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        }
      },
      undefined,
      "return"
    );

    tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");

    tl.to(
      elFront,
      {
        y: backSlot.y,
        duration: config.durReturn,
        ease: config.ease,
      },
      "return"
    );

    tl.call(() => {
      order.current = [...rest, front];
      triggerSwap(); // recursive loop
    });
  }, [refs, config, cardDistance, verticalDistance]);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );
    triggerSwap();

    const node = container.current;
    const timeoutId = intervalRef.current;
    if (!node) return;

    const pause = () => {
      tlRef.current?.pause();
      if (timeoutId) clearTimeout(timeoutId);
    };

    const resume = () => {
      tlRef.current?.play();
    };

    node.addEventListener("mouseenter", pause);
    node.addEventListener("mouseleave", resume);

    return () => {
      node.removeEventListener("mouseenter", pause);
      node.removeEventListener("mouseleave", resume);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [refs, triggerSwap]);

  return (
    <section className="relative z-10 sm:border sm:border-white rounded-2xl text-white px-6 py-20 overflow-hidden max-w-[1300px] mx-auto">
      <div className="flex flex-col md:flex-row items-center sm:gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 w-full md:pb-0 pb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Purpose Built Projects. Real World Impact.
          </h2>
          <p className="text-lg text-neutral-300 mb-7">
            We partner with forward-thinking teams to turn ideas into high
            performing digital solutions. From emerging startups to established
            agencies and enterprise companies we craft solutions that are not
            just visually striking, but strategically sound.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact-us"
            className="group max-w-[236px] relative flex justify-between w-full items-center px-8 py-4 text-sm font-semibold text-white hover:text-black rounded-full overflow-hidden transition-all duration-500 bg-transparent border border-white hover:bg-white"
          >
            <span className="relative z-10 mr-8">Start Your Project</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative left-[10px] z-10 transition-all duration-500 group-hover:rotate-45 group-hover:translate-x-1"
            >
              <path
                d="M4.66669 11.3334L11.3334 4.66669"
                stroke="black"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66669 4.66669H11.3334V11.3334"
                stroke="black"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute right-4 w-8 h-8 bg-[white] rounded-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0"></span>
          </motion.a>
        </div>

        {/* Right Side Cards */}
        <div
          ref={container}
          className="relative transform sm:translate-x-[22%] sm:translate-y-[20%] sm:origin-bottom-right perspective-[900px] overflow-visible w-[500px] h-[400px] max-md:scale-[0.75] max-sm:scale-[0.6]"
        >
          {projects.map((project, i) => (
            <Card key={i} ref={refs[i]} style={{ width, height }}>
              <div className="p-4 flex flex-col h-full justify-between">
                <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm text-neutral-300">{project.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

const projects = [
  {
    name: "Evoc Beauty",
    image: "/evoc.png",
    desc: "Beauty Information Website",
  },
  {
    name: "Broshtech",
    image: "/broshtech.png",
    desc: "Digital Services Agency",
  },
  {
    name: "Rafiky",
    image: "/rafiky-nexomark.agency.png",
    desc: "Language Translation for Meetings",
  },
  {
    name: "Rido Emirates",
    image: "/rido.png",
    desc: "Dubai Taxi Service",
  },
];
