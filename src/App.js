import { useState, useEffect, useRef } from 'react';
import './styles/App.scss';
import Hero from './layout-components/Hero';
import Projects from './layout-components/Projects';
import NavBar from './layout-components/NavBar';

import { useInView, InView } from 'react-intersection-observer';
import Contact from './layout-components/Contact';

import { useSelector } from 'react-redux';
import focusToggler from './helper-functions/FocusToggler';

import { instagram } from './fonts/feather/instagram.svg';

export default function App() {
  const theme = useSelector(state => state.theme);

  const { heroRef } = useInView();
  const { projectRef } = useInView();

  const [currFocus, setCurrFocus] = useState('hero');

  function changeFocus(newFocus, isInView) {
    setCurrFocus(focusToggler(newFocus, isInView));
  }

  function goToContact() {

  }


  return (
    <div className={`main ${theme}`}>

      <NavBar currFocus={currFocus} />
      
      <div className="body">
        
        <InView as="div" onChange={(inView, entry) => changeFocus('hero', inView)}>
          <Hero ref={heroRef} />
        </InView>
        
        <InView as="div" onChange={(inView, entry) => changeFocus('projects', inView)}>
          <Projects ref={projectRef} />
        </InView>

        <InView as="div" onChange={(inView, entry) => changeFocus('contact', inView)}>
          <Contact theme={theme}/>
        </InView>

      </div>
    </div>
  );
}

