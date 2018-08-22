import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import History from '../History/History';
import Contact from '../Contact/Contact';


class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>

        <Link to="/about" className="subnav_links"><h3>About</h3></Link>  
        <Link to="/about/history" className="subnav_links"><h3>History</h3></Link> 
        <Link to="/about/contact" className="subnav_links"><h3>Contact</h3></Link>  
          
        </div>
        <div className="box">
          <Switch>
            <Route path="/about/history" component={ History } ></Route>
            <Route path="/about/contact" component={ Contact } ></Route>
            <Route path="/about" render={ () => (
                <div>
                  <h1>About the University</h1>
                  <p>
                    consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac blandit metus. Suspendisse potenti. Praesent elementum diam non orci cursus rutrum. Pellentesque condimentum ultrices dignissim.
                  </p>
                </div>
              ) } >
            </Route>
          </Switch>
          

        </div>
      </div>
    )
  }
}

export default About

