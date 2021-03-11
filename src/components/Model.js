import { useGLTFLoader } from 'drei';

const Model = () => {
    const gltf = useGLTFLoader('/pioneer.gltf', false)

    return (
      <primitive object={gltf.scene} dispose={null} />
    );

};

export default Model;
