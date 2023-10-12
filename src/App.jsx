import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model } from './Shoe'

export default function App() {
    return (
        <Canvas shadows camera={{ position: [-0.3, 0.2, -0.4], fov: 60 }}>
            <Environment preset="sunset" background blur={[4]} />
            {/* <Environment preset="city" /> */}

            <ambientLight intensity={0.7} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <Model />
            <ContactShadows
                // far={0.8}
                opacity={0.3}
                scale={2}
                blur={1.5}
                resolution={512}
                position={[0, -0.11, 0]} color="#ffffff"
            />
            <OrbitControls />
        </Canvas>
    )
}