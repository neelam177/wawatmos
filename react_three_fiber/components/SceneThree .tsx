"use client"

import { useFrame } from "@react-three/fiber"
import { useRef, useEffect } from "react"
import * as THREE from "three"
import { gsap } from "gsap"

export default function SceneThree() {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4
      meshRef.current.position.x = Math.cos(state.clock.elapsedTime) * 0.5
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  useEffect(() => {
    // Entry animation
    if (groupRef.current) {
      gsap.fromTo(groupRef.current.scale, 
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 0.5, ease: "power2.inOut" }
      )
      
      gsap.fromTo(groupRef.current.rotation,
        { x: Math.PI * 2 },
        { x: 0, duration: 1.5, ease: "power3.inOut" }
      )
    }
  }, [])

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        {/* ConeGeometry: radius=1, height=2.5, radialSegments=8 */}
        <coneGeometry args={[1, 2.5, 8]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  )
}