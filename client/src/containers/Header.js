import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {

    renderContent(){
        switch(this.props.auth){
            case null:
                return ;
            case false:
                return (
                    <ul>
                        <li>
                            <a className="ui button blue " href="/auth/facebook">
                                Login with facebook
                            </a>
                        </li>

                    </ul>
                );
            default :
                return (
                    <li>
                        <a className="ui button blue " href="/api/logout">
                            Logout
                        </a>
                    </li>
                );
        }
    }

    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/': ''}
                          className="left brand-logo" >
                        COLAPS
                    </Link>
                    <ul className="row">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}){
    return { auth};
}


export default connect(mapStateToProps)(Header);