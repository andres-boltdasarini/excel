import React from "react";
import '../scss/header.scss'
import '../scss/index.scss'
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const Header = () => {
    return (
        <div className="excel">

            <div className="excel__header">

                <img src='https://teliumnetwork.se/wp-content/uploads/2017/03/Font-Samsung-Logo.jpg'
                     alt='ava'/>

                <div>

                    <div className="button">
                        <DeleteIcon />
                    </div>

                    <div className="button">
                        <ExitToAppIcon/>
                    </div>

                </div>

            </div>


        </div>

    )
}
export default Header