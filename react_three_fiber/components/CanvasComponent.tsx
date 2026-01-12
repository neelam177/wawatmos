"use client"

import { Canvas } from "@react-three/fiber"
import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SceneOne from './SceneOne '
import SceneTwo from './SceneTwo '
import SceneThree from './SceneThree '
import SceneFour from './SceneFour '

gsap.registerPlugin(ScrollTrigger)

export default function CanvasComponent() {
  const [sceneIndex, setSceneIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const scenes = [
    { name: "Pink Cube", color: "#ff69b4", component: SceneOne },
    { name: "Orange Cylinder", color: "#ffa500", component: SceneTwo },
    { name: "Green Cone", color: "#32cd32", component: SceneThree },
    { name: "Purple Torus", color: "#9932cc", component: SceneFour }
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

  // const CurrentScene = scenes[sceneIndex].component

  return (
    <>
      {/* Fixed Canvas Container */}
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-screen"
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
          <color args={['#1a1a1a']} attach="background" />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />

          {sceneIndex === 0 && <SceneOne active={true} />}
          {sceneIndex === 1 && <SceneTwo />}
          {sceneIndex === 2 && <SceneThree />}
          {sceneIndex === 3 && <SceneFour />}
        </Canvas>

      </div>


    </>
  )
}