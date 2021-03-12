import { useGLTFLoader } from 'drei';

const Model = () => {
    const gltf = useGLTFLoader('/DJmixer.gltf', true)

    return (
      <primitive object={gltf.scene} dispose={null} />
    );

};

export default Model;
