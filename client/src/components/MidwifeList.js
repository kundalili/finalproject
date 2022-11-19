// import React, { useState, useEffect } from 'react'
// import axios from 'axios'


// export default function MidwifeList() {
//     const [data, setData] = useState({
//         email: '',
//         username: '',
//         password: ''
//       })

//     const [users, setUsers] = useState([])

//   useEffect(() => {

//     getData()
//   }, [])

//   async function getData() {

//     const response = await axios.get('/user/list')
//     console.log("🚀 ~ response", response)

//     if (response.data.success) setUsers(response.data.users)
//   }

//   const handleRegister = async () => {

//     const response = await axios.post('/user/register', data)

//       if (response.data.success) {
//         getData()
//       }
//     console.log("🚀 ~ response", response)

      
//   }

//   return (
//     <div>
//         {
//             users.map((item, idx) => {

//             return <div key={idx}>{item.name}</div>
//              })
//         }
//     </div>
//   )
// }
