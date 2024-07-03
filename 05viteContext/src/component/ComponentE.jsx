import React from "react";
import UserContext from "./UserContext";
import ComponentF from "./ComponentF";

class ComponentE extends React.Component{

    static contextType = UserContext

    render(){
        return(
            <div>
                <p>Component E {this.context}</p>
                <ComponentF/>
            </div>
        )
    }
}



export default ComponentE
