import React from 'react';
import styled from 'styled-components';

function Footer() {

        return(
            <>
            <FooterContainer className="main-footer"> 
                <div className="footer-middle">
                    <div className="container">
                        <div className="footer-bottom">
                            <p className="text-xs-left">
                                &copy;{new Date().getFullYear()} Star Wars App. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </FooterContainer>
            </>
        )
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle{
        background: var(--mainDark);
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: var(--mainWhite);
    }

`;