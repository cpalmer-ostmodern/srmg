import React from 'react'
import {Entity, Scene} from 'aframe-react';
import 'babel-polyfill';
import 'aframe'
import 'arjs'

export default class ARjsComp extends React.Component {

  componentDidMount(){
  }

  render (){
    return(
      <div
          style={{ width: "800px", height: "800px" }}
          ref={mount => { this.mount = mount}}
      >
      {/* <Scene> */}
        {/* <a-scene embedded arjs>
          <a-marker preset="hiro">
            <a-cone position='0 0.5 0' rotation="0 0 0" radius-bottom="0.5" material='opacity: 0.75; color: red;'></a-cone>
          </a-marker>
          <Entity primitive="a-camera"></Entity>
        </a-scene> */}
        <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
    >
      <a-marker type="barcode" value="7">
        <a-box rotation="45 90 180" position="0 0.5 0" color="white"></a-box>
        <a-box scale="1" position="-45 1.25 0" color="white"></a-box>
        <a-text
          position="0 2 0"
          text="value: HIA Magazine"
          color="black"
          rotation="-90 0 0"
        ></a-text>
      </a-marker>


      <a-entity camera></a-entity>
    </a-scene>
       {/* </Scene> */}
      </div>
    )
  }

}
