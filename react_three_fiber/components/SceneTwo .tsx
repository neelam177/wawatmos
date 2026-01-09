"use client"

import { OrbitControls } from "@react-three/drei";
export default function SceneTwo(){
  return (
    // <group position={position}>
    //   <Sphere args={[2, 32, 32]}>
    //     <meshStandardMaterial color="skyblue" />
    //   </Sphere>

    //   <Text position={[0, -3, 0]} fontSize={0.5}>
    //     Scene Two
    //   </Text>
    // </group>

    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh>
        <SphereG />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
}
