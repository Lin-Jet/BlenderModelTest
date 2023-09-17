import { Canvas } from "@react-three/fiber"
import './App.css';
import Experience from "./components/Experience";
import { Box, Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div>
      <h1>Hello</h1>
    <Canvas>
      <Experience />
      <Box/>
      <OrbitControls />
    </Canvas>
    </div>
  );
}

export default App;
