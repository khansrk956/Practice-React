import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // component load it call autimatically.
    // const [data, setData] = useState([])  // by default empty array.

    // useEffect (() => {
    //     fetch('https://api.github.com/users/khansrk956')
    //     .then(response => response.json()) // response convert string to json.
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    //     }, [])
        
    
    return (
        
        <div className=" flex justify-center items-center bg-purple-400" >
        <p className="text-center m-4 bg-gray-600 ext-white p-4 text-3xl ">Github followers: {data.followers}
        </p>
        <img className="m-2" src = {data.avatar_url} alt = "Git picture" width={300} />
        <h2 className="text-center m-4 bg-gray-600 ext-white p-4 text-3xl">Name:{data.name}</h2>
        {/* <p>About: {data.fetch}</p> */}
        </div>
    )
}

export default Github

export const githubInfoLoader = async() =>{
    const respone = await fetch('https://api.github.com/users/khansrk956')
    return respone.json()
    
}