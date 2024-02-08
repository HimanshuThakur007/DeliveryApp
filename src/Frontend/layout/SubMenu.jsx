import React from 'react';
import '../css/subMenu.css'

const SubMenu = () => {
  return (
    <div className='container-fluid'>
     <div className="row">
        <div className="col-12 sub-menu ">
            <ul className='submenu-items d-flex flex-wrap' >
                <li className='submenu-list' >Electronics </li>
                <li className='submenu-list' >Baby & Kids  </li>
                <li className='submenu-list' >Men  </li>
                <li className='submenu-list' >Women  </li>
              </ul>
        </div>
     </div>
    </div>
  )
}

export default SubMenu;