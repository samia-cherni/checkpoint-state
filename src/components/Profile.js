import React from "react";
import PropTypes from "prop-types";

const Profile = ({ imgSrc, fullName, bio, profession, seconds }) => {
    return (
    <div>
        <div className="card justify-content-center" style={{ width: "18rem" }}>
        <img src={imgSrc} className="card-img-top" alt="profile" />
        <div className="card-body">
            <h5 className="card-title">{fullName}</h5>
            <p className="card-text">{bio}</p>
            <small className="text-muted">{profession}</small>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
            Seconds elapsed since mount :{seconds}
            </li>
        </ul>
        </div>
    </div>
    );
};

Profile.propTypes = {
    fullName : PropTypes.string.isRequired,
    bio : PropTypes.string.isRequired,
    profession : PropTypes.string.isRequired,
};

export default Profile;
