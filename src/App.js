
import React, { Suspense } from 'react';
import "./App.scss"; // Sass styling
import Header from "./components/Header"; // Header for Navbar
import HTMLContent from './components/HtmlContent' // Pure HTML from @drei
import { Canvas } from "react-three-fiber";



export default function App() {
  return (
    <>
      <Header />
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        <ambientLight intensity={0.3}/>
        <Suspense fallback={null}>
          <HTMLContent 
            modelPath='/musclecar.gltf'
            positionY={250}
            scale={[5, 4, 4]}
          >
            <div className='container'>
              <h1 className='title'>Muscle</h1>
            </div>
          </HTMLContent>
          {/* <HTMLContent 
            modelPath="/BMW E30.glb"
            positionY={250}
            scale={[10, 10, 10]}
          >
            <div className='container'>
              <h1 className='title'>Hello</h1>
            </div>
          </HTMLContent> */}
          {/* <HTMLContent 
            modelPath="/Ford Anglia.gltf"
            positionY={250}
            scale={[50, 50, 50]}
          >
            <div className='container'>
              <h1 className='title'>Hello</h1>
            </div>
          </HTMLContent> */}

          {/* <HTMLContent /> */}
        </Suspense>
      </Canvas>
    </>
  );
};

