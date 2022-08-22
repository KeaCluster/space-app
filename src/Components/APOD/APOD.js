import React, {useEffect, useState} from 'react';
import './APOD.css';

const dataURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";


const APOD = () => {
    const [data, setData] = useState([]);


    const fetchData = () => {
        fetch(dataURL)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='apod-container'>
            <h1 className="apod-title">{data.title}</h1>
            <h2 className="apod-date">{data.date}</h2>
            <p className="apod-explanation">{data.explanation}</p>
        </div>
    )

}

export default APOD;