import React from 'react';


class SearchBar extends React.Component{


  render(){
    console.log('Search Bar props', this.props)
    return (
      <div className="searchBar">

        <strong>Filter by</strong>
        <div className="filter-btns-container">
          <button
            value=""
            onClick={this.props.filterStore}
            >View All
          </button>
          <button
            value="Kung Fu Tea 功夫茶"
            onClick={this.props.filterStore}
            >KungFu Tea
          </button>
          <button
            value="Gong Cha"
            onClick={this.props.filterStore}
            >Gong Cha
          </button>
          <button
            value="Vivi Bubble Tea"
            onClick={this.props.filterStore}
          >Vivi Bubble Tea
          </button>
          <button
            value="CoCo Fresh Tea & Juice"
            onClick={this.props.filterStore}
          >Coco
          </button>
          <button
            value="Boba Guys"
            onClick={this.props.filterStore}
          >Boba Guys
          </button>
        </div>
      </div>
    );
  }

}
export default SearchBar;
