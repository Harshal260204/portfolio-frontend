import { Metadata } from "next"
import { DOMAIN_URL } from "@/config/siteConfig"

const LINKEDIN_URL = "https://www.linkedin.com/in/harshal-ingale-50613b258"
const CREDIT_PATH = "/serbyte-dev-credit"

export const metadata: Metadata = {
  title: "Portfolio · Harshal Ingale",
  description: "Credit page linking to Harshal Ingale’s developer portfolio.",
  alternates: { canonical: CREDIT_PATH },
}

export default function SerbyteDevCreditPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-center text-gray-900">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">Site Credit</p>
        <h1 className="text-2xl font-semibold">Built by Harshal Ingale</h1>
        <p className="text-base text-gray-700">Full Stack Developer · MERN, Next.js, and modern web performance.</p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-blue-700">
          <a href={DOMAIN_URL} className="underline underline-offset-4">
            View portfolio
          </a>
          <span className="text-gray-400">•</span>
          <a href={LINKEDIN_URL} className="underline underline-offset-4">
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  )
}
