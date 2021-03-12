
import React, { Suspense, useRef, useEffect } from 'react';
import "./App.scss"; // Sass styling
import Header from "./components/Header"; // Header for Navbar
import HTMLContent from './components/HtmlContent' // Pure HTML from @drei
import state from './components/States'
import { Canvas } from "react-three-fiber";



export default function App() {
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current}), [])

  return (
    <>
      <Header />

      <Canvas
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        
        <ambientLight intensity={0.3}/> 
        <directionalLight position={[10, 10, 5]}/>
        <spotLight intensity={1} position={[1000, 1000, 0]} />

        <Suspense fallback={null}>
          <HTMLContent 
            bgColor={'#f15946'}
            domContent={domContent}
            modelPath='/disco-ball/scene.gltf'
            positionY={0}
            scale={[0.25, 0.25, 0.25]}
            meshPosition={[100, -15, 0]}
            meshRotation={[Math.PI * 0.1, 0, 0 ]}
          >
            <h1 className='title'>Dance</h1>
          </HTMLContent>

          <HTMLContent 
            bgColor={'#d3c600'}
            domContent={domContent}
            modelPath="/speaker/source/PA_Speakers.glb"
            positionY={-250}
            scale={[10, 10, 10]}
            meshPosition={[100, -15, 0]}
            meshRotation={[Math.PI * 0.15, 0, 0 ]}
          >
            <h1 className='title'>Sing</h1>
          </HTMLContent>

          <HTMLContent 
            bgColor={'#571ec1'}
            domContent={domContent}
            modelPath="/dj-mixer/scene.gltf"
            positionY={250}
            scale={[50, 50, 50]}
            meshPosition={[100, 0, 0]}
            meshRotation={[Math.PI * 0.15, 0, 0 ]}
          >
            <h1 className='title'>Party</h1>
          </HTMLContent>
        </Suspense>

      </Canvas>

      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          <div style={{ position: 'sticky', top: 0 }} ref={domContent} ></div>
          <div style={{ height: `${state.sections * 100}vh` }}></div>
      </div>

    </>
  );
};

