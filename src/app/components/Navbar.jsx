import Link from "next/link";


const Navbar = () => {
    return (
        <div className="flex items-center justify-evenly list-none">
            <Link href="/">
                <li>Home</li>
            </Link>
            <Link href="/services">
                <li>Services</li>
            </Link>
            <Link href="/contact">
                <li>Contact</li>
            </Link>
        </div>
    );
};

export default Navbar;