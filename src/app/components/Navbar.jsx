// "use client"
// import Link from "next/link";
// import { usePathname } from "next/navigation";


// const Navbar = () => {
//     const pathname = usePathname();
//     if ( pathname.includes('dashboard')){
//         return (
//             <div className="flex items-center justify-evenly list-none">
//                 <Link href="/">
//                     <li>Home</li>
//                 </Link>
//                 <Link href="/services">
//                     <li>Services</li>
//                 </Link>
//                 <Link href="/contact">
//                     <li>Contact</li>
//                 </Link>
//             </div>
//         );
//     }
//     else{
//         <></>
//     }
    
// };

// export default Navbar;


"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    if (!pathname.includes("dashboard")) {
        return (
            <div className="flex items-center justify-evenly">
                <ul className="list-none">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/news">News</Link>
                    </li>
                </ul>
            </div>
        );
    } else {
        return null;
    }
};

export default Navbar;


// "use client"
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//     const pathname = usePathname();

//     if (pathname.includes("dashboard")) {
//         <></>
//     } else {
//         return (
//             <div className="flex items-center justify-evenly">
//                 <ul className="list-none">
//                     <li>
//                         <Link href="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link href="/services">Services</Link>
//                     </li>
//                     <li>
//                         <Link href="/contact">Contact</Link>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// };

// export default Navbar;