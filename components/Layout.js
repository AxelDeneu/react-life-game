import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #fff;
`;


const Layout = ({ children }) => (
    <Wrapper>{children}</Wrapper>
)

export default Layout