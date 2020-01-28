import React from 'react';
import {connect} from 'react-redux';
import { activateAwesomeness, closeAwesomeness } from './redux'

function App(props) {
  return (
    <div className="App">
      <h1>{props.awesomeness.title || "Hello World!"}</h1>

      {props.awesomeness.title ? (
        <button onClick={props.closeAwesomeness}>close awesomeness</button>
      ): (
        <button
          onClick={() => 
            props.activateAwesomeness({ title: "I am super Awesome!!!"})
          }
        >
          Activate awesomeness
        </button>

      )}
    </div>
  );
}

const mapStateToProps = state => ({
  awesomeness: state.awesomeness
});

const mapDispatchToProps = {
  activateAwesomeness,
  closeAwesomeness  
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
