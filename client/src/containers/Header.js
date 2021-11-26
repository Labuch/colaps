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


    render(){
        return (
                <HeaderContainer>
                    <HeaderLogo to={this.props.auth ? '/': ''} >
                        COLAPS
                    </HeaderLogo>
                </HeaderContainer>
           
        );
    }
}

function mapStateToProps({auth}){
    return {auth};
}


export default connect(mapStateToProps)(Header);