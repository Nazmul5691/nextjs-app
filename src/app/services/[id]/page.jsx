

const ServiceDetailsPage =async ({params}) => {

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


    const id = params?.id;

    const service = data.find((d) => d._id === id )

    if(service){
        return (
            <div>
                <h1>ServiceDetailsPage</h1>
                <p>Id : {id}</p>
                <p>{service.service_name}</p>
                <p>{service.service_description}</p>
                <p>{service.service_description}</p>
            </div>
        );
    }
    else{
        return(
            <div>
                <p>not found</p>
                <p>not found</p>
            </div>
        )
    }
};

export default ServiceDetailsPage;