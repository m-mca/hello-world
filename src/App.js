import React from 'react';
import './App.css';

import HelloWorldList from './HelloWorldList';

//credit to this tutorials https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-4-9f843c8c1ccc

//drag and drop images into moodboard/mood archives ....(archives?)
//copy image to clipboard and paste it? as well as drag and drop images?
//save from text inout the title of the board
//click to add another moodboard component
//search for specific moodboards via title
//create a list of titles to click to take you to the title
//1x5 or 2x5 or 1x3 or 2x3- one row of five or three images or two rows of five or three images

const App = () => {
  return(
    <div className="App">
      <HelloWorldList/>
    </div>
  );
}

export default App;
