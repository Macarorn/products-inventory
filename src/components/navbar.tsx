import React, { useState, useEffect } from 'react'
import "../sass/navbar.scss"
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IconButton } from "@material-ui/core";
// import { StoreIcon } from "@material-ui/icons-material";
import StoreIcon from '@mui/icons-material/Store';
import { RiFileList3Line } from "react-icons/ri";
import { MdPriceCheck } from 'react-icons/md';


function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false)


    return (<>

        <div className={`${showSidebar ? "darkBackground" : ""}`}></div>
        <nav className={`navbar ${showSidebar ? "showText" : ""}`}>
            <div className={`menu_bar ${showSidebar ? "showText" : ""}`} onClick={() => setShowSidebar(showSidebar => !showSidebar)}>
                <div className="bar">

                    <IconButton >
                        <HiMenu />
                    </IconButton>
                    <span className="navbar_li_text">
                        <p className="navTitle">
                            Inventory
                        </p>
                    </span>
                </div>
                {/* <span className="toolTip">Menu</span> */}
            </div>
            <ul className={`navUl`}>


                <li className="navbar_li user">
                    <IconButton>
                        <FaUserCircle />
                    </IconButton>
                    <span className="navbar_li_text">
                        <p>

                            User
                    </p>
                        <IconButton>
                            <FiLogOut />
                        </IconButton>
                    </span>
                    <span className="toolTip">User</span>
                </li>
                <li className="navbar_li"> <Link to="/">
                    <IconButton> <StoreIcon /> </IconButton>
                    <span className="navbar_li_text">
                        <p>

                            In Stock
                </p>
                    </span>
                </Link>
                    <span className="toolTip">In Stock</span>
                </li>
                <li className="navbar_li"> <Link to="/sold">
                    <IconButton> <MdPriceCheck /> </IconButton>
                    <span className="navbar_li_text">
                        <p>

                            Sold
                    </p>
                    </span>
                </Link>
                    <span className="toolTip">Sold</span>
                </li>
            </ul>
        </nav>
    </>)
}

export default Navbar
