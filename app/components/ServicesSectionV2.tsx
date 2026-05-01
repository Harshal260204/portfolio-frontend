import clsx from "clsx"
import { Icon } from "./Icon"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionUl, MotionLi } from "../utils/lazy-ui"
import type { IconType } from "react-icons"
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiElectron,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiGitlab,
  SiTailwindcss,
  SiBootstrap,
  SiChakraui,
  SiCss,
  SiHtml5,
} from "react-icons/si"

/** Full skill list; icons rendered monochrome (black on white) to match portfolio tile style */
const TECH_STACK: { name: string; Icon: IconType }[] = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "Electron", Icon: SiElectron },
  { name: "React Native", Icon: SiReact },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "NestJS", Icon: SiNestjs },
  { name: "MySQL", Icon: SiMysql },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "GitHub", Icon: SiGithub },
  { name: "GitLab", Icon: SiGitlab },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "Chakra UI", Icon: SiChakraui },
  { name: "CSS", Icon: SiCss },
  { name: "HTML", Icon: SiHtml5 },
]

const services = [
  { name: "Full stack & MERN development", src: "magic-wand" },
  { name: "REST APIs, JWT & RBAC", src: "web" },
  { name: "React & responsive UI systems", src: "paint-bucket" },
  { name: "Electron & React Native", src: "cube" },
  { name: "Database design & query tuning", src: "planet" },
  { name: "Performance & reliability", src: "world" },
]

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const container2 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
}
const element = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
}

const element2: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="technologies" className={clsx("inside-container relative z-2 items-start justify-center md:flex-row md:items-center", className)}>
      {/*  LEFT COLUMN  */}
      <div className="flex h-full flex-col gap-16 max-md:w-full md:[flex:2_0_0px]">
        <AnimatedH2>
          Engineering <br />
          <span className="text-slate-500">Toolkit</span>
        </AnimatedH2>

        {/* Tech Stack — black logos on white squircles, soft float shadow (full skill list) */}
        <div className="w-full">
          <Text size="base" className="mb-8">
            Tech stack & skills
          </Text>

          <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgb(248_250_252)_0%,rgb(241_245_249)_100%)] p-5 ring-1 ring-slate-200/60 md:p-8">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:url('/assets/framer-noise.png')] [background-size:128px] bg-repeat"
              aria-hidden
            />
            <MotionUl
              className="relative z-[1] mx-auto grid max-w-5xl grid-cols-2 justify-items-center gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              {TECH_STACK.map(({ name, Icon: TechIcon }) => (
                <MotionLi key={name} variants={element} className="flex w-full max-w-[5.25rem] flex-col items-center gap-2.5 sm:max-w-[5.5rem]">
                  <div
                    className={clsx(
                      "flex aspect-square w-full items-center justify-center rounded-[1.35rem] bg-white",
                      "border border-slate-100",
                      "shadow-[0_4px_20px_-4px_rgba(15,23,42,0.14),0_2px_10px_-3px_rgba(15,23,42,0.08)]",
                      "transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(15,23,42,0.18),0_4px_14px_-4px_rgba(15,23,42,0.1)]",
                    )}
                    aria-label={name}
                  >
                    <TechIcon className="h-[34px] w-[34px] shrink-0 text-black [&_path]:fill-current" aria-hidden />
                  </div>
                  <span className="text-center text-[10px] leading-tight font-medium tracking-tight text-slate-800 sm:text-[11px]">{name}</span>
                </MotionLi>
              ))}
            </MotionUl>
          </div>
        </div>
      </div>

      {/*  RIGHT COLUMN  */}
      <MotionUl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={container2}
        className="grid [flex:1_0_0px] grid-cols-2 gap-8 md:grid-cols-1"
      >
        {services.map(({ name, src }) => (
          <MotionLi key={name} variants={element2} className="flex items-center gap-3">
            <span className="button-shadow flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black">
              <Icon name={src} width={25} height={30} className="object-contain invert" />
            </span>
            <Text as="span" size="sm">
              {name}
            </Text>
          </MotionLi>
        ))}
      </MotionUl>
    </section>
  )
}
