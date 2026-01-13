"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { Person2Model } from './models/Person2'

export default function AnimatedPerson2Model() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      // Spinning motion
      groupRef.current.rotation.y += 0.01
      
      // Up and down bounce
      groupRef.current.position.y = -0.8 + Math.abs(Math.sin(state.clock.elapsedTime * 1.5)) * 0.2
      
      // Tilting motion
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
      
      // Breathing scale
      const scale = 1.5 + Math.sin(state.clock.elapsedTime * 2.5) * 0.08
      groupRef.current.scale.setScalar(scale)
    }
  })

  return (
    <group ref={groupRef}>
      <Person2Model position={[0, .5, 0]} scale={[1, 1, 1]} />
    </group>
  )
}