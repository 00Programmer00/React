import React, { Component } from 'react';
import axios from 'axios';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '50%',
    height: '84%',
    margin: '0 0 0 30px'
};

export class MapContainer extends Component {
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
        const markers = this.state.person.map((item, i) => {
            return <Marker key={i}
                    title={item.name}
                    position={{lat: item.address.geo.lat, lng: item.address.geo.lng}} />
        });

        return (
            <Map google={this.props.google} initialCenter={{lat: 32.885353,lng: 13.180161}} zoom={4} style={style}>
                {markers}
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>w</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDCrDrJz3xHuWwZ86WssYdlILvvKL9JARc'
})(MapContainer);