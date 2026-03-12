import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Cabinet(props) {
  const { nodes, materials } = useGLTF(
    'https://models-kosoku-3d.s3.ap-south-1.amazonaws.com/MODA-7_Baked_Maps_Attached.glb'
  )
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.067, -1.773]} scale={[1.745, 3.5, 0.25]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials['Stainles Steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials['BLACK RAL.003']}
        />
      </group>
      <group position={[0, -0.007, -0.868]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials['Basalt_Black.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials.Balck_Ral}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ceiling.geometry}
        material={materials.Above_Fake_Ceiling}
        position={[0, 3.074, -0.868]}
      />
      <group position={[1.071, 1.617, -0.28]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube109.geometry}
          material={materials['BLACK RAL']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube109_1.geometry}
          material={materials.Wood}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stainless_steel_.geometry}
        material={materials['Stainles Steel']}
        position={[0.988, 0.854, -0.868]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base_Side_R001.geometry}
        material={materials['Stainles Steel']}
        position={[1.071, 0.083, -0.868]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wood004.geometry}
        material={materials['BLACK RAL']}
        position={[0, 1.617, -0.841]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <group position={[-0.002, 2.909, -0.878]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials['Black matte metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_1.geometry}
          material={materials['BLACK RAL']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.E_3000K}
        position={[0.938, 2.948, -0.509]}
        scale={[1.172, 1.172, 5.281]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.E_3000K}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.E_3000K}
        position={[0.206, 2.948, -1.634]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.E_3000K}
        position={[0.206, 2.948, -0.037]}
      />
    </group>
  )
}

useGLTF.preload(
  'https://models-kosoku-3d.s3.ap-south-1.amazonaws.com/MODA-7_Baked_Maps_Attached.glb'
)
