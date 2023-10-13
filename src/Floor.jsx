export default function Floor() {
    return (
        <mesh rotation-x={-Math.PI / 2} receiveShadow>
            <circleGeometry args={[2]} />
            {/* <meshStandardMaterial /> */}
            <meshPhysicalMaterial
                color={'Grey'}
                roughness={0.1}
                metalness={0.5}
                thickness={3.12}
                ior={1.74}
                transmission={0.8}
            />
        </mesh>
    )
}