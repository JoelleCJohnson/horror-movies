import { useEffect, useState } from "react"

function SingleMovieComponent(props) {
    return (
        <main className="main-text">
            <h2 className="heading-text">{props.title}</h2>
            <img className="movie-pic" src={props.photo} />
        </main>
    )
}

export default function Home() {
    const [horrorMovies, setHorrorMovies] = useState()

    useEffect(() => {
        fetch('https://api.sampleapis.com/movies/horror')
            .then(res => res.json())
            .then(data => setHorrorMovies(data))
            .catch(err => console.error(err))
    }, [])


    return (
        <>
            {horrorMovies &&
                horrorMovies.map((singleMovie) => {
                    return (
                        <SingleMovieComponent photo={singleMovie.posterURL} title={singleMovie.title} />
                    )
                }
                )
            }
        </>
    )
}