import React from 'react';

export default function EpisodeCard({name, air_date, episode, id}) {
    return(
        <div>
        {name}
        {air_date}
        {episode}
        {id}
        </div>
    )
}