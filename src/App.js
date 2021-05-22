import React, { Component } from "react";
import Profile from './components/Profile'
import Navigation from './components/Navigation'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Jane Roe",
        bio: "Jane Roe  opens the line of communication between clients, customers, and businesses to get projects done. With over 10 years in both public and private sectors, Jane has experience in management consultation, team building, professional development, strategic implementation, and company collaboration. ",
        imgSrc: "/jane.jpg",
        profession: "Project Manager",
      },
      show: false,
    };
  }
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className='App'>
      <Navigation/>
      <div className="container">
        <div className="row m-3">
          <div className="col-md-3 ml-md-auto">
            <button className="btn btn-outline-primary" onClick={this.toggleShow}>
              Show Profile
            </button>
            {this.state.show && (<Profile imgSrc={this.state.Person.imgSrc}
                                            fullName={this.state.Person.fullName}
                                            bio={this.state.Person.bio}
                                            profession={this.state.Person.profession}
                                            />)}
          </div>
          <div className="col-md-3 ml-md-auto">
          </div>
        </div>
      </div>
      <footer>&copy; 2021</footer>
      </div>
    );
  }
}
