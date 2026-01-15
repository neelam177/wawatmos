"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { PersonModel } from './models/Person'

export default function AnimatedPersonModel() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
      
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      
      // Slight scale pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.05
      groupRef.current.scale.setScalar(scale)
    }
  })

  return (
    <group ref={groupRef}>
      <PersonModel position={[0, -0.1, 0]} scale={[1, 1, 1.5]} />
    </group>
  )
}