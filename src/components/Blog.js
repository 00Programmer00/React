import React, { Component } from 'react';
import axios from 'axios';

export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {post: []};
    }

    componentDidMount() {
        this.PostsList();
    }

    PostsList() {
        return axios.get('https://jsonplaceholder.typicode.com/posts', )
            .then( (response) => {
                this.setState({post: response.data});
            });
    }

    render() {
        const posts = this.state.post.map((post, i) => {
            return <div key={i} className="container">
                <ul className="list-group" id="posts">
                    <li className="list-group-item">{post.id} - {post.title}
                        <hr/>
                        {post.body}
                    </li>
                </ul>
            </div>
        });

        return <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{ posts }</div>
            </div>
    }
}

