import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"
import { Metadata } from "next"
import { SITE_CONFIG, SITE_SLUGS } from "@/config/siteConfig"
import { homeGraph } from "@/config/schemas"

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description:
    "Portfolio of Harshal Ingale — Full Stack Developer in Navi Mumbai. MERN stack, React, Node.js, Electron, React Native, PostgreSQL, MongoDB, and production systems at Precisio Technologies.",
  authors: [{ name: "Harshal Ingale" }],
  creator: "Harshal Ingale",
  alternates: {
    canonical: SITE_SLUGS.home,
  },
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <script
        id="id-site-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeGraph),
        }}
      />
      <HeroV2 />
      <div className="border-b border-gray-200" />
      <ProjectsSection />
      <AboutSectionV2 />
      <ServicesSectionV2 />
      <RecruiterContact />
      {/* <FAQSection /> */}
    </main>
  )
}
export default PortfolioPage
