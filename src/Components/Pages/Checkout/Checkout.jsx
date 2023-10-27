import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Checkout = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    // console.log(service)

    const handleCheckout = (e) =>{
        e.preventDefault()
        const from = e.target 
        const name = from.name.value
        const date = from.date.value
        const email = from.email.value
        const price = from.price.value
        const details = from.message.value
        const bookings = {
          customerName: name,
          service_title: service.title,
          date,
          email,
          img: service.img,
          price,
          service_id: service._id,
          details
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        console.log(bookings)
        // console.log('hello')
    }


  
    return (
        <div>

            <h2 className="text-center text-4xl font-bold mt-10">Booked Service: <span className="text-[#FF3811]">{service.title}</span></h2>

            <div className="card shadow-md my-16">
                <form onSubmit={handleCheckout} className="card-body">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" 
                            name="name"
                            defaultValue={user?.displayName} 
                            placeholder="Name" 
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" 
                             name="date"
                            placeholder="Date" 
                            className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" 
                             name="email"
                            defaultValue={user?.email} 
                            placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text"
                             name="price"
                             defaultValue={"$ "+ service?.price} 
                             placeholder="price" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full h-24" name="message" placeholder="Your message"></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <button className=" form-control btn btn-outline w-full text-white normal-case bg-[#FF3811]">Order Confirm</button>
                    </div>


                </form>
            </div>

          
        </div>
    );
};

export default Checkout;