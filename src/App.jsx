import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls, Environment, Reflector, MeshReflectorMaterial } from '@react-three/drei'

// extend({ Reflector });


import { Model } from './Shoe'
import Floor from './Floor'

export default function App() {
    return (
        <Canvas shadows camera={{ position: [-0.3, 0.4, -0.4] }}>
            <Environment preset="lobby"
                background
            // blur={[0.1]}
            />

            {/* <Environment preset="city" /> */}
            {/* <gridHelper args={[2, 2, 0xff0000, 'BLACK']} /> */}

            {/* <axesHelper args={[5]} /> */}
            <Floor />
            <ambientLight intensity={0.5}    />



            <spotLight intensity={1.5} angle={0.1} position={[-9, 20, 6]} castShadow color={'white'} />
            <Model />



            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    )
}