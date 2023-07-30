import React from 'react';
import { FaBars} from 'react-icons/fa';
import { LuLayoutDashboard} from 'react-icons/lu';
import { BiSolidShoppingBag} from 'react-icons/bi';
import {BsPeopleFill} from 'react-icons/bs';
import {MdOutlineInventory2} from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
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
..
    </div>
    </div>
  )
}

export default Header