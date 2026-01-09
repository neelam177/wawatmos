"use client"

import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
const CanvasComponent = () => {
  return (
    <div>
      <Canvas camera={{
        position: [0, 0, 5],
        fov: 30,
      }}>
        <color args={['#ececec']} attach="background" />
        <Experience />
      </Canvas>
    </div>
  )
}

export default CanvasComponent