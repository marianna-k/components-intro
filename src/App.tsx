
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponentWProps from "./components/ArrowFunctionalComponentWprops.tsx";
// import ArrowFunctionalComponentWpropsTypes from "./components/ArrowFunctionalComponentWpropsTypes.tsx";

// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
// import {Camera} from 'lucide-react';
import Layout from "./components/Layout.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";
import NameChanger from "./components/NameChanger.tsx";
import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
import CounterAdvanced from "./components/CounterAdvanced.tsx";
import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
import CounterWithReducer from "./components/CounterWithReducer.tsx";
import Todo from "./components/todo/Todo.tsx";
import OnlineStatus from "./components/OnlineStatus.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplePage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import FocusInput from "./components/FocusInput.tsx";
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
      {/*  <Layout>*/}
      {/*      <h1 className="text-center text-2xl font-bold">This is a title</h1>*/}
            {/*<FunctionalComponent />*/}
            {/*<ClassComponentWithState />*/}
            {/*<FunctionalComponentWithState />*/}
            {/*<Camera color="green" size={48} />*/}
            {/*<Counter/>*/}
            {/*<NameChanger />*/}
            {/*<CounterWithMoreStates />*/}
            {/*<CounterAdvanced />*/}

            {/*<CounterAdvancedWithCustomHook />*/}

            {/*<CounterWithReducer />*/}

            {/*<CounterWithReducer />*/}

        {/*    <Todo />*/}

        {/*    <OnlineStatus />*/}
        {/*</Layout>*/}

        <BrowserRouter>
            {/*<Layout>*/}
                <Routes>
                    <Route element = {<RouterLayout />} >
                        // / index page
                        {/*<Route path="/" element={<HomePage />} />*/}
                        <Route index element ={<FocusInput />} />
                    </Route>

                        //alternative of index page
                         {/*<Route index element={<HomePage />} />*/}
                        {/*<Route path ="example/name-changer" element={<NameChangerPage />} />*/}
                        {/*<Route path ="example/online-status" element={<NameChangerPage />} />*/}

                    //alternative way of declaring the above Route paths

                    //we could also add a ? next to examples so as to make path optional
                    <Route path ="examples" element ={<RouterExamplesLayout />}>
                        {/*we are in index of /examples*/}
                        <Route index element = {<ExamplePage />} />
                        <Route path= "name-changer" element={<NameChangerPage />} />
                        <Route path= "online-status" element={<OnlineStatusPage />} />
                        <Route path ="auto-redirect" element ={<AutoRedirectPage />} />
                    </Route>

                    {/*run below code in browser as: users/12 */}
                    <Route path ="users" element ={<UserPage />} />
                    <Route path ="users/:userId" element ={<UserPage />} />

                    {/*asking for a file*/}
                    {/*<Route path ="files/*" element={<FilePage />} />*/}
                    //how to read the file in a component page
                    {/*const params = useParams();*/}
                    {/*const filePath = params ["*"];*/}

                    {/*path parameter*/}
                    {/*example.com/users/12/name/Nick*/}
                    {/*query parameter*/}
                    {/*example.com/users?id=12&name=Nick*/}

                    //alternative way of declaring the above Route paths
                    //path is optional ?, can be also called using examples/name-changer or just simple name-changer without examples in front
                    {/*<Route path ="examples?/name-changer" element={<NameChangerPage />} />*/}


                {/*    at the end of all routes we create a path to declare errors. * indicates to catch all paths */}
                {/*    it needs to be placed at the end due to priority of the rest of the pages*/}
                    <Route path ="*" element ={<NotFoundPage />} />
                </Routes>
            {/*</Layout>*/}
        </BrowserRouter>


    </>
  )
}

export default App
