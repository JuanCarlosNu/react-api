import React, { Component } from 'react';
import axios from 'axios';

class PhotoList extends Component{

    constructor() {
        super();
        console.log("construtor")
    }

    componentDidMount() {
        axios.get('https://api.pexels.com/v1/curated' , {
            headers: {
                Authorization: '563492ad6f91700001000001222a1b07d24c45f1becfb732668b565a'
            }

            })
        }

    render() {
        console.log("render")
        return (

            <div>photos</div>
            );
    }
}

export default PhotoList;