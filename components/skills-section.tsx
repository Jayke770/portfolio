"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Database, Layers, Server, Workflow, Zap } from "lucide-react"

interface SkillNodeProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  side: "left" | "right"
  color: string
  delay: number
}

function SkillNode({ title, skills, icon, side, color, delay }: SkillNodeProps) {
  return (
    <div className={`flex items-center gap-4 ${side === "left" ? "flex-row" : "flex-row-reverse"} my-8`}>
      <motion.div
        initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={`w-full md:w-5/12 p-6 rounded-xl border ${color} bg-black/50 backdrop-blur-sm`}
      >
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="text-gray-300 flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${color.replace("border-", "bg-")}`}></span>
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Timeline node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        viewport={{ once: true }}
        className={`relative w-12 h-12 rounded-full flex items-center justify-center z-10 ${color.replace(
          "border-",
          "bg-",
        )}`}
      >
        {icon}
      </motion.div>

      {/* Empty space for the other side */}
      <div className="hidden md:block w-5/12"></div>
    </div>
  )
}

export default function SkillsSection() {
  const skillsData = [
    {
      title: "Frontend Development",
      skills: ["React & Next.js", "TypeScript", "Responsive Design", "CSS & Tailwind", "State Management"],
      icon: <Code className="h-6 w-6 text-blue-300" />,
      color: "border-blue-500/30",
      iconBg: "bg-blue-500",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "RESTful APIs", "GraphQL", "PostgreSQL", "MongoDB"],
      icon: <Server className="h-6 w-6 text-green-300" />,
      color: "border-green-500/30",
      iconBg: "bg-green-500",
    },
    {
      title: "Web3 Fundamentals",
      skills: [
        "Blockchain Basics",
        "Crypto Wallets",
        "Smart Contract Concepts",
        "Web3 Libraries",
        "DApps Architecture",
      ],
      icon: <Layers className="h-6 w-6 text-purple-300" />,
      color: "border-purple-500/30",
      iconBg: "bg-purple-500",
    },
    {
      title: "Smart Contract Development",
      skills: ["Solidity", "Contract Testing", "Security Best Practices", "ERC Standards", "Gas Optimization"],
      icon: <Code className="h-6 w-6 text-pink-300" />,
      color: "border-pink-500/30",
      iconBg: "bg-pink-500",
    },
    {
      title: "DeFi & NFT Development",
      skills: ["Liquidity Pools", "Yield Farming", "NFT Minting", "Marketplaces", "Token Standards"],
      icon: <Database className="h-6 w-6 text-indigo-300" />,
      color: "border-indigo-500/30",
      iconBg: "bg-indigo-500",
    },
    {
      title: "DevOps & Deployment",
      skills: ["CI/CD Pipelines", "Docker", "AWS", "Vercel", "IPFS"],
      icon: <Workflow className="h-6 w-6 text-orange-300" />,
      color: "border-orange-500/30",
      iconBg: "bg-orange-500",
    },
  ]

  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-500 to-blue-500 hidden md:block"></div>

      {/* Skill nodes */}
      <div className="relative z-10">
        {skillsData.map((skill, index) => (
          <SkillNode
            key={index}
            title={skill.title}
            skills={skill.skills}
            icon={skill.icon}
            side={index % 2 === 0 ? "left" : "right"}
            color={skill.color}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Mobile version (simplified) */}
      <div className="md:hidden space-y-6 mt-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 rounded-xl border ${skill.color} bg-black/50`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${skill.color.replace("border-", "bg-")}`}
              >
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
            </div>
            <ul className="space-y-2">
              {skill.skills.map((item, idx) => (
                <li key={idx} className="text-gray-300 flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${skill.color.replace("border-", "bg-")}`}></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Roadmap start and end markers */}
      <div className="hidden md:flex justify-center mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium"
        >
          <Zap className="h-4 w-4 inline mr-2" />
          Continuous Learning & Growth
        </motion.div>
      </div>
    </div>
  )
}

