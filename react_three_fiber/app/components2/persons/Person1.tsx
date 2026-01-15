import { useLoader } from "@react-three/fiber"
import * as THREE from "three"

export function Person1() {
  const texture = useLoader(THREE.TextureLoader, "/persons/img1.png")

  return (
    <mesh>
      <planeGeometry args={[2.5, 3.5]} />
      <meshStandardMaterial
        map={texture}
        transparent
      />
    </mesh>
  )
}
