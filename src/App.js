
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
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </>
  );
};

