"use client"

import { useFrame } from "@react-three/fiber"
import { useRef, useEffect } from "react"
import * as THREE from "three"
import { gsap } from "gsap"

export default function SceneFour() {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3
      meshRef.current.rotation.y += delta * 0.5
      meshRef.current.rotation.z += delta * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.4
    }
  })

  useEffect(() => {
    // Entry animation
    if (groupRef.current) {
      gsap.fromTo(groupRef.current.scale, 
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 1, ease: "power2.inOut" }
      )
      
      gsap.fromTo(groupRef.current.rotation,
        { x: Math.PI * 2, y: Math.PI * 2 },
        { x: 0, y: 0, duration: 1, ease: "power2.inOut" }
      )
    }
  }, [])

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        {/* TorusKnotGeometry: radius=0.5, tube=0.2, tubularSegments=64, radialSegments=16 */}
        <torusKnotGeometry args={[0.5, 0.2, 64, 16]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    </group>
  )
}