import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard'
import axios from 'axios';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
        console.log('res', res.data.results)
        setEpisodes(res.data.results)
      })
      .catch(error => 
        console.log('error: ', error)
      )
  
  }, [])

  return (
  <div>
    { episodes.map(episode => {
     return <EpisodeCard key={episode.id} {...episode} />;
    })}
  </div>)

}