import React, { useEffect, useState } from 'react';

//STEP 1: IMPORT AXIOS:
import axios from 'axios';

//STEP 6: IMPORT CARDS
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  //STEP 2: USE USESTATE WITH AND EMPTY ARRAY:
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    //STEP 3: USE AXIOS: 
    axios
    .get(
      'https://rickandmortyapi.com/api/character/'
    )
    //STEP 4: THEN RESPONSE AND CONSOLE.LOG TO SEE THE ARRAY RESULT
    .then(response => {
      console.log('response', response.data.results);
      setCharacters(characters)
    })
    .catch(error => 
      console.log('error: ', error)
    )
  }, []);

  return <section className='character-list grid-view'>

      {/* STEP 7: INVOKE CHARACTERCARD */
          characters.map(character => {
            return (
              <CharacterCard key={character.id} {...character}/>
            )
          })}
    </section>

}
