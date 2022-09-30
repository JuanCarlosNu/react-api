import React from 'react';

import './PhotoItem.css'

const PhotoItem = ({ photo }) => {
    console.log(photo)
    return (  
        <div className="photo__item">
            <div className='photo__img--containter'>
                <img className='photo__img' src={photo.src.landscape} />
            </div>
            <div className='photo__buttons'>
                <a href={photo.photographer.url} className='btn'>{photo.photographer}</a>
                <a href={photo.url} className='btn'>
                    view image
                    </a> 
            </div>

        </div>
        
    );
}
 
export default PhotoItem;
