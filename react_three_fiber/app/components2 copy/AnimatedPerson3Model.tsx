"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { Person3Model } from './models/Person3'

export default function AnimatedPerson3Model() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      // Wobble animation
      groupRef.current.position.y = -0.8 + Math.sin(state.clock.elapsedTime * 2.2) * 0.12
      groupRef.current.position.x = Math.cos(state.clock.elapsedTime * 1.8) * 0.08
      
      // Happy rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.15
      
      // Joyful scale
      const scaleX = 1.5 + Math.sin(state.clock.elapsedTime * 2.8) * 0.06
      const scaleY = 1.5 + Math.cos(state.clock.elapsedTime * 3.2) * 0.04
      groupRef.current.scale.set(scaleX, scaleY, scaleX)
    }
  })

  return (
    <group ref={groupRef}>
      <Person3Model position={[0, .5, 0]} scale={[1, 1, 1]} />
    </group>
  )
}