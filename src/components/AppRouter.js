import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';

//STEP 8: IMPORT EPISODELIST
import EpisodesList from './EpisodeList'

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route component={WelcomePage} />
      {/* <Route path="/episodes" component={} />
        STEP 9: ADD ROUTE */}
      <Route path ='episodes' component = {EpisodesList} />
    </Switch>
  </div>

}
