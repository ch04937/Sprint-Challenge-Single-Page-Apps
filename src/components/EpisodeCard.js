import React from 'react';
import { Card } from 'semantic-ui-react';
import {cardContainer} from './StyledWidgets'


export default function EpisodeCard({name, air_date, episode}) {
    return(
        <div className='cardContainer' style= {cardContainer}>
            <Card 
            header={name}
            meta={air_date}
            description={episode.name}
            
            />
        </div>            
    )
}