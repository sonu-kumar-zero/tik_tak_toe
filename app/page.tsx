"use client";
import MarkBox from "@/components/MarkBox";
import TicTacToe from "@/components/TikTakToe";
import { useState } from "react";

export default function Home() {

  const [gridArray, setgridArray] = useState<Array<number>>([
    -1, -1, -1,
    -1, -1, -1,
    -1, -1, -1
  ]);

  const default_grid = [
    -1, -1, -1,
    -1, -1, -1,
    -1, -1, -1
  ];


  const [currentUser, setCurrentUser] = useState<number>(0);

  const changeGridArray = (index: number) => {
    setgridArray((prev) => {
      let grid = prev;
      if (grid[index] !== -1 || logicChecker(gridArray) !== -1) {
        // logicChecker(grid);
        return grid;
      }
      grid[index] = currentUser;
      let newuser = currentUser === 0 ? 1 : 0;
      setCurrentUser(newuser);
      return grid;
    });
  };

  const logicChecker = (grid: Array<number>): number => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (grid[a] !== -1 && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }

    return -1;
  }

  const resetGame = () => {
    setgridArray(default_grid);
    setCurrentUser(0);
  }

  return (
    <>
      <div className="bg-stone-900 w-[100dvw] h-[100dvh] flex flex-col gap-5 py-5 justify-center text-stone-200 text-[80px]">
        <div className="flex justify-center cursor-pointer" onClick={resetGame}>Tik Tak Toe
          {logicChecker(gridArray) !== -1 ? (logicChecker(gridArray) === 0 ? " zero wins" : " cross wins") : ""}
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-4/5 px-[400px]">
          {
            gridArray.map((singlegrid, index) => {
              return <MarkBox boxtype={singlegrid} key={index} id={index} clickHandler={() => { changeGridArray(index) }} />
            })
          }
        </div>
        {/* <TicTacToe /> */}
      </div>
    </>
  )
}
