import { ImCross } from "react-icons/im";

const MyBooksCard = ({ booked, handleDelete, handleConfirm }) => {
    const { _id, customerName, date, email, img, price, service_title, status } = booked
    console.log(booked)
    
    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)}><ImCross></ImCross></button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {img && <img src={img} alt="Avatar " />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>{service_title}</td>
            <td>
                {price}
            </td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-blue-700">Confirm</span> :
                    <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">pending</button>}
            </th>
        </tr>

    );
};

export default MyBooksCard;