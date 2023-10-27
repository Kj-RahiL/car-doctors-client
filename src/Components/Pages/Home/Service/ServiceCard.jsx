import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service
    return (
        <div className="card shadow-sm bg-base-100 border border-[#E8E8E8)] rounded-lg">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="text-2xl font-bold ">{title}</h2>
                <div className="flex justify-between items-center text-[#FF3811]">
                    <h1 className="card-title">Price : ${price}</h1>
                    <Link to={`/checkout/${_id}`}><h4 className="text-2xl font-bold"><BsArrowRight></BsArrowRight></h4></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;