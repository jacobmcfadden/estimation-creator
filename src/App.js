import React, {useEffect, useState} from 'react';
import routes from './routing/routes';
import useEventListener from './hooks/useEventListener';
import './App.scss';

const App = (props) => {
  const [backgroundColor, setBackgroundColor] = useState('bg-light');
  const [navExpanded, setNavExpanded] = useState(false);

  const handleToggle = (e) => {
    setNavExpanded(!navExpanded);
  }
  useEffect(()=>{
    setBackgroundColor('bg-trans');

  }, [navExpanded])  

  const listenScrollEvent = e => {
      if (window.scrollY > 1 || navExpanded === true) {
          setBackgroundColor('bg-dark');
      } else {
          setBackgroundColor('bg-trans');
      }
  }    

  useEventListener('scroll', listenScrollEvent)

  return (
    <div className="App">
      {/* <Nav backgroundColor={backgroundColor} handleToggle={handleToggle} setBackground={setBackgroundColor} navExpanded={navExpanded}/> */}
      {routes}
    </div>
  );
}

export default App;
