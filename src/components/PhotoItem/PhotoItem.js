import React from 'react';

const PhotoItem = ({ photo }) => {
    console.log(photo)
    return (  
        <div className="photo__item">
            <div className='photo__img--containter'>
                <img className='photo__img' />
            </div>
            <div className='photo__buttons'>
                <a href='' className='btn'></a>
                <a href='' className='btn'></a> 
            </div>

        </div>
        
    );
}
 
export default PhotoItem;
