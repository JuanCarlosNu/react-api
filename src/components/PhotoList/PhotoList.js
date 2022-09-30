import React, { Component } from 'react';
import axios from 'axios';
import PhotoItem from '../PhotoItem/PhotoItem';

class PhotoList extends Component{

    constructor() {
        super();
        this.state = {
            photos:[]
        }
    }

    async componentDidMount() {
       
       const data = await axios.get('https://api.pexels.com/v1/curated' , {
            headers: {
                Authorization: '563492ad6f91700001000001222a1b07d24c45f1becfb732668b565a'
            }

            });

           // console.log(data.data.photos);
            this.setState({
                photos: data.data.photos 
            }

            )
        }

    render() {
        console.log(this.state.photos)
        return (
            <div>
                <p>We have{this.state.photos.length} photos</p>
                {
                    this.state.photos.map( photo => <PhotoItem key={photo.id} photo={photo}/>)
                }
            </div>

            );
    }
}

export default PhotoList;