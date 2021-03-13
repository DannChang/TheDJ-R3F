import { useGLTFLoader } from 'drei';

const Model = ( { modelPath }) => {
    const gltf = useGLTFLoader(modelPath, true)
    console.log(gltf)

    return (
      <primitive object={gltf.scene} dispose={null} />
    );

};

export default Model;
