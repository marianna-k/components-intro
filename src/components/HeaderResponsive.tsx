import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {Link} from "react-router";
import {useState} from "react";
import {Menu, X} from "lucide-react";

const HeaderResponsive = () => {
    const [menuOpen, setMenuOpen] = useState(false); //when page loads, menu is closed thus is initially false
    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <CodingFactoryLogo/>

                    <button className ="text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={36}/> : <Menu  size={36} />}

                    </button>

                    {/*in which position shall we place the menu: top-24, absolute*/}
                    <nav className={`${menuOpen ? "block" : "hidden"} md:flex gap-4 bg-cf-dark-red text-white absolute top-24 left-0 w-full md:w-auto md:static p-4 md:p-0`}>


                        {/*<a className="text-white hover:underline hover:underline-offset-4"   href="/">Home</a>*/}  {/*one way to declare page link */}

                        {/*setMenuOpen(false) when click Home etc, then the hamburger menu closes*/}
                        <Link to ="/" className="block md-inline hover:underline hover:underline-offset-4 mr-3" onClick={() =>setMenuOpen(false)}>Home</Link>
                        {/*alternative way using Link from react router */}
                        <Link to ="/examples/name-changer" className="block md-inline hover:underline hover:underline-offset-4 mr-3" onClick={() =>setMenuOpen(false)}>Name Changer</Link>
                        <Link to ="/examples/online-status" className="block md-inline hover:underline hover:underline-offset-4" onClick={() =>setMenuOpen(false)}>Online Status</Link>
                    </nav>
                </div>

            </header>
        </>
    )
}

export default HeaderResponsive;