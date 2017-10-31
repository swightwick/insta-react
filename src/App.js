import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  componentDidMount() {
    var th = this;
      axios.get('https://igpi.ga/image.src/media/')
        .then(function(result) {    
          th.setState({
            data: result.data.items
          });
      })
  } 
    
  render() {
    return (
      <div>   
        <div className="container">        
          <div className="columns">
            {this.state.data.map(function(item) {
              return (
                <div key={item.url} className="column is-one-quarter">
                  <a href={item.link}>
                    <img src={item.images.standard_resolution.url}/>
                  </a>
                  <span>{item.caption.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

}



class App extends React.Component {
  render() {
    return (
      <div>
        <h1>image.src</h1>
          <Image/>
        </div>
    );
  }
}


export default App;