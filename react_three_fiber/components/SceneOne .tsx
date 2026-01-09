
"use client"

import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function SceneOne() {
  const mesh = useRef<THREE.Mesh>(null)
  const scroll = useScroll()

  useFrame(() => {
    if (scroll.offset < 0.33 && mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <sphereGeometry />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  )
}
