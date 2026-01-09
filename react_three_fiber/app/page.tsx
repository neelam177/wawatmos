"use client"
// // import Demo from "@/components/Demo";
// import CanvasComponent from "@/components/CanvasComponent";
// export default function Home() {
//   return (
//     <div>
//       {/* <CanvasComponent/> */}
//     </div>
//   );
// }
import { Canvas } from "@react-three/fiber"
import { ScrollControls, Scroll } from "@react-three/drei"
import SceneOne from "../components/SceneOne "
import SceneTwo from "../components/SceneTwo "
import SceneThree from "../components/SceneThree "

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ScrollControls pages={3} damping={0.2}>
        <Scroll>
          <SceneOne />
          <SceneTwo />
          <SceneThree />
        </Scroll>
      </ScrollControls>
    </Canvas>
  )
}
