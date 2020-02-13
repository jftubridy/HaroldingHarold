import React from 'react';
import Header from './Header';
import Stories from './Stories';
import { Switch, Route } from 'react-router-dom';
import ViewStories from './ViewStories';
import Error404 from './Error404';
import AboutUs from './AboutUs';
import Home from './Home';
import StorySuggestion from './StorySuggestion';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/AboutUs' component={AboutUs} /> 
        <Route path='/ViewStories' component={ViewStories} />
        <Route exact path='/StorySuggestion' component={StorySuggestion} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}
//using exact above helps protect us from accidently loading too many things
export default App;
