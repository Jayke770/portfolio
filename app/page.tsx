"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import SkillsSection from "@/components/skills-section"
import ContactForm from "@/components/contact-form"
import ProjectCarousel from "@/components/project-carousel"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ]

  const projects = [
    {
      title: "DeFi Exchange Platform",
      description: "A decentralized exchange with liquidity pools and yield farming capabilities.",
      tags: ["React", "Solidity", "Ethers.js", "Hardhat"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "NFT Marketplace",
      description: "Marketplace for creating, buying, and selling NFTs with wallet integration.",
      tags: ["Next.js", "IPFS", "Smart Contracts", "Tailwind"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "DAO Governance Portal",
      description: "Decentralized governance platform for community voting and proposal management.",
      tags: ["TypeScript", "The Graph", "Web3.js", "Material UI"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="#home"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Jayke
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "transition-colors hover:text-purple-400",
                  activeSection === item.id ? "text-purple-500 font-medium" : "text-gray-300",
                )}
                onClick={() => setActiveSection(item.id)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 border-b border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "transition-colors hover:text-purple-400 py-2",
                    activeSection === item.id ? "text-purple-500 font-medium" : "text-gray-300",
                  )}
                  onClick={() => {
                    setActiveSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen pt-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-purple-950/30 to-black">
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-2/3 left-1/2 w-48 h-48 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-repeat opacity-5" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="mb-8 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full blur opacity-30 animate-pulse" />
              <div className="relative bg-black/50 backdrop-blur-sm p-1 rounded-full border border-white/10 inline-block">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  width={120}
                  height={120}
                  alt="Profile"
                  className="rounded-full"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Building the decentralized future with modern web technologies
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => {
                  setActiveSection("projects")
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                onClick={() => {
                  setActiveSection("contact")
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated code blocks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-10 z-0 hidden md:block"
        >
          <pre className="text-xs text-purple-400/50 font-mono">
            {`contract NFTMarket {
  mapping(uint => address) owners;
  
  function mint() external {
    // Mint logic
  }
}`}
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-32 right-10 z-0 hidden md:block"
        >
          <pre className="text-xs text-pink-400/50 font-mono">
            {`function connectWallet() {
  const provider = new ethers.providers
    .Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts");
  return provider.getSigner();
}`}
          </pre>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Who I Am</h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate full stack developer with expertise in both traditional web development and blockchain
                technologies. With over 3 years of experience building web applications and Web3 space, I
                specialize in creating seamless, user-friendly experiences that bridge the gap between conventional web
                platforms and decentralized applications.
              </p>
              <p className="text-gray-300">
                My approach combines technical excellence with creative problem-solving, allowing me to develop
                innovative solutions for complex challenges in the rapidly evolving blockchain ecosystem.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-white">Frontend</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-white">Backend</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Bun.js</li>
                    <li>Python</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2 text-white">Web3</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Solidity</li>
                    <li>Ethers.js</li>
                    <li>Hardhat</li>
                    <li>Viem.js</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2 text-white">Tools</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Git</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="max-w-5xl mx-auto">
            <ProjectCarousel projects={projects} />
          </div>
        </div>
      </section>
      {/* Skills Section */}
      < section id="skills" className="py-20 bg-gradient-to-b from-black to-purple-950/20" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <SkillsSection />
        </div>
      </ section>

      
      {/* Contact Section */}
      < section id="contact" className="py-20 bg-black" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out for collaboration opportunities, project inquiries, or just to say hello. I'm
                always open to discussing new projects and ideas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-purple-500" />
                  <span className="text-gray-300">jakevelasco40@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="h-6 w-6 text-purple-500" />
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    github.com/jayke770
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-6 w-6 text-purple-500" />
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    linkedin.com/in/jayke770
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </ section>

      {/* Footer */}
      < footer className="py-8 bg-black border-t border-white/10" >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Jayke | All Rights Reserved</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </ footer>
    </div >
  )
}

