//another way of declaring a component using arrow function

const ArrowFunctionalComponent = () =>{
    const title: string = "is an arrow functional component";
    return <h1 className="text-center mt-12 text-red-400 font-bold text-xl">{title}</h1>
}

export default ArrowFunctionalComponent;