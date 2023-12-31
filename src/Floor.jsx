import { MeshReflectorMaterial, Stage } from '@react-three/drei'

export default function Floor() {
    return (
        <mesh rotation-x={-Math.PI / 2} receiveShadow>
            <circleGeometry args={[10]} />            

            <MeshReflectorMaterial
                
                blur={[5, 5]} // Blur ground reflections (width, heigt), 0 skips blur
                mixBlur={0.75} // How much blur mixes with surface roughness
                mixStrength={0.5} // Strength of the reflections
                resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality
                args={[10, 10]} // PlaneBufferGeometry arguments
                rotation={[-Math.PI * 0.5, 0, 0]}
                mirror={0.1} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                minDepthThreshold={0.25}
                maxDepthThreshold={1}
                depthScale={50}
                receiveShadow
                distortion={[0]}
                metalness={0.9} roughness={0}
            />


        </mesh>
    )
}