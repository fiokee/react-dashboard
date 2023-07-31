import React from 'react';
import { FaBars, FaUserCircle, FaBell} from 'react-icons/fa';
import { LuLayoutDashboard} from 'react-icons/lu';
import { BiSolidShoppingBag} from 'react-icons/bi';
import {BsPeopleFill} from 'react-icons/bs';
import {MdOutlineInventory2} from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {FiSettings} from 'react-icons/fi';
import {SlEarphones} from 'react-icons/sl';
import {HiOutlineLogout} from 'react-icons/hi';
import {FiGift} from 'react-icons/fi';
import Logo from '../assets/logo.png'

import './Header.css'
const Header = () => {
  return (
    <div className="wrapper hover_collapse">

    <div className="top_navbar">

    <div className="logo">
    <img src={Logo} alt='logo'/>
    </div>

    <div className="menu">
     <div className="hamburger">
     <i className="fas fa-bars"><FaBars/></i>
     </div>
     <div className='dash'>Dashboard</div>
     <div className='user'>
      <p>Nanny's Shop<RiArrowDropDownLine/> </p>
      <p className='bell'><FaBell/></p>
      <p><FaUserCircle/></p>
      <img/>
     </div>
   </div>

  </div>
    <div className="sidebar">
    <div className="sidebar_inner">
  <ul>
      <li>
      <a href="#">
      <span className="icon"><LuLayoutDashboard/></span>
      <span className="text">Dashboard</span>
      </a>
      </li>

      <li>
      <a href="#">
      <span className="icon"><i className="fa fa-link"><BiSolidShoppingBag/></i></span>
      <span className="text">Orders</span>
      </a>
      </li>

      <li>
      <a href="#">
      <span className="icon"><i className="fa fa-eye"><BsPeopleFill/></i></span>
      <span className="text">Customers</span>
      </a>
      </li>

      <li>
      <a href="#">
      <span className="icon"><i className="fa fa-book"><MdOutlineInventory2/></i></span>
      <span className="text">Inventory</span>
      </a>
      </li>

      <li>
      <a href="#">
      <span className="icon"><i className="fa fa-question-circle"><AiOutlineMessage/></i></span>
      <span className="text">Conversations</span>
      </a>
      </li>

      <li>
      <a href="#">
      <span className="icon"><i className="fa fa-pen"><FiSettings/></i></span>
      <span className="text">Settings</span>
      </a>
      </li>
  </ul>
</div>

{/* supports */}
  <div className='container'>
    <ul>
    <li>
      <a href="#">
      <span className="icon"><SlEarphones/></span>
      <span className="text">Contact Support</span>
      </a>
      </li>

      <li>
      <a href="#">
      <span className="icon"><FiGift/></span>
      <p className="text">Free Gift Awaits You!</p>
      <span>Upgrade Your account kk</span>
      </a>
      </li>

      <li>
      <a href="#">
    <span className="icon"><HiOutlineLogout/></span>
    <span className="text">Logout ll</span>
      </a>
      </li>
    </ul>
  </div>
    </div>
    </div>
  )
}

export default Header