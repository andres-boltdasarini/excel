import React from "react";

import '../scss/header.scss'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";

const Header = () => {
    let busket = () => {
        alert('Ваша корзина пуста.')
    }
    return (
        <div>

            <div className="header">

                <img src='https://teliumnetwork.se/wp-content/uploads/2017/03/Font-Samsung-Logo.jpg'
                     alt='ava'/>

                <div>

                    <div className="button">
                        <AccountBoxIcon />
                    </div>

                    <div className="button">
                        <ShoppingCartIcon onClick={busket}>
                            </ShoppingCartIcon>
                    </div>

                    <div className="button">
                        <SearchIcon/>
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
                    <div className="buy">
                        Купить сейчас
                    </div>
                </div>

</div>
            <div className="bar2">
                <div className='text2'>
                    <NavLink to="/about">особенности</NavLink>
                </div>
                <div className='text2'>
                    характеристики
                </div>
                <div className='text2'>
                    <NavLink to="/support">поддержка</NavLink>
                </div>
                <div className='text2'>
                    сравнить
                </div>
            </div>
</div>

    )
}
export default Header