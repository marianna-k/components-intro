//new way of presenting component without class keyword, component and render
function FunctionalComponent(){
    const title="is a functional component";
    return <h1 className="text-center mt-12 text-red-400 font-bold text-xl">{title}</h1>
}

export default FunctionalComponent;