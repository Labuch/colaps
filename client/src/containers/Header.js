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
                            <a href="/auth/facebook">
                                login with facebook
                            </a>
                        </li>

                    </ul>
                );
            default :
                return (
                    <li>
                        <a href="/api/logout">
                            logout
                        </a>
                    </li>
                );
        }
    }

    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/SampleLooper': ''}
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