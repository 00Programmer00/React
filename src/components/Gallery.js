import React, { Component } from 'react';
import axios from 'axios';
import Lightbox from 'react-image-lightbox';

export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {photo: [],photoIndex: 0,
            isOpen: false};
    }

    componentDidMount() {
        this.UserList();
        this.albums();
    }

    UserList() {


        return axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1&albumId=2', )
            .then( (response) => {
                console.log(response.data);
                this.setState({photo: response.data});
            });
    }

    albums() {
        return axios.get('https://jsonplaceholder.typicode.com/albums', )
            .then( (response) => {
                console.log(response.data);
                this.setState({albums: response.data});
            });

    }


    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;
        const images = [

        ];
        const photos = this.state.photo.map((item, i) => {
            images.push(item.url);

            return <div className="col-lg-3 images">
                <button className="btn btn-primary preview"
                    type="button"
                    onClick={() => this.setState({ isOpen: true })}
                >
                    Preview
                </button>
                <img src={item.thumbnailUrl} alt={item.title} key={i} className="col-lg-10 "/>
            </div>


        });

        return <div>
            <div>
                {photos}
            </div>
            {isOpen &&
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() => this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                })}
                onMoveNextRequest={() => this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                })}
            />
            }
        </div>
    }
}
