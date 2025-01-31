"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard } from "./components/project-card"
import { AnimateIn } from "./components/animate-in"
import { BackToTop } from "./components/back-to-top"

const stackItems = {
  main: [
    {
      name: "System thinking",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brain-LlJJHKA024H8Dx3K3aqZKg1Eo9TaOa.svg",
      className: "brightness-0 invert",
    },
    {
      name: "Systemisation",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/layer-group-rVEcLD0GoaNlqfNUhmZ3dBukvVUuZg.svg",
      className: "brightness-0 invert",
    },
    {
      name: "Product design",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vector-kiUfnthAAtHCIlvNTQt1KxYFjLlHzi.svg",
      className: "brightness-0 invert",
    },
    {
      name: "Accessibility",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accessibility-YmRBXbw8vekPTndnviNlNefasw5hk1.png",
    },
    {
      name: "Figma",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/figma-PKDrOUAyIDIgjg2GUiCDR8AiLY47aR.png",
    },
    {
      name: "Webflow",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Component%2011-RbYHkfCoTjJBaJCOgYvFFsGrZ9myiY.svg",
    },
    {
      name: "Framer",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/framer-ZJilsjbOW0Ks4Dcqfq9LyA4OBaaE06.png",
    },
    {
      name: "Tokens Architecture",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tokens-So0SjM3OXjp2Px9ae0riqvin1L1ryt.png",
    },
  ],
  extra: [
    {
      name: "Cursor",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Component%205-f6uUmsABKtybY9Rzga4HQmnEQrXRR5.svg",
    },
    {
      name: "Copilot",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Component%208-cr68aqm3BxQQNtzeIqAWRjbTihtCwm.svg",
    },
    {
      name: "Style Dictionary",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Component%208-G2GmFalbN7qM01tI2lwi4SIWxfHzlm.png",
    },
    {
      name: "Tailwind",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Component%2010-1YWGIH5XiwixJBUaPhbGpbqzZIUR3y.png",
    },
    {
      name: "HTML & CSS",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hc-OOAdvExo0HHWR6X3mNYpSpl7FEL1gv.png",
    },
    {
      name: "Javascript",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/js-mqhvPkx1qunl6rWGrjfcS6YQd9PwKv.png",
    },
  ],
}

const sideProjects = [
  {
    title: "Motel One",
    category: "Establishing a process and a design system approach for existing templates & components.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project-motelone-ti5QADnp0SzXTyYFezgy0KDbJhRoJp.png",
  },
  {
    title: "Condor",
    category: "Implementing a fluid typography in a design system",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hiroo-ZZHHHHZZZZHHHHZZZZHHHHZZZZHHx14.png",
  },
  {
    title: "Profillet",
    category: "Branding / Freelance",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profillet-ZZHHHHZZZZHHHHZZZZHHHHZZZZx15.png",
  },
]

