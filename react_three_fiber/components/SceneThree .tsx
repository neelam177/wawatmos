import { Torus, Text } from "@react-three/drei";
import { SceneProps } from "@/types/scene";

export default function SceneThree({ position }: SceneProps): JSX.Element {
  return (
    <group position={position}>
      <Torus args={[2, 0.6, 16, 100]}>
        <meshStandardMaterial color="orange" />
      </Torus>

      <Text position={[0, -3, 0]} fontSize={0.5}>
        Scene Three
      </Text>
    </group>
  );
}
