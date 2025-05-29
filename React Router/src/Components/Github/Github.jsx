import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
const data = useLoaderData()
// const[data, setData] = useState([])

// useEffect(() => {
//     fetch('https://api.github.com/users/hiteshchoudhary')
//       .then(Response => Response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className=" rounded text-center m-4 bg-gray-600 text-white p-4 text-1xl">
<img src={data?.avatar_url} alt="images" className="rounded-full w-40 h-40 mx-auto" />

      Github Followers: {data?.followers}
      
    </div>
  );
}

export default Github

export const githubInfoLoader = async ()=>{
    const res = await fetch('https://api.github.com/users/')
    return res.json()
}
