// import React from 'react'
// import { useState } from 'react';
// import TextField from '@mui/material/TextField'
// import EditIcon from '@mui/icons-material/Edit';
// import Button from '@mui/material/Button';
// import axios from 'axios'

// export default function Profile() {
    
//       const [users, setUsers] = useState([])

//       const [userToEdit, setUserToEdit] = useState({
//         email: '',
//         username: '',
//         password: ''
//       })
    
//     const handleRegister = async () => {

//     const response =  await axios.post(

//             '/user/register', data
//         )
        
//         console.log("🚀 ~ file: Registration.js ~ line 24 ~ handleRegister ~  response",  response)

//       }

//       const updateEdit = item => {
//         console.log("🚀 ~ item", item)
      
//           setUserToEdit({...item})
//         }
      
//         const handleEdit = async () => {
      
//           const response = await axios.patch('/user/edit', userToEdit)
//           console.log("🚀 ~ response", response)
      
//           if (response.data.success) {
      
//             const idx = users.findIndex(item => item._id === userToEdit._id)
      
//             const updatedUsers = [...users]
      
//             updatedUsers[idx] = {...userToEdit}
      
//             setUsers([...updatedUsers])
//           }
      
//         }
      
//   return (
//    <div className='flex p-[20px] gap-[20px] justify-center items-center flex-col'>
//         <TextField placeholder='Type your name' value={userToEdit.name} onChange={e => setUserToEdit({...userToEdit, name: e.target.value})} id="outlined-basic" label="Name" variant="outlined" />
//         <TextField placeholder='Type your email' value={userToEdit.email} onChange={e => setUserToEdit({...userToEdit, email: e.target.value})} id="outlined-basic" label="Email" variant="outlined" />
//         <TextField placeholder='Type your password' value={userToEdit.password} onChange={e => setUserToEdit({...userToEdit, password: e.target.value})} id="outlined-basic" label="Password" variant="outlined" />
        
//     </div>

//   )
// }
