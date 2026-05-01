import React from "react"
import { ProjectsGrid } from "./ProjectsGrid"
import { AnimatedText } from "./AnimatedText"
import { Link } from "../utils/Link"
import { Icon } from "./Icon"
import { SITE_SLUGS } from "@/config/siteConfig"

export const ProjectsSection: React.FC = () => {
  return (
    <section className="inside-container bg-white">
      {/* overlay heading */}
      <div className="pointer-events-none relative z-5 mix-blend-exclusion">
        <AnimatedText
          text="Latest Projects"
          margin={200}
          once={true}
          className="inline-block text-4xl leading-9 tracking-tighter whitespace-nowrap text-white md:text-5xl md:leading-12 lg:text-6xl"
        />
      </div>

      <ProjectsGrid />

      {/* z-index above stacked/transformed project cards so the link stays clickable */}
      <div className="relative z-30 flex justify-center pt-10 md:pt-14">
        <Link href={SITE_SLUGS.projects} className="group relative inline-flex items-center gap-2 py-2">
          <span className="underline-hover text-xl leading-6 tracking-tight text-slate-700 md:text-2xl">View More Projects</span>
          <Icon name="arrow-right" height={18} width={18} className="group-hover:animate-wiggle-right" strokeWidth={0.5} />
        </Link>
      </div>
    </section>
  )
}
