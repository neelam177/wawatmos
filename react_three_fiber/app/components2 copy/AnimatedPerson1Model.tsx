"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { Person1Model } from './models/Person1'

export default function AnimatedPerson1Model() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      // Dancing motion
      groupRef.current.position.y = -0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.15
      
      // Side to side movement
      groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.1
      
      // Rotation dance
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 1.8) * 0.2
      
      // Scale bounce
      const scale = 1.5 + Math.sin(state.clock.elapsedTime * 3) * 0.1
      groupRef.current.scale.setScalar(scale)
    }
  })

  return (
    <group ref={groupRef}>
      <Person1Model position={[0, .5, 0]} scale={[1, 1, 1]} />
    </group>
  )
}