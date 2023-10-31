import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"

import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { Color } from 'three'

export function Model() {
    const [hovered, setHovered] = useState(false)
    const { nodes, materials } = useGLTF('https://models-kosoku-3d.s3.ap-south-1.amazonaws.com/shoes_c.glb')

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])
    const ref = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.y += 0.1;

        ref.current.rotation.set(
            Math.cos(t / 2) / 8,
            Math.sin(t / 1.5) / 3,
            0.3
        )
        ref.current.position.y = (0.16) + (Math.sin(t / 3)) / 50
    })

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
            ref={ref}

            dispose={null}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={(e) => {
                e.stopPropagation() //to remove the previous input to the click
                document.getElementById('Shoe.' + e.object.material.name).focus()
            }}
        >
            <mesh castShadow geometry={nodes.Plane013.geometry} material={materials.leather_mat} />
            <mesh castShadow geometry={nodes.Plane013_1.geometry} material={materials.collar_padding_mat} />
            <mesh castShadow geometry={nodes.Plane013_2.geometry} material={materials.sole_mat} />
            <mesh castShadow geometry={nodes.Plane013_3.geometry} material={materials.insole_mat} />
            <mesh castShadow geometry={nodes.Plane013_4.geometry} material={materials.stripes_mat} />
            <mesh castShadow geometry={nodes.Plane013_5.geometry} material={materials.sew_mat} />
            <mesh castShadow geometry={nodes.Plane013_6.geometry} material={materials.laces_mat} />
        </group>
    )
}

useGLTF.preload('https://models-kosoku-3d.s3.ap-south-1.amazonaws.com/shoes_c.glb')
