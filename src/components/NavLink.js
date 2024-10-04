
import React from "react";

const NavItem = ({ cat }) => {
  return (
    <li className="nav__item">
      <a href="#" className="nav__link">
        {cat}
      </a>
    </li>
  );
};

export default NavItem;

// export default function(){
//     return(
//         <li className="nav__item">
//                            <a href="#" className="nav__link">
//                                {cat}
//                            </a>)
//    }
