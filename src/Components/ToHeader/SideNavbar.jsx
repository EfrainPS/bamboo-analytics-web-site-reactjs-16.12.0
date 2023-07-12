import React from 'react'

//Style
import './CSS/SideNavbar.css'

//Dependencies
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

const SideNavbar = props => {

    let NameClass = "o-SideNavbar"
    if (props.show) {
        NameClass = "o-SideNavbar open"
    }
    return (
        <div className={NameClass}>
            <div>
                {props.Pages.map(
                    (Pages, key) =>

                        Pages.URL === "#Contact"
                            ?
                            <li className="o-Sheet">
                                <Scrollchor to={Pages.URL}>
                                    {Pages.Page}
                                </Scrollchor>
                            </li>
                            :
                            <li className="o-Sheet">
                                <Link to={Pages.URL}>
                                    {Pages.Page}
                                </Link>
                            </li>
                )}
            </div>   
        </div>
    )
}

export default SideNavbar;