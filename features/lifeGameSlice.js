import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'lifeGame',
    initialState: {
        cells: [],
        rows: 0,
        columns: 0,
    },
    reducers: {
        generateRandomCells: (state, action) => {
            const { rows, columns } = action.payload;
            state.rows = rows;
            state.columns = columns;

            const amount = rows * columns;

            const cells = [];
            for (let i = 0; i < amount; i++) {
                cells.push({
                    id: i,
                    isAlive: Math.random() > 0.8
                });
            }
            state.cells = cells;
        },

        setCellState: (state, action) => {
            const { id } = action.payload;
            const cell = state.cells.find(cell => cell.id === id);
            cell.isAlive = !cell.isAlive;
        },

        isStillAlive: (state, action) => {
            const { id } = action.payload;
            const cell = state.cells.find(cell => cell.id === id);

            const neighbors = getNeighbors(state, cell);
            const aliveNeighbors = neighbors.filter(neighbor => neighbor.isAlive);
            console.log(aliveNeighbors)

            if (cell.isAlive) {
                if (aliveNeighbors.length < 2 || aliveNeighbors.length > 3) {
                    cell.isAlive = false;
                } else {
                    cell.isAlive = true;
                }
            } else {
                if (aliveNeighbors.length === 3) {
                    cell.isAlive = true;
                }
            }
        },

        nextGeneration: (state, action) => {
            state.cells.forEach(cell => {
                isStillAlive({ id: cell.id });
            });
        }

    }
})

// Action creators are generated for each case reducer function
export const { generateRandomCells, setCellState, isStillAlive, nextGeneration } = counterSlice.actions

export default counterSlice.reducer