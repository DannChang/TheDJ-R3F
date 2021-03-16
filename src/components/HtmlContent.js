import { useRef, useEffect } from 'react'
import { Html } from '@react-three/drei';
import { Section } from './Section';
import Model from './Model';
import { useFrame } from 'react-three-fiber';

// Calculates how much of a target element overlaps (or intersects) the visible portion of a page, aka "viewport"
import { useInView } from 'react-intersection-observer';

const HTMLContent = ({ 
    domContent, 
    bgColor, 
    children, 
    modelPath, 
    positionY, 
    scale, 
    meshPosition, 
    meshRotation }) => {
    
    const ref = useRef();
    useFrame(() => (ref.current.rotation.y += 0.025));

    const [refItem, inView] = useInView({
        threshold: 0
    });
    useEffect(() => {
        inView && (document.body.style.background = bgColor)
    }, [inView]);

    return (
        <Section factor={1.5} offset={1}>
            <group position={[-25, positionY, 0]}>
                <mesh 
                    className = "mesh" 
                    ref={ref}
                    position={meshPosition}
                    scale={scale}
                    rotation={meshRotation}
                >
                    <Model modelPath={modelPath}/>
                </mesh>
                <Html portal={domContent} fullscreen>
                    <div className="container" ref={refItem}>
                        {children}
                    </div>
                </Html>
            </group>
        </Section>
    );
};

export default HTMLContent;