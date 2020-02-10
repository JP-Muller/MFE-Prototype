import React from 'react'
import './SideDrawer.css'

function SideDrawer() {
    return (
        <nav id='side-drawer'>
            <div id='drawer-nav-list'>
                <ul>
                    <li>
                    <i className="fas fa-home" />
                    </li>
                    <li>
                    <i className="far fa-bell" />
                    </li>
                    <li>
                    <i className="fas fa-cog" />                 
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SideDrawer
