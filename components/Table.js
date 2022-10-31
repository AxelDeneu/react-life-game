import * as React from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: ${props => props.width};
    border: 1px solid black;
    box-sizing: content-box;
`;

const Table = ({ children, ...props }) => {
    return (
        <StyledTable {...props}>
            {children}
        </StyledTable>
    )
}

export default Table;