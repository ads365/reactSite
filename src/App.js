import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Layout, Content} from 'react-mdl';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard'
import ProjectDetails from './components/projects/projectDetails'
import BlogDetails from './components/blogs/blogDetails'
import SignIn from './components/auth/signIn'
import SignUp from './components/auth/signUp'
import CreateProject from './components/projects/createProject'
import CreateBlog from './components/blogs/createBlog'
import Landing from './components/other/landingpage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Layout>
            <Navbar />
            <Content>
              <div className="page-content">
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route path='/dashboard' component={Dashboard} />
                  <Route path='/project/:id' component={ProjectDetails} />
                  <Route path='/blog/:id' component={BlogDetails} />
                  <Route path='/signin' component={SignIn} />
                  <Route path='/signup' component={SignUp} />
                  <Route path='/createProject' component={CreateProject} />
                  <Route path='/createBlog' component={CreateBlog} />
                </Switch>
              </div>
            </Content>
          </Layout>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
