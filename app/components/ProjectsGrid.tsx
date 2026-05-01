"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import reactZeroUIPreview from "@/app/images/react-zero-ui-preview.jpg"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
const ids = ["smarttint", "liberty-hotel", "liberty-sales", "liberty-network"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    smarttint: { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    "liberty-network": { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    "liberty-hotel": { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    "liberty-sales": { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -50, dy: isMobile ? -110 : -10 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id]
      const t = OFFSET_TUNING[id]
      return [
        id,
        {
          x: base.x! + t.dx!,
          y: base.y! + t.dy!,
          rot: t.rot!,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key="smarttint"
          src={reactZeroUIPreview}
          alt="SmartTint desktop application preview"
          offset={offsets["smarttint"]}
          gridId="smarttint"
          color="#3B06D1"
          type="SmartTint — Electron desktop"
          progress={progress}
          href="/#contact"
          dataText="Get in touch"
        />
        <AnimatedCard
          key="liberty-hotel"
          src={bespokePreview}
          alt="Liberty Hotel Booking preview"
          offset={offsets["liberty-hotel"]}
          gridId="liberty-hotel"
          color="#024EFC"
          type="Liberty Hotel Booking"
          progress={progress}
          href="/#contact"
          dataText="Get in touch"
        />

        <AnimatedCard
          key="liberty-sales"
          src={automedicsPreview}
          alt="Liberty Sales Planner preview"
          offset={offsets["liberty-sales"]}
          gridId="liberty-sales"
          color="#DA961A"
          type="Liberty Sales Planner"
          progress={progress}
          href="/#contact"
          dataText="Get in touch"
        />
        <AnimatedCard
          key="liberty-network"
          src={iaoPreview}
          alt="Liberty Network preview"
          offset={offsets["liberty-network"]}
          gridId="liberty-network"
          color="#13739C"
          type="Liberty Network platform"
          progress={progress}
          href="/#contact"
          dataText="Get in touch"
        />
      </div>
    </section>
  )
}
