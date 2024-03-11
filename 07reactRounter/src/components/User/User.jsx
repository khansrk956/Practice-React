import React from "react";
import { useParams } from 'react-router-dom'  // hook

function User(){
    const {userid} = useParams()  // take {userid} from main.sx path.
    return (
        <div className="bg-gray-600 text-white text-3xl p-4">User: {userid}</div>
    )
}

export default User