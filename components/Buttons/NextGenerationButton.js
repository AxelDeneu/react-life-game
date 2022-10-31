import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { nextGeneration } from '../../features/lifeGameSlice';
import Button from '../Button';

const NextGenerationButton = () => {
    const cells = useSelector(state => state.lifeGame.cells)
    const dispatch = useDispatch();

    return (
        <>{cells && <Button onClick={() => dispatch(nextGeneration())}>Next generation</Button>}</>
    )
}

export default NextGenerationButton;