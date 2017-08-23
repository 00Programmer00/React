import React, { Component } from 'react';
import axios from 'axios';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {person: []};
    }

    componentDidMount() {
        this.UserList();
    }

    UserList() {
        return axios.get('https://jsonplaceholder.typicode.com/users', )
            .then( (response) => {
                console.log(response.data);
                this.setState({person: response.data});
            });
    }

    render() {
        const persons = this.state.person.map((item, i) => {
            return <div key={i} className="container">
                <ul className="list-group" id="users">
                    <li className="list-group-item">{item.name}</li>
                </ul>
            </div>
        });

        return <div id="layout-content" className="layout-content-wrapper">
            <div className="panel-list">{ persons }</div>
        </div>
    }
}