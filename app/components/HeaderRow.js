import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom'

class HeaderRow extends Component {

  /**
   * Props contains:
   * tournamentName,
   * loginUser 
   * boardsPlayed
   * boardsAll
   * roundsPLayed
   * roundAll
   * @param {*} props 
   */
  constructor(props) {
      super(props);
  }

  static propTypes = {
    title: PropTypes.string.isRequired
  }



  handleClick = (event) => {
    console.log(event);
  }

  render() {

    return (
      <div className="navbar-header">
         <ul className="nav navbar-nav navbar-right">
            <li>this.props.tournamentName</li>
            <li>Boards: this.props.boardsPlayed / this.props.boardsAll</li>
            <li>Rounds: this.props.roundsPLayed / this.props.roundAll </li>              
         </ul>
          <a className="navbar-brand" href="#">this.props.loginUser</a>  
      </div>
    );
  }
}

export default HeaderRow;
