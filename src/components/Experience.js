import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Hackmerced";


const Experience = () => {
    return(
        <>
            <OrbitControls />
            <Model />
          
            <Environment preset="night" background />
        </>
    )
}

export default Experience