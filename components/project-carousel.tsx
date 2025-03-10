"use client"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ProjectCard from "./project-card"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
}

interface ProjectCarouselProps {
  projects: Project[]
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [api, setApi] = useState<any>(null)
  const [current, setCurrent] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = () => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }

  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1">
                <ProjectCard project={project} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2 py-4">
          {projects.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`w-2 h-2 rounded-full p-0 ${
                index === current ? "bg-purple-500" : "bg-gray-600 hover:bg-gray-500"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-black/50 border-purple-500/30 hover:bg-black/70 text-purple-400" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-black/50 border-purple-500/30 hover:bg-black/70 text-purple-400" />
      </Carousel>

      <div className="mt-8 text-center">
        <p className="text-gray-400">
          <span className="text-purple-400 font-medium">{current + 1}</span> / {projects.length}
        </p>
      </div>
    </div>
  )
}

