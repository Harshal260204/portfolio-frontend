import clsx from "clsx"
import founderPhoto from "@/public/assets/founder.jpg"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about-harshal-ingale" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Harshal Ingale
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal
              src={founderPhoto}
              alt="Professional portrait of Harshal Ingale, Full Stack Developer"
              className="custom-shadow aspect-[4/4.5]"
              priority
            />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Harshal Ingale
              </Text>
              <p className="text-sm text-gray-500">Full Stack Developer · MERN</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">Full-Stack MERN developer</strong> with hands-on experience building scalable, secure, and
              user-centric web, desktop, and mobile applications. Currently at Precisio Technologies on production systems using React.js, Node.js, Express.js,
              MongoDB, PostgreSQL, and MySQL — with strong expertise in APIs, database design, performance optimization, and cross-platform work using Electron and
              React Native.
            </p>

            <div className="space-y-4">
              <p className="font-semibold text-slate-900">Experience</p>
              <ul className="list-inside list-disc space-y-2 text-base">
                <li>
                  <strong className="text-slate-800">MERN Stack Developer — Precisio Technologies</strong> (Apr 2025 – Present). Production full-stack apps,
                  secure REST APIs with JWT and RBAC, responsive React 18 UIs (Tailwind, Bootstrap, CSS modules), travel and enterprise platforms, query and API
                  performance tuning.
                </li>
                <li>
                  <strong className="text-slate-800">Freelance MERN Stack Developer</strong> (Nov 2023 – Present). End-to-end web apps for clients, REST APIs,
                  third-party integrations, and requirements through delivery.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Education</p>
              <ul className="list-inside list-disc space-y-1 text-base">
                <li>Master of Computer Applications — Bharti Vidyapeeth Pune (Distance Education), Aug 2025 – Present</li>
                <li>Bachelor of Science in Computer Science — Sanpada College of Commerce and Technology, Jul 2021 – Apr 2024</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Languages</p>
              <p className="text-base">English (full professional proficiency), Marathi and Hindi (native or bilingual).</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-slate-900">Selected projects</p>
              <ul className="list-inside list-disc space-y-2 text-base">
                <li>
                  <strong className="text-slate-800">SmartTint</strong> — Electron app for paint professionals with local caching, delta sync, embedded MongoDB, and
                  patch updates.
                </li>
                <li>
                  <strong className="text-slate-800">Liberty Hotel Booking System</strong> — Real-time search and booking, hotel API integrations, PostgreSQL tuning,
                  payments and refunds with cron and caching.
                </li>
                <li>
                  <strong className="text-slate-800">Liberty Sales Planner</strong> — Role-based sales planning, 11+ activity types, calendar, analytics, PDF/Excel
                  exports.
                </li>
                <li>
                  <strong className="text-slate-800">Liberty Network</strong> — Travel management with JWT auth, RBAC, verification, markup, and admin analytics.
                </li>
                <li>
                  <strong className="text-slate-800">Liberty International Tourism Group</strong> — Corporate website with destinations, blogs, careers, contact,
                  email automation, and uploads.
                </li>
              </ul>
            </div>
          </Typography>
        </div>
      </div>
    </section>
  )
}
