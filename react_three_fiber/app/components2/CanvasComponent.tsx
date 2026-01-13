"use client"

import { Canvas } from "@react-three/fiber"
import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AnimatedModel } from './AnimatedModel'
import { PersonModel } from './models/Person'
import { Person1Model } from './models/Person1'
import { Person2Model } from './models/Person2'
import { Person3Model } from './models/Person3'

gsap.registerPlugin(ScrollTrigger)

export default function CanvasComponent() {
  const [sceneIndex, setSceneIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const scenes = [
   { name: "Person 1", color: "#ff69b4", component: PersonModel },
    { name: "Person 2", color: "#ffa500", component: Person1Model },
    { name: "Person 3", color: "#32cd32", component: Person2Model },
    { name: "Person 4", color: "#9932cc", component: Person3Model }
  ]

  useEffect(() => {
    // Create fake scroll height
    document.body.style.height = "400vh" // 4x viewport height for 4 scenes

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      pin: containerRef.current,
      snap: 1 / (scenes.length - 1), // snap points per scene
      onUpdate: (self) => {
        const progress = self.progress
        const newSceneIndex = Math.round(progress * (scenes.length - 1))
        if (newSceneIndex !== sceneIndex) setSceneIndex(newSceneIndex)
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      document.body.style.height = "auto"
    }
  }, [sceneIndex])

  return (
    <>
      {/* Fixed Canvas Container */}
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-screen"
      >
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <color args={['#1a1a1a']} attach="background" />
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff69b4" />

          {/* 🎯 ALL MODELS RENDERED TOGETHER - NO UNMOUNTING */}
          <AnimatedModel active={sceneIndex === 0}>
            < PersonModel/>
          </AnimatedModel>

          <AnimatedModel active={sceneIndex === 1}>
            <Person1Model />
          </AnimatedModel>

          <AnimatedModel active={sceneIndex === 2}>
            <Person2Model />
          </AnimatedModel>

          <AnimatedModel active={sceneIndex === 3}>
            <Person3Model />
          </AnimatedModel>
        </Canvas>
      </div>
    </>
  )
}