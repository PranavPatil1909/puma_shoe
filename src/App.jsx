import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Reflector, ContactShadows } from '@react-three/drei'
import { Model } from './Shoe'
import Floor from './Floor'

export default function App() {
    return (
        <Canvas shadows camera={{ position: [-0.3, 0.2, -0.4] }}>
            <Environment preset="sunset" background blur={[0.1]} />
            {/* <Environment preset="city" /> */}
            <gridHelper args={[2, 2, 0xff0000, 'BLACK']} />

            <axesHelper args={[5]} />
            {/* <Floor  /> */}
            {/* <ambientLight intensity={0.7} /> */}
            <Reflector
                blur={[5, 5]} // Blur ground reflections (width, heigt), 0 skips blur
                mixBlur={0.75} // How much blur mixes with surface roughness
                  mixStrength={0.5} // Strength of the reflections
                resolution={1000} // Off-buffer resolution, lower=faster, higher=better quality
                args={[2, 2]} // PlaneBufferGeometry arguments
                rotation={[-Math.PI * 0.5, 0, 0]}
                mirror={0.5} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                minDepthThreshold={0.25}
                maxDepthThreshold={1}
                depthScale={50}
                receiveShadow
            >
                {(Material, props) => (
                    <Material metalness={0.9} roughness={0.9} {...props} />
                )}
            </Reflector>
            <spotLight intensity={0.2} angle={0.1} position={[0, 4.5, 0]} castShadow color={'white'} />
            <Model />

            {/* <ContactShadows
                // far={0.8}
                opacity={0.3}
                scale={2}
                blur={1.5}
                resolution={512}
                position={[0, 0, 0]} color="#ffffff"
            /> */}

            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    )
}