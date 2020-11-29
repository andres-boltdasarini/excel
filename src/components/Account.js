import React from "react";
import '../scss/about.scss'


class Account extends React.Component {
    state = {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    };
    login = (email, password) => {
        this.setState({
            email: email,
            password: password
        })
    }

    render() {
        let loginElement = React.createRef();
        let passwordElement = React.createRef();
        let addEmail = () => {
            let email = loginElement.current.value;
            let password = passwordElement.current.value;
            this.login(email,password);
        }
        return (
            <div className='body'>
                <h1>Вход в Samsung Account</h1>
                <input
                     ref={loginElement} value={this.state.email}>
                </input >
                <input
                    ref={passwordElement} value={this.state.password}>
                </input >
                <div className="buy" onClick={addEmail}>войти</div>

            </div>
        )
    }
}
export default Account