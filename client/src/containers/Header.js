import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
border-bottom: 0.2em solid #825830;
justify-content:space-around;
`

const HeaderLogo = styled(Link)`
    font-size:20px;
    padding-left:20px;
    color:#968150;
`

class Header extends Component {

    renderContent(){
        switch(this.props.auth){
            case null:
                return ;
            case false:
                return (
                    <a className="ui button blue " href="/auth/facebook">
                        Login with facebook
                    </a>
                );
            default :
                return (
                    <a className="ui button blue " href="/api/logout">
                        Logout
                    </a>
                );
        }
    }

    render(){
        return (
                <HeaderContainer>
                    <HeaderLogo to={this.props.auth ? '/': ''} >
                        COLAPS
                    </HeaderLogo>
                    <ul className="row">
                        {this.renderContent()}
                    </ul>
                </HeaderContainer>
           
        );
    }
}

function mapStateToProps({auth}){
    return {auth};
}


export default connect(mapStateToProps)(Header);