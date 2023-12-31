import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { moviesRef } from '../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useParams } from 'react-router-dom'
import { Bars, ThreeCircles } from 'react-loader-spinner'
import Reviews from './Reviews'

const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        title: "",
        year: "",
        image: "",
        description: "",
        rating: 0,
        rated: 0
    });
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        async function getData() {
            const _doc = doc(db, "movies", id);
            const _data = await getDoc(_doc);
            setData(_data.data());
            setLoading(false)
        }
        getData();
    }, [])

    return (
        <div className='p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center'>
            {
                loading ? <div className='h-96 flex w-full justify-center items-center'><ThreeCircles height={30} color='white' /></div> :
                    <>
                        <img className='h-96 block md:sticky top-24' src={data.image} alt="" />

                        <div className='ml-0 md:ml-4 w-full md:w-1/2'>
                            <h1 className='text-3xl font-bold text-gray-300'>{data.title} <span className='text-xl'>{data.year}</span></h1>

                            <ReactStars size={20} value={data.rating/data.rated} half={true} edit={false} />

                            <p className='mt-3'>{data.description}</p>

                            <Reviews id ={id} prevRating = {data.rating} userRated = {data.rated} />
                        </div>
                    </>
            }

        </div>
    )
}

export default Detail