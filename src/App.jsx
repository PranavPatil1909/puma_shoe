import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model } from './Shoe'

export default function App() {
    return (
        <Canvas shadows camera={{ position: [0, 0, 0.4] }}>
            <Environment preset="sunset" background blur={[4]} />
            <Model />
            <ContactShadows
                // far={0.8}
                opacity={0.3}
                scale={2}
                blur={1}
                resolution={512}
                position={[0, -0.11, 0]} color="#ffffff" />
            <OrbitControls  />
        </Canvas>
    )
}