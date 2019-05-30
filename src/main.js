import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Blog from './blog';
import Resume from './resume';
import ContactForm from './contactForm';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/blog" component={Blog} />
    <Route path="/contact" component={Contact} />
    <Route path="/contactForm" component={ContactForm} />
  </Switch>
)

export default Main;
