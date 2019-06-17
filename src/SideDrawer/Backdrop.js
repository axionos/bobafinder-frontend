import React from 'react';
import './Backdrop.css'

class Backdrop extends React.Component {
  render(){
    console.log('backdrop props', this.props)
    return(
      <div
        className="backdrop"
        onClick={this.props.backdropClickHandler}
      />
    )
  }
}

export default Backdrop;
