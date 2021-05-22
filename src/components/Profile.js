import React, { Component } from "react";
import PropTypes from "prop-types";

class Profile extends Component {
    constructor(){
        super();
        this.state={
            seconds: 0
        }
    };
    componentDidMount() {
    this.timer = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
    }
    componentDidUpdate() {
    console.log('componentDidUpdate()');
    }

    componentWillUnmount() {
    clearInterval(this.timer);
    }
    render() {
    return (
        <div>
        <div className="card justify-content-center" style={{ width: "18rem" }}>
            <img src={this.props.imgSrc} className="card-img-top" alt="profile" />
            <div className="card-body">
            <h5 className="card-title">{this.props.fullName}</h5>
            <p className="card-text">{this.props.bio}</p>
            <small className="text-muted">{this.props.profession}</small>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                Seconds elapsed since mount :{this.state.seconds}
                </li>
            </ul>
        </div>
        </div>
    );
    }
}

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
};

export default Profile;
