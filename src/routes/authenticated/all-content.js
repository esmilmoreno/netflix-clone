import FetuaturedSection from "../../components/authenticated/featured-section"
import { movies } from "../../api"

export default function AllContent() {
  // const [movies, setMovies] = useState([])
  // const [genres, setGenres] = useState([])
  // const [featuredMovie, setFeaturedMovie] = useState(null)
  
  // useEffect( () => {
  //   const getData = async () => {
  //     try {
  //       const resMovies = await api.get('/movies')
  //       setMovies(resMovies.data.results)
  
  //       const resGenre = await api.get('genres')
  //       setGenres(resGenre.data.results)
        
  //       setFeaturedMovie(resMovies.data.results[Math.floor(Math.random() * resMovies.data.results.length -1)])
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   getData()
  // }, [])

  return (
    <div>
      <FetuaturedSection movie={movies[0]} />
      
      {/* {genres.map( (genre, ind) => {
        const genreMovies = movies.filter( (movie => {
          return movie.genres.find( cr => cr.uuid === genre.uuid)
        }))
        
        return genreMovies.length > 0 && <div key={ind}>
          <h2>{genre.name}</h2>
          {genreMovies.map( (movie, ind) => {
            return <div key={ind}>{movie.title}</div>
          })}
        </div>
      })} */}
    </div>
  )
}