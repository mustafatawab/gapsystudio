import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';

function Landscape() {
  // Load the model
  const { scene } = useGLTF('landscape.glb'); // Adjust the path if needed

  // Return the 3D model with scale, position, and rotation adjustments
  return (
    <primitive
      object={scene}
      scale={[10, 10, 10]} // Adjust scale if the model is too small or large
      position={[0, -5, 0]} // Adjust position to fit into the view
      rotation={[0, Math.PI, 0]} // Rotate if the model faces the wrong direction
    />
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 5, 15], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        {/* 3D Model */}
        <Landscape />

        {/* Debugging Helpers */}
        <gridHelper args={[100, 100]} />
        <axesHelper args={[5]} />

        {/* Controls */}
        <OrbitControls />

        {/* Environment */}
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
