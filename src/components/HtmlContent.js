import { useRef } from 'react'
import { Html } from '@react-three/drei';
import { Section } from './Section';
import Model from './Model';
import { useFrame } from 'react-three-fiber';

const HTMLContent = ({ children, modelPath, positionY, scale }) => {
    
    const ref = useRef();
    useFrame(() => (ref.current.rotation.y += 0.01));

    return (
        <Section factor={1.5} offset={1}>
            <group position={[-25, positionY, 0]}>
                <mesh 
                    ref={ref}
                    position={[100, 0, 0]}
                    scale={scale}
                    rotation={[Math.PI * 0.1, -Math.PI * .35, 0 ]}
                >
                    <Model modelPath={modelPath}/>
                </mesh>
                <Html fullscreen>
                    {children}
                </Html>
            </group>

        </Section>
    );
};

export default HTMLContent;