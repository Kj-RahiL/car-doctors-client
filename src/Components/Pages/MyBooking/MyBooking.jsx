import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyBooksCard from "./MyBooksCard";
import axios from "axios";


const MyBooking = () => {
    const { user, } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res=>{
            setBookings(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        const proceed = confirm('if you want delete it')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE",
            })
                .then(res=>res.json())
                .then(data =>{
                    console.log(data)
                    if(data.deletedCount > 0){
                        alert('deleted successful')
                        const remaining = bookings.filter(booked=> booked._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`, {
                method: "PATCH",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({status: 'confirm'})
            })
                .then(res=>res.json())
                .then(data =>{
                    console.log(data)
                    if(data.modifiedCount > 0){
                        const remaining = bookings.filter(booked=> booked._id !== id)
                        const updated = bookings.find(booked=> booked._id === id)
                        updated.status= 'confirm'
                        const newBookings = [updated, ...remaining]
                        setBookings(newBookings)
                    }
                })
    }
    return (
        <div >
            <h2 className="text-4xl"> your bookings : {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               Delete
                            </th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booked=><MyBooksCard 
                                key={booked._id} booked={booked} 
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                                ></MyBooksCard>)
                        }
                      
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default MyBooking;