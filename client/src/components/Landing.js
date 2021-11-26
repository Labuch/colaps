import  React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

const CenterLogo = styled.div`
    font-size: 50px;
    flex:5;
    display:flex;
    color:#968150;
    justify-content:center;
    align-items:center;
    user-select:none;

`  
const Button = styled(Link)`
   background-color: #b39b72;
   min-width: 150px;
   line-height: 3em;
   text-align: center;
   border-radius: 0.28571429rem;
   color:grey;
` 
const Content = styled.div`
    display:flex;
    height:100%;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    justify-content:space-between;
`
const Row = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:50%;
    flex-direction:row;
    flex:1;
`

const Landing = () => {

    return (
        <Content>
            <CenterLogo>
               <Logo/>
            </CenterLogo>
            <Row>
                <Button to={'/SampleLooper'}>
                Looper
                </Button>
            </Row>
            
        </Content>
    );
};

export default Landing;