import * as React from 'react';
import styled from 'styled-components';

import GenerateCellsButton from './Buttons/GenerateCellsButton';
import NextGenerationButton from './Buttons/NextGenerationButton';
import GameTable from './GameTable';

const Wrapper = styled.div`
    background-color: #fff;
`;

const ActionWrapper = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const GameWrapper = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const LifeGame = () => {
    return (
        <Wrapper>
            <ActionWrapper>
                <GenerateCellsButton />
                <NextGenerationButton />
            </ActionWrapper>
            <GameWrapper>
                <GameTable />
            </GameWrapper>
        </Wrapper>
    )
}

export default LifeGame;