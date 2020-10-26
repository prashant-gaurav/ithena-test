import React from 'react';
import './styles.css'
import ReactPlayer from 'react-player/lazy'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Cards = ({data}) => {
    const {name, details, wallImg, video, rating} = data
    return (
        <Popup trigger={<div className='card-md-4'>
            <div className='img' style={{
                backgroundImage: `url('${wallImg}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fafafa',
            }}>
            </div>
            <div className='fe-details'>
                <h2>
                    <em>{(name).split(' ')[0]}</em> {(name).substr((name).indexOf(' ') + 1)} {rating}
                </h2>
                <p>{details}</p>
            </div>

        </div>} position="center center">
            <ReactPlayer playIcon={true} url={video}/>
        </Popup>

    );
}

export default Cards;
