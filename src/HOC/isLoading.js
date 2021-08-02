import React, {useState} from 'react';
import Loader from './loader.gif';
import '../App.css';

const AnimationLoader = (props) => {
  return (
    <>
      <div className="parentDisable">
        <div className="overlay-box" >
          <div className="loader-icon">
            <img src={Loader} style={{width: "200px", height: "200px"}}/>
          </div>
        </div>
      </div>
    </>
  )
}
export const isLoading = (WrappedComponent, loadingMessage) => {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<WrappedComponent {...props} />);
    return (<AnimationLoader/>);
  }
}