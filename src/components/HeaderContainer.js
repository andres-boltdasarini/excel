import React from "react";
import Header from "@/components/Header";
import * as axios from "axios";

class HeaderContainer extends React.Component {
    state = {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    }
    setAuthUserData = (id, email, login) => {
        this.setState({
            userId: id,
            email: email,
            login: login,
            isAuth: true

        })}
    busket = () => {
        alert('Ваша корзина пуста.')
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.setAuthUserData(id, email, login);
                }
            });
    }
    render() {

        return (
            <div>
                <Header busket={this.busket}
                        activateEditMode={this.activateEditMode}
                        isAuth={this.state.isAuth}
                        login={this.state.login}/>
            </div>

        )
    }
}

export default HeaderContainer