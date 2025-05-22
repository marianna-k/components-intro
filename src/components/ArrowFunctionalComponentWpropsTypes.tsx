type Props = {
    title: string;
    description: string;
}

const ArrowFunctionalComponentWProps = ({title, description} : Props) => {
    return (
        <>
            <h1 className="text-center mt-12 text-red-400 font-bold text-xl">{title}</h1>
            <p className="text-center mt-12 text-blue-400 font-bold text-xl">{description}</p>
        </>
    )



}

export default ArrowFunctionalComponentWProps;