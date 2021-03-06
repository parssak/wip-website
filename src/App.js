import { useEffect, useState } from 'react';
import Hero from './layout-components/Hero';
import Projects from './layout-components/Projects';
import NavBar from './layout-components/NavBar';

import { useInView, InView } from 'react-intersection-observer';
import Contact from './layout-components/Contact';

import { useSelector } from 'react-redux';
import focusToggler from './helper-functions/FocusToggler';
import UserThemeListener from './helper-functions/UserThemeListener';

import './styles/App.scss';
import Footer from './minor-components/Footer';
import Popup from './minor-components/Popup';

import DopeBackground from './minor-components/DopeBackground';

function noScroll() {
  window.scrollTo(0, 0);
}

export default function App() {
  const theme = useSelector(state => state.theme);

  const { heroRef } = useInView();
  const { projectRef } = useInView();

  const [currFocus, setCurrFocus] = useState('hero');
  const [currImage, setCurrImage] = useState(null);

  function changeFocus(newFocus, isInView) {
    setCurrFocus(focusToggler(newFocus, isInView));
  }

  function selectedImage(src) {
    setCurrImage(src);
  }

  function deselectImage() {
    setCurrImage(null);
  }

  function restoreScroll() {
    window.removeEventListener('scroll', noScroll);
  }

  useEffect(() => {
    window.addEventListener('scroll', noScroll);
    // Prevents window from moving on touch on older browsers.
    window.addEventListener('touchmove', function (event) {
      event.preventDefault()
    }, false)
    setTimeout(() => restoreScroll(), 1000)
  }, [])
  return (
    <>
      <DopeBackground />
      <div className={`main ${theme}`}>
        <div onAnimationEnd={e => e.animationName === 'intro' && restoreScroll()} className={`splash noselect ${theme}`} aria-hidden="true">Hi, I'm Parssa <span className="wave">👋</span></div>

        <NavBar currFocus={currFocus} />
        <div className="body">
          {currImage !== null && <Popup currImage={currImage} removeImage={deselectImage} />}

          <UserThemeListener />

          <InView as="div" onChange={(inView, entry) => changeFocus('hero', inView)}>
            <Hero ref={heroRef} />
          </InView>

          <InView as="div" onChange={(inView, entry) => changeFocus('projects', inView)}>
            <Projects ref={projectRef} selectedImage={selectedImage} />
          </InView>

          <InView as="div" onChange={(inView, entry) => changeFocus('contact', inView)}>
            <Contact theme={theme} />
          </InView>
        </div>
        <Footer />
      </div>
    </>
  );
}

