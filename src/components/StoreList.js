import React from 'react';
import Store from './Store'


class StoreList extends React.Component{

  renderStores = () => {
    return this.props.stores.map(store => {
      return <Store
        key={store.id}
        store={store}/>
    })
  }

  render(){
    // console.log('Search Props', this.props)
    return (
      <div className="storeList">
        {this.renderStores()}
      </div>
    );
  }

}
export default StoreList;
