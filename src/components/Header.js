import React from "react";

import '../scss/header.scss'
import DeleteIcon from '@material-ui/icons/Delete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShopIcon from '@material-ui/icons/Shop';

const Header = () => {
    return (
        <div>

            <div className="header">

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
            <div className="bar">
                <div className='text'>
                    Galaxy S20
                </div>
                <div className='text'>
                <div className='text'>
                    69 999 p
                </div>
                    <div href="#" className="buy">
                        Купить сейчас
                    </div>
                </div>

</div>
            <div className="bar2">
                <div className='text2'>
                    особенности
                </div>
                <div className='text2'>
                    характеристики
                </div>
                <div className='text2'>
                    поддержка
                </div>
                <div className='text2'>
                    сравнить
                </div>
            </div>
</div>

    )
}
export default Header