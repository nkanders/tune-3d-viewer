import React from "react";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
import "./styles.css";

export default function App() {
  const modelPath = "media/tunebed_new.gltf";
  return (
    <div>
      Aditya
      <GLTFModel src={modelPath}>
        <AmbientLight color={0xffffff} />
        <DirectionLight
          color={0xffffff}
          position={{ x: 100, y: 200, z: 100 }}
        />
        <DirectionLight
          color={0xff00ff}
          position={{ x: -100, y: 200, z: -100 }}
        />
      </GLTFModel>
    </div>
  );
}
