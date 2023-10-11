import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model } from './Shoe'

export default function App() {
    return (
        <Canvas shadows camera={{ position: [0, 0, 0.4] }}>
            <Environment preset="city" background blur={[1]} />
            <Model />
            <ContactShadows
                // far={0.8}
                opacity={0.5}
                // scale={10}
                // blur={2}
                // resolution={512}
                position={[0, -0.1, 0]} color="#ffffff" />
            <OrbitControls  />
        </Canvas>
    )
}