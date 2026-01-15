import { useLoader } from "@react-three/fiber"
import * as THREE from "three"

export function Person4() {
  const texture = useLoader(THREE.TextureLoader, "/persons/img4.png")

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
