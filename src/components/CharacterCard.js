import React from 'react'
import { Card } from 'semantic-ui-react';
// 
//STEP 5: WHAT ARE THE API'S PARAMATERS
export default function CharacterCard ({ name, image, location, origin, species, status}) {
  return (
    //STEP 6: USE THE PARAMATERS
  <div>
    <Card 
      header={name}
      description={status}
      meta={species}
      image = {image}
      meta={location.name}
      description={origin.name}
      />
  </div>
  )
}
