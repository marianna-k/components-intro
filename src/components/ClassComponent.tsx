import {Component} from "react";

// old way of declaring a class. using extends Component and render
//new way is shown on FunctionalComponent
class ClassComponent extends  Component{
    render(){
        const title ="class component"
        return <h1 className= "text-center mt-12 text-red-400 font-bold">{title}</h1>
    }
}

export default ClassComponent;