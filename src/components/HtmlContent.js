import { Html } from '@react-three/drei';
import { Section } from './Section';
import Model from './Model';

const HTMLContent = () => {
    return (
        <Section factor={1.5} offset={1}>
            <group position={[0, 270, 0]}>
                <mesh position={[0, -100, 0]}>
                    <Model />
                </mesh>
                <Html fullscreen>
                    <div className='container'>
                    <h1 className='title'>Hello</h1>
                    </div>
                </Html>
            </group>

        </Section>
    );
};

export default HTMLContent;