import React, { Component } from "react";

export default class Navigation extends Component {
    render() {
    return (
        <div>
        <nav className="navbar navbar-dark bg-mycolor">
            <a className="navbar-brand" href="/">
            MyWebsite.com
            </a>
            <form className="form-inline">
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">
                Search
            </button>
            </form>
        </nav>
        </div>
    );
}
}
