import { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { Color } from 'three'

export function Model() {
    const [hovered, setHovered] = useState(false)
    const { nodes, materials } = useGLTF('https://models-kosoku-3d.s3.ap-south-1.amazonaws.com/shoes.glb')

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    useControls('Shoe', () => {
        console.log('creating color pickers')

        // using forEach
        const colorPickers = {}
        Object.keys(materials).forEach((m) => {
            colorPickers[m] = {
                value: '#' +
                    ((
                        Math.random() *
                        0xffffff) <<
                        0).toString(16).padStart(6, '0'),
                onChange: (v) => {
                    materials[m].color = new Color(v)
                }
            }
        })
        return colorPickers


    })

    // JSX of glTF created using the command
    // npx gltfjsx .\public\models\shoe-draco.glb

    return (
        <group
            dispose={null}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={(e) => {
                e.stopPropagation() //to remove the previous input to the click
                document.getElementById('Shoe.' + e.object.material.name).focus()
            }}
        >
            <mesh emissive={[0.5, 0.5, 0.5]} geometry={nodes.Plane013.geometry} material={materials.leather_mat} />
            <mesh emissive={[0.5, 0.5, 0.5]} geometry={nodes.Plane013_1.geometry} material={materials.collar_padding_mat} />
            <mesh emissive={[0.5, 0.5, 0.5]} geometry={nodes.Plane013_2.geometry} material={materials.sole_mat} />
            <mesh emissive={[0.5, 0.5, 0.5]} geometry={nodes.Plane013_3.geometry} material={materials.insole_mat} />
            <mesh emissive={[0.5, 0.5, 0.5]} geometry={nodes.Plane013_4.geometry} material={materials.stripes_mat} />
            <mesh emissive={[0.5, 0.5, 0.5]} geometry={nodes.Plane013_5.geometry} material={materials.sew_mat} />
            <mesh emissive={[0.5, 0.5, 0.5]} geometry={nodes.Plane013_6.geometry} material={materials.laces_mat} />
        </group>
    )
}

useGLTF.preload('https://models-kosoku-3d.s3.ap-south-1.amazonaws.com/shoes.glb')