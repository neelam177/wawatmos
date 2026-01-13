"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export function AnimatedModel({
  active,
  children,
}: {
  active: boolean
  children: React.ReactNode
}) {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((_, delta) => {
    if (!groupRef.current) return

    const targetScale = active ? 1 : 0.6
    const targetOpacity = active ? 1 : 0

    // Smooth scale transition
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      delta * 3
    )

    // Smooth fade transition
    groupRef.current.traverse((obj: any) => {
      if (obj.material) {
        obj.material.transparent = true
        obj.material.opacity = THREE.MathUtils.lerp(
          obj.material.opacity ?? 0,
          targetOpacity,
          delta * 3
        )
      }
    })
  })

  return <group ref={groupRef}>{children}</group>
}