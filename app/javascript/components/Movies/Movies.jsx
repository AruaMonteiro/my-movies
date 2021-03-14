import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DataTable from './DataTable';

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [query, SetQuery] = useState("")

  useEffect(() => {
    axios.get('/api/v1/movies')
    .then(resp => setMovies(resp.data.data))
    .catch(resp => console.log(resp))

  }, [])

  function search(movie) {
    return movie.filter(movie => movie.attributes.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
  }

  return (
    <div className="container mx-auto text-center p-10 text-gray-800">
      <h1 className="text-5xl font-bold">Meus Filmes</h1>
      <div className="mt-12"><input className="border-gray-400 block py-3 px-4 w-2/4 rounded focus:outline-none focus:border-blue-400 text-gray-600 mx-auto" type="text" value={query} onChange={(event) => SetQuery(event.target.value)} placeholder="Procure um filme"/></div>
      <div className="mt-8">
        {movies.length>0 ? <DataTable movies={search(movies)} /> : <div></div>}
      </div>
    </div>
  )
}

export default Movies