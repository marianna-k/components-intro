const Footer = () => {
    const currentYear: number = new Date().getFullYear()
    return (
        <>
            <footer className="bg-gray-700">
                <div className=" text-white text-center py-4">
                    Copyright © {currentYear}, Coding Factory 7. All Right Reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer;