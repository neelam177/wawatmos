import { useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

export default function CameraRig() {
  const scroll = useScroll()
  const { camera } = useThree()

  useFrame(() => {
    const page = scroll.offset * 3

    // smooth camera movement
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      -page * 6,
      0.1
    )
  })

  return null
}
