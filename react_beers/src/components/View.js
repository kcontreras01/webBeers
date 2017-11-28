import React, { Component } from 'react';


class View extends Component {

  constructor(props) {
    super(props);

    this.getResults = this.getResults.bind(this);
  }

  getResults() {
    return (
      this.props.dataSearch.map( e => {
        let showImg = '';
        if (e.show.image === null) {
          showImg = './No_image.png'
        } else {
          showImg = e.show.image.original
        }
        return (
          <div className="shows" key={e.show.id}>
            <img src={showImg} alt={`image${e.show.id}`} />
            <p>{e.show.name}</p>
          </div>
        )
      })
    )
  }

  render() {
    return(
      <div className="all">
        {this.getResults()}
      </div>
    )
  }
}

export default View;