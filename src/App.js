import React, { useState, useCallback, useRef } from "react";
import "./App.css";
import Grid from "./grid";
import {
  calculateNextGeneration,
  generateEmptyGrid,
  generateRandomGrid,
} from "./game-of-life";

const numRows = 22;
const numCols = 65;

const App = () => {
  const [grid, setGrid] = useState(() => generateEmptyGrid(numRows, numCols));
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      return calculateNextGeneration(g);
    });

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <div className="App">
      <div className="head">
        <h1>Conway&apos;s Game of Life</h1>
      </div>
      <main className="main">
        <Grid
          grid={grid}
          onClick={(i, k) => {
            const newGrid = grid.map((row) => [...row]);
            newGrid[i][k] = grid[i][k] ? 0 : 1;
            setGrid(newGrid);
          }}
        />
        <div className="controls">
          <button
            onClick={() => {
              setRunning(!running);
              if (!running) {
                runningRef.current = true;
                runSimulation();
              }
            }}
          >
            {running ? "Stop" : "Start"}
          </button>
          <button
            onClick={() => {
              setGrid(generateRandomGrid(numRows, numCols));
            }}
          >
            Random
          </button>
          <button
            onClick={() => {
              setGrid(generateEmptyGrid(numRows, numCols));
            }}
          >
            Clear
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
