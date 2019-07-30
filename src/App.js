import React from 'react';
import Tweet from './Tweet'

function App(){


  return(
    <div className="app">
      <Tweet name="James Hotblack" message="I am the one and only" likes="3"/>
      <Tweet name="Stephen Fry" message="I am the one and only" likes="30,000"/>
      <Tweet name="Sigmund Freud" message="I am the one and only" likes="50,000"/>
      <Tweet name="Karl Marx" message="I am the one and only" likes="1,000,000"/>
    </div>
  );
}

export default App;