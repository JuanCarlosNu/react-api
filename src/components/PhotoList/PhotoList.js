import React, { Component } from 'react';

class PhotoList extends Component{

    constructor() {
        super();
        console.log("construtor")
    }

    componentDidMount() {
        console.log("didMount");
    }

    render() {
        console.log("render")
        return (

            <div>photos</div>
            );
    }
}

export default PhotoList;