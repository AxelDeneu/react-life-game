import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'

import { setCellState } from '../features/lifeGameSlice';

const StyledCell = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.alive ? 'green' : '#fff'};
    border: 1px solid rgba(0, 0, 0, 0.2);
    &:hover {
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }
`;

const Cell = ({ alive, id }) => {
    const dispatch = useDispatch();

    return (
        <StyledCell alive={alive} onClick={() => dispatch(setCellState({
            id: id,
        }))} />
    )
}

export default Cell