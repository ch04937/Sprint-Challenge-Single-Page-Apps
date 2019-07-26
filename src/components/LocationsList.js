import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationsList() {
    const [locations, setLocations] = useState([]);


    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/location/')
        .then(res => {
          console.log('res', res.data.results)
          setLocations(res.data.results)
        })
        .catch(error => 
            console.log('error: ', error)
          )      
    }, []);
  
    return (
    <div>
        { locations.map(location => {
          return <LocationCard key={location.id} {...location} />;
        })}
      </div>)
}
