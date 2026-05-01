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
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-6 text-slate-500">
            <p>
              I am a <strong className="font-semibold text-slate-900">full-stack MERN developer</strong> with experience building scalable, secure, and user-focused web,
              desktop, and mobile applications. Currently, I work at <strong className="font-semibold text-slate-900">Precisio Technologies</strong>, developing production-grade
              systems using <strong className="font-semibold text-slate-900">React.js</strong>, <strong className="font-semibold text-slate-900">Node.js</strong>,{" "}
              <strong className="font-semibold text-slate-900">Express.js</strong>, and databases including <strong className="font-semibold text-slate-900">MongoDB</strong>,{" "}
              <strong className="font-semibold text-slate-900">PostgreSQL</strong>, and <strong className="font-semibold text-slate-900">MySQL</strong>. My work focuses on{" "}
              <strong className="font-semibold text-slate-900">API development</strong>, <strong className="font-semibold text-slate-900">database design</strong>,{" "}
              <strong className="font-semibold text-slate-900">performance optimization</strong>, and cross-platform solutions using{" "}
              <strong className="font-semibold text-slate-900">Electron</strong> and <strong className="font-semibold text-slate-900">React Native</strong>.
            </p>
            <p>
              Since <strong className="font-semibold text-slate-900">April 2025</strong>, I have been contributing as a <strong className="font-semibold text-slate-900">MERN stack developer at Precisio</strong>, where I
              design and maintain full-stack applications, develop secure REST APIs with <strong className="font-semibold text-slate-900">JWT-based authentication</strong> and{" "}
              <strong className="font-semibold text-slate-900">role-based access control</strong>, and build responsive front-end interfaces using{" "}
              <strong className="font-semibold text-slate-900">React 18</strong> with <strong className="font-semibold text-slate-900">Tailwind</strong>,{" "}
              <strong className="font-semibold text-slate-900">Bootstrap</strong>, and <strong className="font-semibold text-slate-900">CSS modules</strong>. I also optimize database
              queries and improve API performance. In addition, I have been working as a <strong className="font-semibold text-slate-900">freelance MERN developer</strong> since{" "}
              <strong className="font-semibold text-slate-900">November 2023</strong>, delivering end-to-end solutions including web applications, APIs, and third-party integrations.
            </p>
            <p>
              I am currently pursuing a <strong className="font-semibold text-slate-900">Master of Computer Applications (MCA)</strong> from{" "}
              <strong className="font-semibold text-slate-900">Bharti Vidyapeeth, Pune</strong> (distance learning), and hold a{" "}
              <strong className="font-semibold text-slate-900">Bachelor of Science in Computer Science</strong> from{" "}
              <strong className="font-semibold text-slate-900">Sanpada College of Commerce and Technology</strong>.
            </p>
          </Typography>
        </div>
      </div>
    </section>
  )
}
