import "./App.css";
import React, { Component } from "react";
import Profile from './components/Profile'
import Navigation from './components/Navigation'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Jane Row",
        bio: "Jane Row  opens the line of communication between clients, customers, and businesses to get projects done. With over 20 years in both public and private sectors, Jane has experience in management consultation, team building, professional development, strategic implementation, and company collaboration. ",
        imgSrc: "/jane.jpg",
        profession: "Project Manager",
      },
      shows: false,
      seconds: 1,
    };
  }
  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

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
            {this.state.shows && (<Profile imgSrc={this.state.Person.imgSrc}
                                            fullName={this.state.Person.fullName}
                                            bio={this.state.Person.bio}
                                            profession={this.state.Person.profession}
                                            seconds={this.state.seconds}/>)}
          </div>
          <div className="col-md-3 ml-md-auto"></div>
        </div>
      </div>
      <footer>&copy; 2021</footer>
      </div>
    );
  }
}