export default function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % sideProjects.length)
  }

  const previousProject = () => {
    setCurrentProject((prev) => (prev - 1 + sideProjects.length) % sideProjects.length)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-[#1d1523] from-[60%] via-[#403756] via-[85%] via-[#574960] via-[90%] to-[#8ba49d] to-[95%] text-[#e0e0e0]"
          : "bg-gradient-to-b from-[#FFEFED] from-[60%] via-[#FFEFED] via-[85%] via-[#FFEFED] via-[90%] to-[#362d47] to-[95%] text-[#1a2634]"
      }`}
    >
      {scrolled ? (
        <header className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 transition-all duration-300">
          <div
            className={`pl-6 pr-3.5 h-14 flex items-center justify-between rounded-full transition-all duration-300 min-w-[280px] bg-[#292033] shadow-lg`}
          >
            <Link
              href="/"
              className={`text-[15px] font-medium hover:opacity-70 transition-opacity whitespace-nowrap text-white`}
              aria-label="Home"
            >
              Van Nguyen
            </Link>

            <nav className="flex items-center gap-3 sm:gap-4" aria-label="Main navigation">
              <Link
                href="https://www.linkedin.com/in/van-nguyen-33a236275/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-5uOAnTQchzjYhqlaZCJzaO6RV1fAtW.png"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>

              <button
                onClick={toggleTheme}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-[#2d3d4f] hover:bg-[#3a4b5f]`}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-white" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4 text-white" aria-hidden="true" />
                )}
              </button>
            </nav>
          </div>
        </header>
      ) : (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
          <div className="bg-[#292033] backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.1)]">
            <div className="max-w-[1400px] mx-auto px-2 sm:px-4 h-16 flex items-center justify-between">
              <Link
                href="/"
                className="text-[15px] font-medium hover:opacity-70 transition-opacity text-white"
                aria-label="Home"
              >
                Van Nguyen
              </Link>

              <nav className="flex items-center gap-3 sm:gap-4" aria-label="Main navigation">
                <Link
                  href="https://www.linkedin.com/in/van-nguyen-33a236275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-5uOAnTQchzjYhqlaZCJzaO6RV1fAtW.png"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  />
                </Link>

                <button
                  onClick={toggleTheme}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#2d3d4f] hover:bg-[#3a4b5f]"
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-white" aria-hidden="true" />
                  ) : (
                    <Moon className="w-5 h-5 text-white" aria-hidden="true" />
                  )}
                </button>
              </nav>
            </div>
          </div>
        </header>
      )}

      <main className="pt-32 px-8">
        <div className="max-w-[1400px] mx-auto pb-[430px]">
          {/* Profile section */}
          <AnimateIn>
            <div className="max-w-[720px] space-y-8">
              <div className="flex">
                <div className="relative w-[106px] h-[106px] -ml-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Draft_self_assesment-95FNpNILfL4IwWcdnneF96dPYCESuW.png"
                    alt="Van Nguyen - Product Design Lead"
                    width={106}
                    height={106}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h1 className={`text-[2rem] leading-tight ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                  Product Designer{" "}
                  <span className={isDark ? "text-[#cbd5e0]" : "text-[#1a2634]"}>/ Design System Engineer</span>
                </h1>

                <div className="space-y-4">
                  <p className={isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}>
                    Cologne-based speacialist passionate about crafting intuitive, scalable digital experiences. By day,
                    I design user-centered solutions that enhance usability and accessibility; by night, I refine my
                    development skills and how to leverage AI to better design workflow Whether optimizing user journeys
                    or prototyping interactive experiences, I'm always exploring new ways to connect design, technology,
                    and innovation.
                  </p>
                  <p className={isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}>
                    I've built many different types of design systems — including branded systems, multibrand and even a
                    white label system. My mission is to empower others by sharing knowledge and fostering a
                    systems-thinking mindset.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.1)] bg-[#2E2E48] -ml-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 badge-glow"></span>
                    <span className="text-white text-sm">Open for Work and Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Selected Works section */}
          <div className="mt-32">
            <AnimateIn>
              <h2 className={`text-[2rem] font-light mb-6 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                Selected Works
              </h2>
            </AnimateIn>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <ProjectCard
                title="Solid Design System"
                category="Unlocking Efficiency and Consistency"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Consistency%20Across%20Products-01F.jpg-3cZZyxBymTWt41p8sGjRbJFnXPqUcx.jpeg"
                isDark={isDark}
                slug="event-platform"
              />
              <ProjectCard
                title="Stiebel Eltron x Tecalor: Delivering a multi-brand design system for e-commerce"
                category="Created a versatile portfolio system with both light and dark themes, emphasizing visual storytelling through full-width imagery and clean typography."
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project-teaser-image-02-cFPeN8zv9cV2fw4RTHdqQOL4kkM3VG.png?height=960&width=1200"
                isDark={isDark}
                slug="portfolio-system"
              />
            </div>

            <div className="relative">
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex justify-start transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentProject * 100}%)` }}
                  >
                    {sideProjects.map((project, index) => (
                      <div key={index} className="w-[40%] flex-shrink-0 pr-6">
                        <ProjectCard
                          title={project.title}
                          category={project.category}
                          image={project.image}
                          isDark={isDark}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center gap-8 mt-12">
                  <button
                    onClick={previousProject}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors border-2 min-w-[24px] min-h-[24px] ${
                      isDark
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-[#292033]/20 text-[#292033] hover:bg-[#292033]/10"
                    }`}
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-3">
                    {sideProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          currentProject === index
                            ? isDark
                              ? "bg-white"
                              : "bg-[#292033]"
                            : isDark
                              ? "bg-white/20 hover:bg-white/30"
                              : "bg-[#292033]/20 hover:bg-[#292033]/30"
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                        aria-current={currentProject === index ? "true" : "false"}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextProject}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors border-2 min-w-[24px] min-h-[24px] ${
                      isDark
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-[#292033]/20 text-[#292033] hover:bg-[#292033]/10"
                    }`}
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stack section */}
          <div className="mt-32">
            <AnimateIn>
              <h2 className={`text-[2rem] font-light mb-12 ${isDark ? "text-white" : "text-[#1a2634]"}`}>My Stack</h2>
            </AnimateIn>

            <div className="space-y-12">
              {/* Main Section */}
              <div className="space-y-4">
                <AnimateIn>
                  <h3 className="text-[#71717A] text-lg mb-6">Main</h3>
                </AnimateIn>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                  {stackItems.main.map((item, index) => (
                    <AnimateIn key={index} className="group" delay={index * 100}>
                      <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3 hover:bg-white/[0.08] transition-colors">
                        <div className="w-6 h-6 relative flex items-center justify-center">
                          <Image
                            src={item.icon || "/placeholder.svg"}
                            alt={item.name}
                            width={24}
                            height={24}
                            className={item.className}
                          />
                        </div>
                        <span className="text-white text-sm">{item.name}</span>
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </div>

              {/* Extra Section */}
              <div className="space-y-4">
                <AnimateIn>
                  <h3 className="text-[#71717A] text-lg mb-6">Extra</h3>
                </AnimateIn>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                  {stackItems.extra.map((item, index) => (
                    <AnimateIn key={index} className="group" delay={index * 100}>
                      <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3 hover:bg-white/[0.08] transition-colors">
                        <div className="w-6 h-6 relative flex items-center justify-center">
                          <Image src={item.icon || "/placeholder.svg"} alt={item.name} width={24} height={24} />
                        </div>
                        <span className="text-white text-sm">{item.name}</span>
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BackToTop isDark={isDark} />
    </div>
  )
}

