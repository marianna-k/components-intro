import {Link, NavLink} from "react-router";

const ExamplesSection = () => {
    return (
        <>
            <div className="bg-gray-200 py-24">
                    <ul className= "container mx-auto flex justify-center space-x-4 text-center font-bold">
                        <li>
                            {/*NavLink adds an active class in the link (like in css)*/}
                            {/*<NavLink to = "/examples/name-changer"> Name Changer</NavLink>*/}
                            <NavLink
                                to="/examples/name-changer"
                                className={({isActive}) =>
                                    isActive ? "text-cf-dark-red underline underline-offset-4" : "text-cf-gray" }
                            >
                                Name Changer
                            </NavLink>
                        </li>
                        <li>
                            {/*Link doesn't add an active class*/}
                            {/*<Link to = "/examples/online-status"> Online Status</Link>*/}

                            <NavLink
                                to="/examples/online-status"
                                className={({isActive}) =>
                                    isActive ? "text-cf-dark-red underline underline-offset-4" : "text-cf-gray" }
                            >
                                Online Status
                            </NavLink>
                        </li>
                        <li></li>
                    </ul>
            </div>
        </>
    )
}

export default ExamplesSection;