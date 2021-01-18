import { useState, useEffect, useRef } from 'react';
import './styles/App.scss';
import Hero from './layout-components/Hero';
import Projects from './layout-components/Projects';
import NavBar from './layout-components/NavBar';

import { useInView, InView } from 'react-intersection-observer';
import Contact from './layout-components/Contact';

import { useSelector } from 'react-redux';



let heroFocus = true;
let projectFocus = false;
let contactFocus = false;

export default function App() {
  const theme = useSelector(state => state.theme);

  const { heroRef } = useInView();
  const { projectRef } = useInView({ threshold: 0.5 });

  const [currFocus, setCurrFocus] = useState('hero');

  function changeFocus(newFocus, isInView) {
    console.log("CHANFEFEAC", newFocus, isInView, "CURR>>>", currFocus);
    if (newFocus === 'hero') heroFocus = isInView;
    else if (newFocus === 'projects') projectFocus = isInView;
    else if (newFocus === 'contact') contactFocus = isInView;

    if (isInView) {
      setCurrFocus(newFocus);
    }
  }


  return (
    <div className={`main ${theme}`}>
      <NavBar currFocus={currFocus} heroFocus={heroFocus} projectFocus={projectFocus} contactFocus={contactFocus} />
      <div className="body">

        <InView as="div" onChange={(inView, entry) => changeFocus('hero', inView)}>
          <Hero ref={heroRef} />
        </InView>

        <InView as="div" onChange={(inView, entry) => changeFocus('projects', inView)}>
          <Projects ref={projectRef} />
        </InView>

        <InView as="div" onChange={(inView, entry) => changeFocus('contact', inView)}>
          <Contact />
        </InView>

      </div>
    </div>
  );
}

