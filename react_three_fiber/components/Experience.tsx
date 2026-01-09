"use client"

import { OrbitControls } from "@react-three/drei";

const Experience = () => {
    return (
        <>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>                         
        </>
    )
}

export default Experience