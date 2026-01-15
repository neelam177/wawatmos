"use client"

import { Canvas } from "@react-three/fiber"
import { useEffect, useState, useRef } from "react"
import { AnimatedModel } from './AnimatedModel'
import { Person1 } from "./persons/Person1"
import { Person2 } from "./persons/Person2"
import { Person3 } from "./persons/Person3"
import { Person4 } from "./persons/Person4"
import { Person5 } from "./persons/Person5"
import { gsap } from "gsap"
import { Observer } from "gsap/Observer"

gsap.registerPlugin(Observer);


export default function CanvasComponent() {
  const [sceneIndex, setSceneIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneIndexRef = useRef(0)


  const scenes = [
    { name: "Person 1", },
    { name: "Person 2", },
    { name: "Person 3", },
    { name: "Person 4", },
    { name: "Person 5", }
  ]

  // useEffect(() => {
  //   let locked = false

  //   const onWheel = (e: WheelEvent) => {
  //     e.preventDefault()

  //     // Ignore if locked
  //     if (locked) return

  //     // Lock immediately
  //     locked = true

  //     // Change scene based on direction
  //     if (e.deltaY > 0) {
  //       setSceneIndex(prev => Math.min(prev + 1, scenes.length - 1))
  //     } else if (e.deltaY < 0) {
  //       setSceneIndex(prev => Math.max(prev - 1, 0))
  //     }

  //     // Unlock after 2.5 seconds (slower animation)
  //     setTimeout(() => {
  //       locked = false
  //     }, 2500)
  //   }

  //   window.addEventListener("wheel", onWheel, { passive: false })

  //   return () => {
  //     window.removeEventListener("wheel", onWheel)
  //   }
  // }, [scenes.length])
  useEffect(() => {
    let isAnimating = false

    Observer.create({
      type: "wheel,touch,pointer",
      preventDefault: true,
      tolerance: 10,

      onDown: () => {
        if (isAnimating) return
        isAnimating = true

        sceneIndexRef.current = Math.min(
          sceneIndexRef.current + 1,
          scenes.length - 1
        )

        setSceneIndex(sceneIndexRef.current)

        gsap.delayedCall(1.8, () => {
          isAnimating = false
        })
      },

      onUp: () => {
        if (isAnimating) return
        isAnimating = true

        sceneIndexRef.current = Math.max(
          sceneIndexRef.current - 1,
          0
        )

        setSceneIndex(sceneIndexRef.current)

        gsap.delayedCall(1.8, () => {
          isAnimating = false
        })
      }
    })
  }, [scenes.length])


  return (
    <div className="w-full h-screen bg-gray-900 overflow-hidden">
      <div ref={containerRef} className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <color args={['#1a1a1a']} attach="background" />
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />

          <AnimatedModel active={sceneIndex === 0}>
            <Person1 />
          </AnimatedModel>

          <AnimatedModel active={sceneIndex === 1}>
            <Person2 />
          </AnimatedModel>

          <AnimatedModel active={sceneIndex === 2}>
            <Person3 />
          </AnimatedModel>

          <AnimatedModel active={sceneIndex === 3}>
            <Person4 />
          </AnimatedModel>

          <AnimatedModel active={sceneIndex === 4}>
            <Person5 />
          </AnimatedModel>
        </Canvas>

      </div>
    </div>
  )
}
