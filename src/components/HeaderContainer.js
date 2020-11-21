import React from "react";
import Header from "@/components/Header";

class HeaderContainer extends React.Component {
    state = {
        isAuth: false
    }
    activateEditMode = () => {
        this.setState({
            isAuth: true
        })}
    busket = () => {
        alert('Ваша корзина пуста.')
    }
    render() {

        return (
            <div>
                <Header busket={this.busket}
                        activateEditMode={this.activateEditMode}
                        isAuth={this.state.isAuth}/>
            </div>

        )
    }
}

export default HeaderContainer