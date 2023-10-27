import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="my-20">
            <div className="text-center items-center space-y-3 mb-10">
                <h3 className="text-xl text-[#FF3811] font-bold">Service</h3>
                <h2 className="text-5xl text-[#151515] font-bold">Our Service Area</h2>
                <p className="w-1/2 mx-auto text-[#737373]"> The Majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {
                    services.map(service=> <ServiceCard key={service._id} service={service} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;