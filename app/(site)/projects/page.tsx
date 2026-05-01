import { WorkHero } from "./WorkHero"
import { ProjectsStatic } from "./ProjectsStatic"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"
import { projectsGraph } from "@/config/schemas"

export const metadata: Metadata = {
  title: "Harshal Ingale - Projects & Case Studies",
  description:
    "Featured work by Harshal Ingale: MERN stack platforms, Electron desktop, travel and hospitality systems, APIs, and databases.",
  keywords: ["Harshal Ingale", "Projects", "MERN", "React", "Node.js", "Electron", "Navi Mumbai"],
  alternates: {
    canonical: SITE_SLUGS.projects,
  },
}
const page = () => {
  return (
    <main className="relative z-1">
      <script
        id="id-projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsGraph),
        }}
      />
      <WorkHero />
      <ProjectsStatic />
      <RecruiterContact />
    </main>
  )
}

export default page
