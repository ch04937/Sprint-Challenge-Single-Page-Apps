import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard'
import axios from 'axios';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(results => {
        console.log('results', results.data.results)
        setEpisodes(results.data.results)
      })
      .catch(error => 
        console.log('error: ', error)
      )
  
  }, [])

  return <section className='character-list grid-view'>
      { episodes.map(episode => {
        return <EpisodeCard key={episode.id} {...episode} />;
      })}
    </section>

}