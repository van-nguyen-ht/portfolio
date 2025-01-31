"use client"

import Link from "next/link"
import Image from "next/image"
import { Moon, Sun } from "lucide-react"

interface HeaderProps {
  scrolled: boolean
  isDark: boolean
  toggleTheme: () => void
}

export function Header({ scrolled, isDark, toggleTheme }: HeaderProps) {
  return scrolled ? (
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

        <nav className="flex items-center gap-3 sm:gap-4 ml-4" aria-label="Main navigation">
          <Link
            href="https://www.linkedin.com/in/van-nguyen-33a236275/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-white-HHHHZZZZHHHHZZZZHHHHZZZZHHx16.svg"
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
              className="hover:opacity-70 transition-opacity text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-white-HHHHZZZZHHHHZZZZHHHHZZZZHHx16.svg"
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
  )
}

