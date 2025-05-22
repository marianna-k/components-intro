
import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponentWProps from "./components/ArrowFunctionalComponentWprops.tsx";
import ArrowFunctionalComponentWpropsTypes from "./components/ArrowFunctionalComponentWpropsTypes.tsx";

function App() {
  return (
    <>
        <ClassComponent />
        <FunctionalComponent />
        <FunctionalComponent />
        <ArrowFunctionalComponentWProps title ="Is an Arrow functional component with props" />
        <ArrowFunctionalComponentWpropsTypes title= "title"  description = "desc" />
    </>
  )
}

export default App
