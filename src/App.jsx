import { Canvas, extend } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  Reflector,
  MeshReflectorMaterial,
  useProgress,
  Html
} from '@react-three/drei'
import { Suspense } from 'react'
import { useState, CSSProperties } from 'react'
import WasdControls from './Wasd-contorls'
import Loading from './Loader'

// extend({ Reflector });

import { Model } from './Shoe'
import Floor from './Floor'
import { Spinner } from './Spinner'
import { Cabinet } from './cupboard'

export default function App() {
  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState('#ffffff')
  return (
    <>
      <Canvas shadows camera={{ position: [0, 3, 5] }}>
        <Suspense>
          <Environment
            preset="dawn"
            background
            backgroundBlurriness={1}
            backgroundIntensity={1}
            environmentRotation={[0, Math.PI / 2, 0]}
            // blur={[0.1]}
            // ground={{
            //   height: 15,
            //   radius: 115,
            //   scale: 100
            // }}
          />

          {/* <Environment preset="city" /> */}
          {/* <gridHelper args={[2, 2, 0xff0000, 'BLACK']} /> */}

          {/* <axesHelper args={[5]} /> */}
          {/* <Floor /> */}
          <ambientLight intensity={0.5} />

          <spotLight
            intensity={1.9}
            angle={0.1}
            position={[-9, 9, 6]}
            // position={[0, 2, 0]}

            castShadow
            color={'white'}
          />

          {/* <Model /> */}
          <group position={[0, 2, 1]}>
            <Cabinet />
          </group>

          <OrbitControls enableZoom={true} target={[0, 4, 0]} />
          <WasdControls />
        </Suspense>
      </Canvas>
    </>
  )
}
