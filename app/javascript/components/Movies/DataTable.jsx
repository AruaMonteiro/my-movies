import React, {useState, useEffect} from 'react'

const DataTable = ({movies}) => {
  return (
    <table className="w-3/4 bg-white mx-auto rounded-lg overflow-hidden shadow-lg my-5">
      <thead className="text-white">
        <tr className="bg-blue-400 ">
          <th className="p-3 text-left">Nome</th>
          <th className="p-3 text-left">Diretor</th>
          <th className="p-3 text-left">Ano</th>
          <th className="p-3 text-left">Nota</th>
          <th className="p-3 text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => {
          return (<tr className="hover:bg-gray-100" key={movie.id}>
            <td className="border-grey-light border p-3">{movie.attributes.name}</td>
            <td className="border-grey-light border p-3">{movie.attributes.director}</td>
            <td className="border-grey-light border p-3">{movie.attributes.year}</td>
            <td className="border-grey-light border p-3">{movie.attributes.rate}</td>
            <td className="border-grey-light border p-3 flex justify-center">
              <a href="#" className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 hover:text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
              <a href="#" className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 hover:text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 hover:text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </a>
            </td>
          </tr>)
        })}
      </tbody>
    </table>
  )
}

export default DataTable
