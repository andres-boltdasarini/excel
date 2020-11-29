import React from "react";
import '../scss/about.scss'


class Account extends React.Component {
    state = {
        posts: [
            {id: 1, message: 'test'},
            {id: 2, message: 'It',},
            {id: 3, message: 'Boom'},
            {id: 4, message: 'Day'},
        ],
        newPostText: ''
    };
    addPostAction = (text) => {
        let newPost = {
            id: 5,
            message: this.state.newPostText
        }
        this.setState({
            posts: [...this.state.posts, newPost],
            newPostText: text
        })
    }
    updateNewPost = (text) => {
        this.setState({
            newPostText: text
        })
    }

    render() {

        let postsElements =
            this.state.posts.map(p => <div>{p.message}</div>)
        let newPostElement = React.createRef();

        let onAddPost = () => {
            let text = newPostElement.current.value;
            this.addPostAction(text);
        }
        let onPostChange = () => {
            let text = newPostElement.current.value;
            this.updateNewPost(text);
        }

        return (
            <div className='body'>
                <h1>Вход в Samsung Account</h1>
                <input
                     onChange={onPostChange} ref={newPostElement}
                     value={this.state.newPostText}>
                </input >
                <div className="buy" onClick={onAddPost}>войти</div>
                <div>
                    {postsElements}
                </div>
            </div>
        )
    }
}
export default Account