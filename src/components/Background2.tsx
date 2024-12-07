import { Canvas } from '@react-three/fiber';
import { Environment, Sphere } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Environment preset="city" />
        <Sphere args={[8, 32, 32]}>
          <meshStandardMaterial
            color="#fffff"
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>
        <EffectComposer>
          <Bloom
            intensity={1}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}