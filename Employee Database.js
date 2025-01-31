//Crud.js
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import "./crud.css"

function Crud() {
    const [data,setData] = useState([]);

    const[name,setName]=useState('');
    const[email,setEmail]=useState(' ');
    const[address,setAddress]=useState(' ');
    const[editUser,setEditUser]=useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((userData) => setData(userData))
        .catch((err)=>console.log(err))
    },[])

    function handleUserData()
    {
        const userName = name.trim();
        const userEmail = email.trim();
        const userAddress = address.trim();
        if(userName && userEmail && userAddress)
            
        {
            if(editUser)
            {
                fetch(`https://jsonplaceholder.typicode.com/users/${editUser.id}`,
                    {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                    },
                    body: JSON.stringify({
                        name: userName,
                        email: userEmail,
                        address: {
                            city: userAddress,
                        },
                    })
                    
        })
        .then((res) => res.json())
        .then((updatedUser) => setData(data.map((user) =>user.id === updatedUser.id ? updatedUser : user)))
        setEditUser(null);
        setName('');
        setEmail('');
        setAddress('');
    }
 else{
 fetch(`https://jsonplaceholder.typicode.com/users`,
 {
    method:"POST",
    headers:{"Content-Type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
        name:userName,
        email:userEmail,
        address:{
            city:userAddress,
        }
    })
 })
 .then((res) => res.json())
 .then((newUser) => setData([...data, newUser]))
 setName('');
 setEmail('');
 setAddress('');
 }

}
}
   
    function handleEdit(user)
    {
        setName(user.name);
        setEmail(user.email);
        setAddress(user.address.city);
        setEditUser(user);
    }
    function handleDelete(id)
    {
 fetch(`https://jsonplaceholder.typicode.com/users/${id}`
    ,{
        method:'DELETE',
    })
    .then(()=> setData(data.filter(predata => predata.id!==id)))
    }

  return (
    <div className='container'>
        <h1>CRUD Operation</h1>
        <label>Enter User Name</label>
        <input type ='text' placeholder='Enter Name' value ={name}
        onChange = {(e) => setName(e.target.value)} /> <br />

          <label>Enter Email </label>  
        <input type ='email' placeholder='Enter Email' value ={email}
        onChange = {(e) => setEmail(e.target.value)}/> <br />

           <label>Enter Address </label>  
           <input type ='text' placeholder='Enter Address' value ={address}
        onChange = {(e) => setAddress(e.target.value)}/> <br />

       <button onClick ={handleUserData} >{editUser ? "Edit User Data " : "Add New Data "}</button>


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
                            <tr key ={index}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>
                                    <button id='editBtn' onClick={()=> handleEdit(user)}>Edit</button>
                                    <button id='deleteBtn'onClick={() => handleDelete(user.id)}>Delete</button>
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


// crud.css
.container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.container > h1{
    margin: 0;
    text-align: center;
}
.container > table {
    border-collapse: collapse;
    border: 1px solid gray;
}
th{
    background-color: darkblue;
    color: white;
}
th,td {
    padding: 8px 15px;
}

#editBtn{
    border: none;
    background-color: darkblue;
    color: white;
    padding: 4px 8px;
    margin-right: 4px;
}
#deleteBtn{
    border: none;
    background-color: crimson;
    color: white;
    padding: 4px 8px;
    margin-right: 4px;
}
tr:nth-child(even) {
    background-color: lightgray;
}
tr:hover{
    background-color: gray;
    color: white;
}
