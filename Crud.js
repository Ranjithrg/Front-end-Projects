import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./crud.css"

function Crud() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((userData) => setData(userData))
        .catch((err)=>console.log(err))
    },[])
  return (
    <div className='container'>
        <h1>CRUD Operation</h1>
        <table  border={1}>
            <tbody>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>User Address</th>
                    <th>Update</th>
                </tr>
            </tbody>
            <tbody>
                {
                    data.map((user,index)=>{
                        return(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>
                                    <button id='editBtn'>Edit</button>
                                    <button id='deleteBtn'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Crud
