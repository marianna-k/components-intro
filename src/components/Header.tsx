import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {Link} from "react-router";

const Header = () => {
    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <CodingFactoryLogo/>
                    <nav className="flex items-center justify-between">


                    {/*<a className="text-white hover:underline hover:underline-offset-4"   href="/">Home</a>*/}  {/*one way to declare page link */}

                    <Link to ="/" className="text-white hover:underline hover:underline-offset-4 mr-3">Home</Link>
                    {/*alternative way using Link from react router */}
                    <Link to ="/examples/name-changer" className="text-white hover:underline hover:underline-offset-4 m-3">Name Changer</Link>
                        <Link to ="/examples/online-status" className="text-white hover:underline hover:underline-offset-4">Online Status</Link>
                    </nav>
                </div>

            </header>
        </>
    )
}

export default Header;