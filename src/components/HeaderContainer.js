import React from "react";
import Header from "@/components/Header";

class HeaderContainer extends React.Component {
    render() {
        let busket = () => {
            alert('Ваша корзина пуста.')
        }
        return (
            <div>
                <Header busket={busket}/>
            </div>

        )
    }
}

export default HeaderContainer