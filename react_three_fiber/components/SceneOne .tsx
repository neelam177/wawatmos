"use client"

import { useFrame } from "@react-three/fiber"
import { useRef, useEffect } from "react"
import * as THREE from "three"
import { gsap } from "gsap"

export default function SceneOne({ active }: { active: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.6
      meshRef.current.rotation.y += delta * 0.6

      // meshRef.current.position.x = Math.cos(state.clock.elapsedTime) * 0.2
    }
  })

  useEffect(() => {
    // Entry animation
    if (groupRef.current) {
      gsap.fromTo(groupRef.current.scale,
        { x: 0, y: 0, z: 1 },
        { x: 1, y: 1, z: 1, duration: 1, ease: "power2.inOut" }
      )

      gsap.fromTo(groupRef.current.rotation,
        { y: Math.PI / 2 },
        { y: 0, duration: 1.2, ease: "power2.inOut" }
      )
    }
  }, [])

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        {/* BoxGeometry: width=1, height=1, depth=1 */}
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </group>
  )
}