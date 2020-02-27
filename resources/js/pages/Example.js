import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                I'm an example component!
                            </div>
                            <Link to="/user">User</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
