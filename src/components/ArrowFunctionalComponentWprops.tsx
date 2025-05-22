type Props = {
    title: string;
}

const ArrowFunctionalComponentWProps = ({title} : Props) => {
    return <h1 className="text-center mt-12 text-red-400 font-bold text-xl">{title}</h1>

}

export default ArrowFunctionalComponentWProps;