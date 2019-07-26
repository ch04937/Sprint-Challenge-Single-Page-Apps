import React from 'react'
import { Card } from 'semantic-ui-react';


export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
  <div>
    <Card 
    header= {name}
    meta={type}
    description={dimension}
    description={residents.name}
    />
  </div>
  )
}
