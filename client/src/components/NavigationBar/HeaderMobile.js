
// import React from 'react'
// import { useState } from 'react'
// import HeaderLinksMobile from './HeaderLinksMobile'
// import './Header.css'
// import menu from '../../assets/menu.svg'
// import { TfiClose } from 'react-icons/tfi'
// import { Link } from 'react-router-dom'
// import logo from '../../assets/ina_blue.svg'


// export default function HeaderMobile() {

//   const [open, setOpen] = useState(false);

//   const closeIcon = <TfiClose
//   alt=""
//   className='hamburger mt-[20px]  left-7 top-1 text-4xl 
//   cursor-pointer absolute' 
//   onClick={() => setOpen(!open)}
//       />

//   const hamburgerIcon = <img src={menu} 
//             alt=""
//             className='hamburger left-7 top-5 pr-[125px]
//             cursor-pointer absolute' 
//             onClick={() => setOpen(!open)}
//                 />

//   return (

//     <div>
//         <nav className='MobileNavigation flex pb-[30px] bg-coral h-[80px]'>
//             {open ? closeIcon : hamburgerIcon}
//                 <Link to='/'>
//                   <img className='pl-[80px] pt-[10px]' src={logo} alt='logo'/>
//                 </Link>
//             {open && <HeaderLinksMobile className=''/>}    
//         </nav>
//     </div>
//   )
// }
