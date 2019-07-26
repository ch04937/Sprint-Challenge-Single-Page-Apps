import React from 'react'
import { Grid, Card } from 'semantic-ui-react'


//STEP 5: WHAT ARE THE API'S PARAMATERS
export default function CharacterCard ({ name, image, location, origin, species, status}) {
  return (
    //STEP 6: USE THE PARAMATERS
  <div>
      {name}
      {status}
      {species}
      {image}
      {location.name}
      {origin.name}
  </div>
  )
}
