import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Table from './Table';
import Cell from './Cell';

const GameTable = () => {
    const { cells, rows, columns } = useSelector(state => state.lifeGame)

    return (
        <Table width={`${columns * 20}px`}>
            {cells.map((cell, index) => (
                <Cell key={index} alive={cell.isAlive} id={index} />
            ))}
        </Table>
    )
}

export default GameTable;