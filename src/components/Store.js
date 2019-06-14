import React from 'react';


class Store extends React.Component{


  render(){
    console.log('Store Props', this.props)
    // console.log('Store Props', this.props.store)
    return (
      <div className="store">
        <h4>{this.props.store.name}</h4>
        <p>{this.props.store.address}</p>

      </div>
    );
  }

}
export default Store;
