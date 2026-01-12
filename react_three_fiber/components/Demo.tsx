import React from 'react'

const Demo = () => {
  return (
    <div className='text-white'>
        Demo
    </div>
  )
}

export default Demo



// "use client"

// import { OrbitControls } from "@react-three/drei"
// import { useFrame } from "@react-three/fiber"
// import { useRef } from "react"
// import * as THREE from "three"

// export default function SceneOne({ active }: { active: boolean }) {
//   const meshRef = useRef<THREE.Mesh>(null!)
//   const materialRef = useRef<THREE.MeshStandardMaterial>(null!)

//   useFrame((state, delta) => {
//     if (!materialRef.current) return

//     // 🎯 ROTATION ANIMATION
//     if (meshRef.current) {
//       meshRef.current.rotation.x += delta * 0.5
//       meshRef.current.rotation.y += delta * 0.3
//     }

//     if (active) {
//       // 🎯 FADE IN/OUT with sine wave when active
//       const time = state.clock.elapsedTime
//       materialRef.current.opacity = Math.abs(Math.sin(time * 0.8)) * 0.7 + 0.3 // oscillates between 0.3 and 1
//     } else {
//       // 🎯 SMOOTH FADE OUT when not active
//       const targetOpacity = 0
//       materialRef.current.opacity = THREE.MathUtils.lerp(
//         materialRef.current.opacity,
//         targetOpacity,
//         delta * 3
//       )
//     }
//   })

//   return (
//     <>
//       <OrbitControls enableZoom={false} />
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <mesh ref={meshRef}>
//         <boxGeometry />
//         <meshStandardMaterial
//           ref={materialRef}
//           color="hotpink"
//           transparent
//           opacity={0}
//         />
//       </mesh>
//     </>
//   )
// }
