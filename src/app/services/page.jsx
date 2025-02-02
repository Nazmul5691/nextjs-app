"use client"
import Link from 'next/link';


const ServicesPage = () => {

    const data = [
        {
            _id: "1",
            service_name: "Premium Pet Grooming",
            service_image: "https://i.ibb.co.com/nnvPShx/Nature-s-Best-Cosmetics.jpg",
            service_description: "Professional grooming services for your pets, including bathing, trimming, and nail clipping."
        },
        {
            _id: "2",
            service_name: "Home Cleaning Service",
            service_image: "https://i.ibb.co.com/nnvPShx/Nature-s-Best-Cosmetics.jpg",
            service_description: "Expert home cleaning services to keep your living space fresh and tidy."
        },
        {
            _id: "3",
            service_name: "Tech Support & Repair",
            service_image: "https://i.ibb.co.com/nnvPShx/Nature-s-Best-Cosmetics.jpg",
            service_description: "Reliable tech support and repair services for all your gadgets and devices."
        }
    ];


    return (
        <div className='flex items-center justify-center h-screen'>
            <h1 className='text-4xl text-red-700'>Services Page</h1>
            {
                data.map((d) => (
                    <div key={d._id}>
                        <Link href={`/services/${d._id}`}>
                            <img src={d.service_image} alt="" />
                        </Link>
                    </div>
                ))
            }
        </div>


    );
};

export default ServicesPage;


// "use client"
// import Link from 'next/link';

// const ServicesPage = () => {
//     const data = [
//         {
//             _id: "1",
//             service_name: "Premium Pet Grooming",
//             service_image: "https://i.ibb.co.com/nnvPShx/Nature-s-Best-Cosmetics.jpg",
//             service_description: "Professional grooming services for your pets, including bathing, trimming, and nail clipping."
//         },
//         {
//             _id: "2",
//             service_name: "Home Cleaning Service",
//             service_image: "https://i.ibb.co.com/nnvPShx/Nature-s-Best-Cosmetics.jpg",
//             service_description: "Expert home cleaning services to keep your living space fresh and tidy."
//         },
//         {
//             _id: "3",
//             service_name: "Tech Support & Repair",
//             service_image: "https://i.ibb.co.com/nnvPShx/Nature-s-Best-Cosmetics.jpg",
//             service_description: "Reliable tech support and repair services for all your gadgets and devices."
//         }
//     ];

//     return (
//         <div className='flex flex-col items-center justify-center min-h-screen'>
//             <h1 className='text-4xl text-red-700 mb-6'>Services Page</h1>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {data.map((d) => (
//                     <div key={d._id} className="border p-4 rounded-lg shadow-lg">
//                         <Link href={`/services/${d._id}`}>
//                             <img src={d.service_image} alt={d.service_name} className="w-full h-48 object-cover rounded-md" />
//                         </Link>
//                         <h2 className="text-xl font-bold mt-3">{d.service_name}</h2>
//                         <p className="text-gray-600">{d.service_description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ServicesPage;