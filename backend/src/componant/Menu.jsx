import React, { useState } from 'react';

const Menu =()=> {
    const [selectedMenu,setSelectedMenu]=useState(0);
    const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);

    const handleMenuClick =(index)=>{
        selectedMenu(index);
    };

    const handleProfileClick =(index)=>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const menuClass ="menu";
    const activeMenuClass  ="menu selected";

    return ( 
      <div className="menu-container">
        <img src='logo.png' style={{width:"50px"}}/>
        <div className="menus">
            <ul>
                <li>
                    <a href='/' style={{textDecoration:"none"}} onClick={()=> handleMenuClick(0)}>
                    <p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p>
                    </a>
                </li>
                <li>
                 <a href='/orders' style={{textDecoration:"none"}} onClick={()=> handleMenuClick(1)}>
                   <p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p>
                 </a>
                </li>
                <li>
                <a href='/holdings' style={{textDecoration:"none"}} onClick={()=> handleMenuClick(2)}>
                    <p className={selectedMenu===2?activeMenuClass:menuClass}>Holdings</p>
                 </a>
                </li>
                <li>
                <a href='/positions' style={{textDecoration:"none"}} onClick={()=> handleMenuClick(3)}>
                    <p className={selectedMenu===3?activeMenuClass:menuClass}>Positions</p>
                 </a>
                </li>
                <li>
                <a href='/funds' style={{textDecoration:"none"}} onClick={()=> handleMenuClick(4)}>
                    <p className={selectedMenu===4?activeMenuClass:menuClass}>Funds</p>
                 </a>
                </li>
                <li>
                <a href='/apps' style={{textDecoration:"none"}} onClick={()=> handleMenuClick(5)}>
                    <p className={selectedMenu===5?activeMenuClass:menuClass}>Apps</p>
                 </a>
                </li>
            </ul>
            <hr/>
            <div className="profile" onClick={handleMenuClick}>
                <div className="avatar">ZU</div>
                <p className='username'>USERID</p>
            </div>
            {isProfileDropdownOpen}
        </div>
      </div>
    );
}

export default Menu;