import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Hackmerced";
import Model2 from "./Hackmerced2";
import Model3 from "./Hackmerced3";

const Experience = () => {
    return(
        <>
            <OrbitControls />
            <Model />
            <Model2 />
            <Model3 />
            <Environment preset="night" background />
        </>
    )
}

export default Experience