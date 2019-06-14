import React from 'react';


class SearchBar extends React.Component{


  render(){

    return (
      <div className="searchBar">

        SEARCH BAR GOES HERE
        <div className="filter-btns-container">
          <button>KungFu Tea</button>
          <button>Gong Cha</button>
          <button>Vivi Bubble Tea</button>
          <button>Coco</button>
          <button>Boba Guys</button>
        </div>
      </div>
    );
  }

}
export default SearchBar;
