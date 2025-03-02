function countPaths(x, y, grid, move_grid) {
  // NO MOVE
  if (x > 9 || y > 9 || grid[x][y] === 1) {
    // console.log(` -- STOPPED  ${x},${y}`);
    return 0;
  }

  // UPDATE MOVE
  move_grid[x][y]++;

  // SUCCESS
  if (x === 9 && y === 9) {
    console.log(` -- ARRIVED  ${x},${y}`);
    return 1;
  }

  console.log(`POS ${x},${y}`);

  // ADD THE RIGHT AND DOWN MOVES
  return (
    countPaths(x + 1, y, grid, move_grid) +
    countPaths(x, y + 1, grid, move_grid)
  );
}

function find_paths(output_pre) {
  // 10x10 GRID TO STORE MOVES
  const move_grid = Array.from({ length: 10 }, () => Array(10).fill(0));

  // 10x10 OBSTACLE GRID
  const grid = Array.from({ length: 10 }, () => Array(10).fill(0));

  // TODO - MAKE RANDOM
  grid[0][1] = 1;
  grid[1][1] = 1;
  grid[2][1] = 1;
  // grid[3][1] = 1;
  grid[4][1] = 1;
  grid[5][1] = 1;
  grid[6][1] = 1;
  grid[7][1] = 1;
  // grid[8][1] = 1;
  grid[9][1] = 1;

  
  grid[0][2] = 1;
  grid[1][2] = 1;
  grid[2][2] = 1;
  // grid[3][2] = 1;
  // grid[4][2] = 1;
  grid[5][2] = 1;
  // grid[6][2] = 1;
  // grid[7][2] = 1;
  // grid[8][2] = 1;
  // grid[9][2] = 1;


  grid[0][6] = 1;
  grid[1][6] = 1;
  grid[2][6] = 1;
  grid[3][6] = 1;
  grid[4][6] = 1;
  grid[5][6] = 1;
  // grid[6][1] = 1;
  // grid[7][1] = 1;
  // grid[8][1] = 1;
  // grid[9][1] = 1;

  var paths_count = countPaths(0, 0, grid, move_grid);
  console.log("Number of paths:", paths_count);

  // VISUAL OUTPUT

  if (output_pre != null) {
    console.log("DOING OUTPUT PRE[" + output_pre + "]");

    // FILL WITH BLOCKS AND COLOURS INDICATING THE MOVES

    // GET MAX STEPS
    let max_steps = 0;
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        max_steps = Math.max(max_steps, move_grid[x][y]);
      }
    }

    // CREATE RET STR
    let retStr = "";

    // MAKE RET STR
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        // EARLY FOR WALL
        if (grid[x][y] != "0") {
          retStr += "   XXX";
        } else {
          retStr += `${move_grid[x][y]}`.padStart(6);
        }
      }
      retStr += "\n";
    }

    // ADD THE SUMMARY
    retStr += `\nPATHS COUNT ${paths_count}`;

    console.log("MADE RETSTR");
    console.log(retStr);
    output_pre.innerText = retStr;
  }
}

find_paths();
