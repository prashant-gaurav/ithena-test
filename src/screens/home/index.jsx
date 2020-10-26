import React from 'react';
import './styles.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {viewMovies} from '../../api/movies'
import Card from '../../components/home/Card'
import {Link} from "react-router-dom";

const Home = () => {
    const [movies, setMovies] = React.useState(null);
    React.useEffect(() => {
        getMoviesList()
    }, [])
    const getMoviesList = async () => {
        await viewMovies().then(d => {
            const {success, data, message} = d
            if (success) {
                setMovies(data)
            } else {
                alert(message)
            }
        })
    }


    return (
        <div className='main'>
            <Header/>
            <AwesomeSlider style={{height: '90vh',}}>
                {movies && movies.map((d, i) =>
                    <div key={i} style={{
                        backgroundImage: `url(${d.wallImg})`,
                        backgroundPosition: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    }}>
                    </div>
                )}
            </AwesomeSlider>
            <div style={{height: '10vh', width: '100vw'}}/>
            <div className='rows'>
                {movies && movies.map((d, i) =>
                    <Card key={i} data={d}/>
                )}
            </div>
            <Link className='add-button' to='/add'><p>+</p></Link>
            <Footer/>
        </div>
    );
}

export default Home;
