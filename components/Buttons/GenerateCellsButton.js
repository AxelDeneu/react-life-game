import * as React from 'react';
import { useDispatch } from 'react-redux'
import { generateRandomCells } from '../../features/lifeGameSlice';
import Button from '../Button';

const GenerateCellsButton = () => {
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(generateRandomCells({
            rows: 20,
            columns: 50,
        }))}>Generate cells</Button>
    )
}

export default GenerateCellsButton;