import { Canvas } from "@react-three/fiber"
import './App.css';
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <h1>Hello</h1>
    <Canvas>
      <Experience />
    </Canvas>
    </div>
  );
}

export default App;
