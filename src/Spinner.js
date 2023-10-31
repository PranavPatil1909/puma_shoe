import React, { Component } from 'react'
import {
  OrbitControls,
  Environment,
  Reflector,
  MeshReflectorMaterial,
  useProgress,
  Html
} from '@react-three/drei'

import rhombus from './gif/Rhombus.gif'
import './Spinner.css'

export const Spinner = () => {
  return (
    <div class='progress-bar-container' >
      <label id='label' for='progress-bar'  >Loading...</label>
      <div></div>
      <progress id='progress-bar' value='0' max='100'></progress>
      {/* <h2 style={{ color: 'white' }}>Loading...</h2> */}
      
      {/* <img src="./gif/Rhombus.gif" alt="loading"></img> */}
    </div>
  )
}

