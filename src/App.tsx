
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponentWProps from "./components/ArrowFunctionalComponentWprops.tsx";
// import ArrowFunctionalComponentWpropsTypes from "./components/ArrowFunctionalComponentWpropsTypes.tsx";

// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
import { Camera } from 'lucide-react';
import Layout from "./components/Layout.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";
import NameChanger from "./components/NameChanger.tsx";
import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {
  return (
    <>
        {/*<ClassComponent />*/}
        {/*<FunctionalComponent />*/}
        {/*<FunctionalComponent />*/}
        {/*<ArrowFunctionalComponentWProps title ="Is an Arrow functional component with props" />*/}
        {/*<ArrowFunctionalComponentWpropsTypes title= "title"  description = "desc" />*/}
      {/*<CodingFactoryLogo />*/}
        <Layout>
            <h1 className="text-center text-2xl font-bold">This is a title</h1>
            {/*<FunctionalComponent />*/}
            {/*<ClassComponentWithState />*/}
            {/*<FunctionalComponentWithState />*/}
            <Camera color="green" size={48} />
            {/*<Counter/>*/}
            {/*<NameChanger />*/}
            {/*<CounterWithMoreStates />*/}
            <CounterAdvanced />
        </Layout>

    </>
  )
}

export default App
