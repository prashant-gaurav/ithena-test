import React from 'react';
import './styles.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {addMovies} from '../../api/movies'
import {useHistory} from "react-router-dom";

const AddMovies = () => {
    const history = useHistory();
    const [name, setName] = React.useState(null);
    const [details, setDetails] = React.useState(null);
    const [wallImg, setWallImg] = React.useState(null);
    const [video, setVideo] = React.useState(null);
    const [rating, setRating] = React.useState(null)
    const addMoviesTapped = async () => {
        await addMovies(name, details, wallImg, video, rating).then(res => {
            const {success, message} = res
            if (success) {
                setTimeout(() => history.push('/home')
                    , 100);
            } else {
                alert(message)
            }
        })
    }

    return (
        <div className='main'>
            <Header/>
            <form>
                <input placeholder='Movies Name' type='text' onChange={e => setName(e.target.value)} value={name}/>
                <input placeholder='Movies Details' type='text' onChange={e => setDetails(e.target.value)} value={details}/>
                <input placeholder='Movies Ratings' type='text' onChange={e => setRating(e.target.value)} value={rating}/>
                <input placeholder='Movies Wall Image' type='file' onChange={e => setWallImg(e.target.value)} value={wallImg}/>
                <input placeholder='Movies  Link' type='url' onChange={e => setVideo(e.target.value)} value={video}/>
                <a className='btn-primary' onClick={addMoviesTapped}>Create</a>
            </form>
            <Footer/>
        </div>
    );
}

export default AddMovies;
