"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import { AnimateIn } from "../components/animate-in"
import { ScrollRing } from "../components/scroll-ring"
import { Line, LineChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function ProjectPage() {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 100)

      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        const header = document.querySelector("header")
        const isHeaderHovered = header?.matches(":hover") || false
        document.body.classList.toggle("cursor-hidden", isVisible && !isHeaderHovered)
      }
    }

    const handleHeaderHover = () => {
      setIsHeaderHovered(true)
      document.body.classList.remove("cursor-hidden")
    }

    const handleHeaderLeave = () => {
      setIsHeaderHovered(false)
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        document.body.classList.toggle("cursor-hidden", isVisible)
      }
    }

    const header = document.querySelector("header")
    header?.addEventListener("mouseenter", handleHeaderHover)
    header?.addEventListener("mouseleave", handleHeaderLeave)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      header?.removeEventListener("mouseenter", handleHeaderHover)
      header?.removeEventListener("mouseleave", handleHeaderLeave)
      document.body.classList.remove("cursor-hidden")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#111827] text-white" : "bg-white text-[#111827]"
      }`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div
          className={`${scrolled ? "bg-opacity-90 backdrop-blur-sm" : "bg-opacity-0"} transition-colors duration-300`}
        >
          <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
              aria-label="Back to home"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>

            <nav className="flex items-center gap-6" aria-label="Main navigation">
              <Link
                href="https://www.linkedin.com/in/van-nguyen-33a236275/"
                className="group flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <span className="text-white">LinkedIn</span>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-5uOAnTQchzjYhqlaZCJzaO6RV1fAtW.png"
                  alt="LinkedIn Logo"
                  width={14}
                  height={14}
                />
              </Link>

              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-black/10"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="content-animation">
            <AnimateIn animation="fade-up" duration="normal" delay={100}>
              <h1 className="text-4xl sm:text-5xl font-medium mb-12">Union Investment design system</h1>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={200}>
              <div ref={heroRef} className="aspect-[16/9] relative rounded-2xl overflow-hidden bg-[#1B4D5C]">
                <Image
                  src="https://sjc.microlink.io/n6EtbaRzBz2r71emwzEEX5jstiUYW9uh13CRqOd-35xeK6n4vSfmDojTSWsiFJhxlE3UgvKW6NZoVMJ_TxvX0A.jpeg"
                  alt="Union Investment design system preview"
                  fill
                  className="object-cover"
                  priority
                />
                <ScrollRing />
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={300}>
              <div className="mt-24 grid md:grid-cols-[1fr_2fr] gap-16 max-w-[1000px]">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Role</h3>
                    <ul className="space-y-1">
                      <li>Design System Lead</li>
                      <li>UI/UX Design</li>
                      <li>Frontend Development</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Timeline</h3>
                    <p>2023 - Present</p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Tech Stack</h3>
                    <ul className="space-y-1">
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Storybook</li>
                      <li>Styled Components</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-medium mb-4">Overview</h2>
                    <div className="space-y-4">
                      <p className="text-gray-400">
                        Led the development and implementation of Union Investment's design system, creating a unified
                        visual language and component library that streamlined the development process across multiple
                        products and teams.
                      </p>
                      <p className="text-gray-400">
                        The system includes a comprehensive set of design tokens, reusable components, and documentation
                        that ensures consistency while maintaining flexibility for different product needs.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-medium mb-4">Key Achievements</h2>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Reduced development time by 40% through standardized components</li>
                      <li>• Improved design consistency across 5+ products</li>
                      <li>• Created comprehensive documentation and usage guidelines</li>
                      <li>• Implemented automated testing and accessibility checks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={400}>
              <div className="mt-24 space-y-12 max-w-[1000px]">
                <div>
                  <h2 className="text-2xl font-medium mb-6">The Challenge</h2>
                  <p className="text-gray-400">
                    Union Investment faced challenges maintaining consistency across their growing product portfolio.
                    Different teams were creating similar components with varying styles, leading to inconsistent user
                    experiences and inefficient development processes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-medium mb-6">The Solution</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>
                      We developed a comprehensive design system that serves as a single source of truth for all product
                      teams. The system includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>A modular component library built with React and TypeScript</li>
                      <li>Design tokens for colors, typography, spacing, and other visual properties</li>
                      <li>Interactive documentation with Storybook</li>
                      <li>Accessibility guidelines and automated testing</li>
                      <li>Version control and release management processes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={500}>
              <div className="mt-24 grid md:grid-cols-2 gap-8">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-[#1B4D5C]">
                  <Image
                    src="https://sjc.microlink.io/n6EtbaRzBz2r71emwzEEX5jstiUYW9uh13CRqOd-35xeK6n4vSfmDojTSWsiFJhxlE3UgvKW6NZoVMJ_TxvX0A.jpeg"
                    alt="Design system components"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-[#1B4D5C]">
                  <Image
                    src="https://sjc.microlink.io/n6EtbaRzBz2r71emwzEEX5jstiUYW9uh13CRqOd-35xeK6n4vSfmDojTSWsiFJhxlE3UgvKW6NZoVMJ_TxvX0A.jpeg"
                    alt="Design system documentation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={600}>
              <div className="mt-24 space-y-12 max-w-[1000px]">
                <div>
                  <h2 className="text-2xl font-medium mb-6">Design Process</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>
                      Our design process followed a systematic approach to ensure we created a robust and scalable
                      system:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        <strong className="text-white">Audit & Research</strong>
                        <p className="mt-2">
                          We began by auditing existing components across all products and researching industry best
                          practices for design systems.
                        </p>
                      </li>
                      <li>
                        <strong className="text-white">Design Principles</strong>
                        <p className="mt-2">
                          Established core design principles that would guide our decision-making process and ensure
                          consistency.
                        </p>
                      </li>
                      <li>
                        <strong className="text-white">Component Architecture</strong>
                        <p className="mt-2">
                          Developed a modular component architecture that balances flexibility with consistency.
                        </p>
                      </li>
                      <li>
                        <strong className="text-white">Documentation</strong>
                        <p className="mt-2">
                          Created comprehensive documentation including usage guidelines, code examples, and best
                          practices.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={700}>
              <div className="mt-24 space-y-8 max-w-[1000px]">
                <h2 className="text-2xl font-medium">Component Examples</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="rounded-lg bg-gray-800 p-6 space-y-4">
                    <div className="h-40 bg-[#1B4D5C] rounded-lg flex items-center justify-center">
                      <Image
                        src="https://sjc.microlink.io/n6EtbaRzBz2r71emwzEEX5jstiUYW9uh13CRqOd-35xeK6n4vSfmDojTSWsiFJhxlE3UgvKW6NZoVMJ_TxvX0A.jpeg"
                        alt="Button components"
                        width={160}
                        height={160}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="font-medium">Buttons</h3>
                    <p className="text-sm text-gray-400">
                      Standardized button styles with multiple variants and states
                    </p>
                  </div>

                  <div className="rounded-lg bg-gray-800 p-6 space-y-4">
                    <div className="h-40 bg-[#1B4D5C] rounded-lg flex items-center justify-center">
                      <Image
                        src="https://sjc.microlink.io/n6EtbaRzBz2r71emwzEEX5jstiUYW9uh13CRqOd-35xeK6n4vSfmDojTSWsiFJhxlE3UgvKW6NZoVMJ_TxvX0A.jpeg"
                        alt="Form components"
                        width={160}
                        height={160}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="font-medium">Forms</h3>
                    <p className="text-sm text-gray-400">Accessible form components with built-in validation states</p>
                  </div>

                  <div className="rounded-lg bg-gray-800 p-6 space-y-4">
                    <div className="h-40 bg-[#1B4D5C] rounded-lg flex items-center justify-center">
                      <Image
                        src="https://sjc.microlink.io/n6EtbaRzBz2r71emwzEEX5jstiUYW9uh13CRqOd-35xeK6n4vSfmDojTSWsiFJhxlE3UgvKW6NZoVMJ_TxvX0A.jpeg"
                        alt="Navigation components"
                        width={160}
                        height={160}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="font-medium">Navigation</h3>
                    <p className="text-sm text-gray-400">Consistent navigation patterns across all products</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={800}>
              <div className="mt-24 space-y-8 max-w-[1000px]">
                <h2 className="text-2xl font-medium">Impact & Results</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <div className="text-4xl font-medium text-blue-400">40%</div>
                    <h3 className="font-medium">Development Speed</h3>
                    <p className="text-gray-400">
                      Increased development speed by providing ready-to-use components and clear documentation
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-medium text-green-400">98%</div>
                    <h3 className="font-medium">Design Consistency</h3>
                    <p className="text-gray-400">
                      Achieved near-perfect design consistency across all products using the system
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-medium text-purple-400">5x</div>
                    <h3 className="font-medium">Maintenance Efficiency</h3>
                    <p className="text-gray-400">
                      Improved maintenance efficiency through centralized updates and version control
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-medium text-yellow-400">100%</div>
                    <h3 className="font-medium">WCAG Compliance</h3>
                    <p className="text-gray-400">Achieved full WCAG 2.1 compliance across all components</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={900}>
              <div className="mt-24 space-y-8 max-w-[1000px] mb-24">
                <h2 className="text-2xl font-medium">Next Steps</h2>
                <div className="space-y-4 text-gray-400">
                  <p>The design system continues to evolve with our products. Our upcoming focus areas include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Expanding the component library with more advanced patterns</li>
                    <li>Implementing automated visual regression testing</li>
                    <li>Creating additional tools for designers and developers</li>
                    <li>Building a design token pipeline for multiple platforms</li>
                  </ul>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </main>

      <AnimateIn animation="fade-up" duration="normal" delay={1000}>
        <div className="mt-24 space-y-8 max-w-[1400px]">
          <div className="text-center space-y-2">
            <h2 className="text-5xl font-medium">The results</h2>
            <p className="text-gray-400">What Nebula achieved in 9 months</p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-24 gap-y-8 max-w-[1000px] mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-6">Release of a documentation site</h3>
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-medium">3</span>
                  <span className="text-gray-400">platforms</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-medium">2</span>
                  <span className="text-gray-400">brand libraries</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-medium">60</span>
                  <span className="text-gray-400">components released</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-medium">42,752</span>
                <span className="text-gray-400">component insertions in our design tooling</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-medium">163</span>
                <span className="text-gray-400">unique component "adoptions"</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-medium">948</span>
                <span className="text-gray-400">component imports in dev projects</span>
              </div>
            </div>
          </div>

          <div className="mt-16 aspect-[2/1] w-full relative rounded-2xl overflow-hidden bg-[#0A192F] p-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-21%20at%2023.46.10-1YGiNt126THAZJlvWh1ncNkpPZoBWy.png"
              alt="Growth chart showing component adoption over time"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </AnimateIn>

      <AnimateIn animation="fade-up" duration="normal" delay={1100}>
        <div className="mt-24 mb-24 aspect-[2/1] w-full relative rounded-2xl overflow-hidden bg-[#0A192F] p-8">
          <div className="h-full">
            <ChartContainer
              className="h-full"
              config={{
                componentsReleased: {
                  label: "Components Released",
                  color: "hsl(0, 0%, 98%)",
                  value: "79",
                },
                componentsAdopted: {
                  label: "Components Adopted",
                  color: "hsl(146, 100%, 85%)",
                  value: "68",
                },
                orionUI: {
                  label: "Orion UI",
                  color: "hsl(190, 95%, 85%)",
                  value: "48",
                },
                oot: {
                  label: "OOT",
                  color: "hsl(190, 95%, 85%)",
                  value: "40",
                },
                carbonZero: {
                  label: "Carbon Zero",
                  color: "hsl(190, 95%, 85%)",
                  value: "23",
                },
                orionApp: {
                  label: "Orion App",
                  color: "hsl(190, 95%, 85%)",
                  value: "19",
                },
                energyEfficiency: {
                  label: "Energy Efficiency",
                  color: "hsl(190, 95%, 85%)",
                  value: "10",
                },
                partnershipLanding: {
                  label: "Partnership Landing",
                  color: "hsl(190, 95%, 85%)",
                  value: "9",
                },
                webCMS: {
                  label: "Web CMS",
                  color: "hsl(190, 95%, 85%)",
                  value: "7",
                },
              }}
            >
              <LineChart
                data={[
                  {
                    date: "2023-01",
                    componentsReleased: 0,
                    componentsAdopted: 0,
                    orionUI: 0,
                    oot: 0,
                    carbonZero: 0,
                    orionApp: 0,
                    energyEfficiency: 0,
                    partnershipLanding: 0,
                    webCMS: 0,
                  },
                  {
                    date: "2023-02",
                    componentsReleased: 10,
                    componentsAdopted: 5,
                    orionUI: 2,
                    oot: 1,
                    carbonZero: 1,
                    orionApp: 1,
                    energyEfficiency: 1,
                    partnershipLanding: 1,
                    webCMS: 1,
                  },
                  {
                    date: "2023-03",
                    componentsReleased: 25,
                    componentsAdopted: 15,
                    orionUI: 10,
                    oot: 8,
                    carbonZero: 5,
                    orionApp: 3,
                    energyEfficiency: 2,
                    partnershipLanding: 2,
                    webCMS: 2,
                  },
                  {
                    date: "2023-04",
                    componentsReleased: 35,
                    componentsAdopted: 25,
                    orionUI: 15,
                    oot: 12,
                    carbonZero: 8,
                    orionApp: 6,
                    energyEfficiency: 3,
                    partnershipLanding: 3,
                    webCMS: 3,
                  },
                  {
                    date: "2023-05",
                    componentsReleased: 45,
                    componentsAdopted: 30,
                    orionUI: 20,
                    oot: 15,
                    carbonZero: 10,
                    orionApp: 8,
                    energyEfficiency: 4,
                    partnershipLanding: 4,
                    webCMS: 4,
                  },
                  {
                    date: "2023-06",
                    componentsReleased: 55,
                    componentsAdopted: 35,
                    orionUI: 25,
                    oot: 20,
                    carbonZero: 12,
                    orionApp: 10,
                    energyEfficiency: 5,
                    partnershipLanding: 5,
                    webCMS: 5,
                  },
                  {
                    date: "2023-07",
                    componentsReleased: 65,
                    componentsAdopted: 45,
                    orionUI: 30,
                    oot: 25,
                    carbonZero: 15,
                    orionApp: 12,
                    energyEfficiency: 6,
                    partnershipLanding: 6,
                    webCMS: 6,
                  },
                  {
                    date: "2023-08",
                    componentsReleased: 70,
                    componentsAdopted: 55,
                    orionUI: 35,
                    oot: 30,
                    carbonZero: 18,
                    orionApp: 15,
                    energyEfficiency: 8,
                    partnershipLanding: 7,
                    webCMS: 7,
                  },
                  {
                    date: "2023-09",
                    componentsReleased: 79,
                    componentsAdopted: 68,
                    orionUI: 48,
                    oot: 40,
                    carbonZero: 23,
                    orionApp: 19,
                    energyEfficiency: 10,
                    partnershipLanding: 9,
                    webCMS: 7,
                  },
                ]}
              >
                <Line
                  type="monotone"
                  dataKey="componentsReleased"
                  stroke="var(--color-componentsReleased)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="componentsAdopted"
                  stroke="var(--color-componentsAdopted)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line type="monotone" dataKey="orionUI" stroke="var(--color-orionUI)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="oot" stroke="var(--color-oot)" strokeWidth={2} dot={false} />
                <Line
                  type="monotone"
                  dataKey="carbonZero"
                  stroke="var(--color-carbonZero)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line type="monotone" dataKey="orionApp" stroke="var(--color-orionApp)" strokeWidth={2} dot={false} />
                <Line
                  type="monotone"
                  dataKey="energyEfficiency"
                  stroke="var(--color-energyEfficiency)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="partnershipLanding"
                  stroke="var(--color-partnershipLanding)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line type="monotone" dataKey="webCMS" stroke="var(--color-webCMS)" strokeWidth={2} dot={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
      </AnimateIn>

      {!isHeaderHovered && <ScrollRing />}
    </div>
  )
}

