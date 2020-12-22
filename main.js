//Data
function setUser() {
  return {
    onLevel: 0,
    levelState: {}
  }
}

const cellReference = ["void", "blank", "arrow", "bomb", "wheel"]
var user = setUser();
function getDefaultCell() {return {id: "", type: 0, pips: []}}


//Event Listeners
let els = {
  x1: 0,
  y1: 0,
  clicking: false
}
del("mousedown", (e) => {
  els.x1 = Math.floor(e.clientX);
  els.y1 = Math.floor(e.clientY);
  els.clicking = true;
  let cellAt = getCellAt(els.x1, els.y1);
  if (cellAt != null) {
    let id = getCellAt(els.x1, els.y1).getAttribute("id"),
        cellData = user.levelState.cells[getCellIdInfo(id, "r")][getCellIdInfo(id, "c")][getCellIdInfo(id, "l")];
    if (cellData.type.includes(4)) {rotateCell(id); updateLevel()}
  }
});
del("mouseup", (e) => {
  let el = getCellAt(els.x1, els.y1);
  if (el != null) {
    let id = el.getAttribute("id"),
        r = getCellIdInfo(id, "r"),
        c = getCellIdInfo(id, "c"),
        l = getCellIdInfo(id, "l"),
        cellData = user.levelState.cells[r][c][l];
    for (let i=getCellIdInfo(id, "l")+1; i<user.levelState.cells[r][c].length; i++) {
      if (user.levelState.cells[r][c][i].shown) {
        id = r+""+c+""+i;
        cellData = user.levelState.cells[r][c][i];
      }
    }
    let xDiff = els.x1-e.clientX,
        yDiff = els.y1-e.clientY,
        click = getClick(cellData.type);
    if (Math.abs(xDiff) > 24 || Math.abs(yDiff) > 24) {
      let axis = (Math.abs(yDiff) < Math.abs(xDiff)) ? "x" : "y",
          direction = (axis == "x") ? (xDiff < 0) ? "r" : "l" : (yDiff < 0) ? "b" : "t";
      if (click.includes("swipe") || (click.includes("click") && direction == cellData.direction)) {moveCell(id, direction)}
    }
    else if (click.includes("click") && !cellData.type.includes(4)) {moveCell(id, cellData.direction)}
    else if (click.includes("pop") && user.levelState.cellCount <= user.levelState.popAt) {popCell(id)}
  }
  els.xStart = 0;
  els.yStart = 0;
  els.clicking = false;
});
del("mousemove", (e) => {
  if (els.clicking && user.levelState.cellCount <= user.levelState.popAt) {
    let cell = getCellAt(e.clientX, e.clientY);
    if (cell != undefined) {if (getClick(user.levelState.cells[getCellIdInfo(cell.getAttribute("id"), "r")][getCellIdInfo(cell.getAttribute("id"), "c")][getCellIdInfo(cell.getAttribute("id"), "l")].type).includes("pop")) {popCell(cell.getAttribute("id"))}}
  }
});


//Manipulate Cells
function createCell(data) {
  let cell = document.createElement("div"),
      classStr = (data.type.includes(0)) ? "voidCell" : "blankCell",
      plate, layer = getCellIdInfo(data.id, "l");
  if (data.type.includes(2)) {
    plate = document.createElement("div");
    let layered = (layer != 0) ? "Layered" : "";
    plate.setAttribute("class", data.direction+layered+"Arrow");
    cell.appendChild(plate);
  }
  if (data.type.includes(3)) {
    for (let i=1; i<=4; i++) {
      plate = document.createElement("div");
      let layered = (layer != 0) ? "Layered" : "";
      plate.setAttribute("class", "bomb"+layered+i);
      cell.appendChild(plate);
    }
  }
  if (data.type.includes(4)) {
    plate = document.createElement("div");
    plate.setAttribute("class", "wheel");
    cell.appendChild(plate);
  }
  let lowestCell = di(getCellIdInfo(data.id, "r")+""+getCellIdInfo(data.id, "c")+""+(getCellIdInfo(data.id, "l")-1));
  if (layer > 0) {classStr += " layeredCell"}
  cell.setAttribute("class", classStr);
  cell.setAttribute("id", data.id);
  return cell;
}
function moveCell(cell, direction, real) {
  let r = getCellIdInfo(cell, "r"),
      c = getCellIdInfo(cell, "c"),
      l = getCellIdInfo(cell, "l"),
      el = di(cell),
      re = el.getBoundingClientRect(),
      x1 = Math.floor(re.x+re.width/2),
      y1 = Math.floor(re.y+re.height/2),
      x2 = (direction == "t") ? x1 : (direction == "r") ? window.innerWidth+5000 : (direction == "b") ? x1 : (direction == "l") ? -5000 : null,
      y2 = (direction == "t") ? -5000 : (direction == "r") ? y1 : (direction == "b") ? window.innerHeight+5000 : (direction == "l") ? y1 : null;
  
  if (canMoveCell(cell, direction) || real) {
    //Move Animation
    let speed = (real) ? 1e6 : 1,
        topOrLeft = (direction == "l" || direction == "r") ? "left" : "top",
        frameDistance = (direction == "t" || direction == "l") ? -1*24*speed : 1*24*speed,
        distance = (direction == "t" || direction == "l") ? -1*Math.abs((x2-x1)+(y2-y1)) : 1*Math.abs((x2-x1)+(y2-y1)),
        elStyle = window.getComputedStyle(el),
        value = elStyle.getPropertyValue(topOrLeft).replace("px", ""),
        destination = (Number(value)+distance)*(getCellIdInfo(cell, "l")+1)+"px",
        movingFrames = setInterval(moveAFrame, 1000/60),
        xc = re.x+(re.width/2),
        yc = re.y+(re.height/2);
    function moveAFrame() {
      if (Math.abs(elStyle.getPropertyValue(topOrLeft).replace("px", ""))-Math.abs(destination.replace("px", "")) > 0) {
        clearInterval(movingFrames);
      }
      else {
        re = el.getBoundingClientRect();
        xc = re.x+(re.width/2),
        yc = re.y+(re.height/2);
        elStyle = window.getComputedStyle(el);
        value = elStyle.getPropertyValue(topOrLeft).replace("px", "");
        el.style[topOrLeft] = (Number(value)+frameDistance)+"px";
      }
      let cellAt = getCellAt(xc, yc, el);
      if (cellAt != null) {cellAt.childNodes.forEach((value) => {if (value.getAttribute("class").includes("bomb")) {el.style.opacity = 0}})}
    }
    
    //Data Manipulation
    user.levelState.cellCount--;
    user.levelState.cells[r][c][l].shown = false;
    if (typeof user.levelState.cells[r][c][l].connected != "undefined") {
      let direction = user.levelState.cells[r][c][l].connected,
          connectedCoreId = getIdFromDirection(r+""+c+""+l, direction);
      user.levelState.cells[getCellIdInfo(connectedCoreId, "r")][getCellIdInfo(connectedCoreId, "c")][getCellIdInfo(connectedCoreId, "l")].connectors.splice(user.levelState.cells[getCellIdInfo(connectedCoreId, "r")][getCellIdInfo(connectedCoreId, "c")][getCellIdInfo(connectedCoreId, "l")].connectors.indexOf(getOppositeDirection(direction)), 1);
      user.levelState.cells[r][c].splice(l, 1);
      if (l != 0) {di(r+""+c+""+l).setAttribute("id", "")}
    }
    updateLevel();
  }
}
function canMoveCell(cell, direction) {
  let canMove = true,
      levelData = user.levelState,
      r = getCellIdInfo(cell, "r"),
      c = getCellIdInfo(cell, "c"),
      l = getCellIdInfo(cell, "l");
  
  //Is the lane clear?
  let cellsInLaneCount = 0;
  switch(direction) {
    case "t":
      for (let i=r-1; i>=0; i--) {
        let breakLoop = false;
        for (let L=0; L<levelData.cells[i][c].length; L++) {
          let data = levelData.cells[i][c][L];
          if (data.type.includes(3) && cellsInLaneCount == 0) {breakLoop = true}
          if (data.shown && !data.type.includes(0) && !data.type.includes(3)) {
            canMove = false;
            cellsInLaneCount++;
          }
        }
        if (breakLoop) {break}
      }
      break;
    case "r":
      for (let i=c+1; i<levelData.cells[r].length; i++) {
        let breakLoop = false;
        for (let L=0; L<levelData.cells[r][i].length; L++) {
          let data = levelData.cells[r][i][L];
          if (data.type.includes(3) && cellsInLaneCount == 0) {breakLoop = true}
          if (data.shown && !data.type.includes(0) && !data.type.includes(3)) {
            canMove = false;
            cellsInLaneCount++;
          }
        }
        if (breakLoop) {break}
      }
      break;
    case "b":
      for (let i=r+1; i<levelData.cells.length; i++) {
        let breakLoop = false;
        for (let L=0; L<levelData.cells[i][c].length; L++) {
          let data = levelData.cells[i][c][L];
          if (data.type.includes(3) && cellsInLaneCount == 0) {breakLoop = true}
          if (data.shown && !data.type.includes(0) && !data.type.includes(3)) {
            canMove = false;
            cellsInLaneCount++;
          }
        }
        if (breakLoop) {break}
      }
      break;
    case "l":
      for (let i=c-1; i>=0; i--) {
        let breakLoop = false;
        for (let L=0; L<levelData.cells[r][i].length; L++) {
          let data = levelData.cells[r][i][L];
          if (data.type.includes(3) && cellsInLaneCount == 0) {breakLoop = true}
          if (data.shown && !data.type.includes(0) && !data.type.includes(3)) {
            canMove = false;
            cellsInLaneCount++;
          }
        }
        if (breakLoop) {break}
      }
      break;
  }
  if (!canMove) {return false}
  
  //Are there any pips in the way?
  if ((direction == "t" || direction == "b") && (getPipAt(cell, "l") >= 0 || getPipAt(cell, "r") >= 0 || getPipAt(r+""+(c-1)+""+getCellIdInfo(cell, "l"), "r") >= 0 || getPipAt(r+""+(c+1)+""+getCellIdInfo(cell, "l"), "l") >= 0)) {canMove = false}
  else if ((direction == "r" || direction == "l") && (getPipAt(cell, "t") >= 0 || getPipAt(cell, "b") >= 0 || getPipAt((r-1)+""+c+""+getCellIdInfo(cell, "l"), "b") >= 0 || getPipAt((r+1)+""+c+""+getCellIdInfo(cell, "l"), "t") >= 0)) {canMove = false}
  if (!canMove) {return false}
  
  return canMove;
}
function popCell(cell) {
  moveCell(cell, "t", true);
}
function rotateCell(cell) {
  let r = getCellIdInfo(cell, "r"),
      c = getCellIdInfo(cell, "c"),
      l = getCellIdInfo(cell, "l"),
      loops = {
        1: ["t", "r", "b", "l"],
        2: ["tt", "rr", "bb", "ll"]
      },
      moved = [];
  user.levelState.cells[r][c][l].connectors.forEach((value, index) => {
    let dd = loops[value.length][(typeof loops[value.length][loops[value.length].indexOf(value)+1] != "undefined") ? loops[value.length].indexOf(value)+1 : 0],
        cellAtdd = getIdFromDirection(cell, dd),
        dr = getCellIdInfo(cellAtdd, "r"),
        dc = getCellIdInfo(cellAtdd, "c"),
        dl = getCellIdInfo(cellAtdd, "l")+1,
        cellAtvalue, cellData, cellDatasAtvalue = user.levelState.cells[getCellIdInfo(getIdFromDirection(cell, value), "r")][getCellIdInfo(getIdFromDirection(cell, value), "c")];
    cellDatasAtvalue.forEach((value2, index2) => {
      if (typeof value2.connected != "undefined") {
        //This is assuming there are no cells on top of the core cell, I don't think that will ever happen, but is there a way to check?
        let coreCell = getIdFromDirection(value2.id, value2.connected);
        if (coreCell == cell && !moved.includes(value2.id)) {
          cellAtvalue = value2.id;
          cellData = user.levelState.cells[getCellIdInfo(cellAtvalue, "r")][getCellIdInfo(cellAtvalue, "c")][getCellIdInfo(cellAtvalue, "l")];
        }
      }
    });
    
    user.levelState.cells[r][c][l].connectors[index] = dd;
    user.levelState.cells[getCellIdInfo(cellAtvalue, "r")][getCellIdInfo(cellAtvalue, "c")][getCellIdInfo(cellAtvalue, "l")].connected = getOppositeDirection(dd);
    di(getCellIdInfo(cellAtdd, "r")+""+getCellIdInfo(cellAtdd, "c")+"t").appendChild(di(cellAtvalue));
    di(cellAtvalue).setAttribute("id", dr+""+dc+""+dl);
    user.levelState.cells[dr][dc].push(cellData);
    user.levelState.cells[dr][dc][user.levelState.cells[dr][dc].indexOf(cellData)].id = dr+""+dc+""+dl;
    user.levelState.cells[getCellIdInfo(cellAtvalue, "r")][getCellIdInfo(cellAtvalue, "c")].splice(user.levelState.cells[getCellIdInfo(cellAtvalue, "r")][getCellIdInfo(cellAtvalue, "c")].indexOf(cellData), 1);
    
    
    moved.push(dr+""+dc+""+dl);
  });
  moved.forEach((value) => {
    let wr = getCellIdInfo(value, "r"),
        wc = getCellIdInfo(value, "c");
    user.levelState.cells[wr][wc].forEach((value2, wl) => {
      let id = wr+""+wc+""+wl;
      
      //Bombs' effect applies to all cells in the layer
      if (user.levelState.cells[wr][wc][wl].type.includes(3)) {
        user.levelState.cells[wr][wc].forEach((value3, index) => {
          if (!value3.type.includes(3) && !value3.type.includes(0)) {
            popCell(value3.id);
          }
        });
      }
    });
  });
  moved.forEach((value) => {
    let wr = getCellIdInfo(value, "r"),
        wc = getCellIdInfo(value, "c");
    user.levelState.cells[wr][wc].forEach((value2, wl) => {
      let id = wr+""+wc+""+wl;
      
      //Moves the cells to the proper layers
      di(value2.id).setAttribute("id", id);
      user.levelState.cells[wr][wc][wl].id = id;
    });
  });
  updateLevel();
}


//Edit Cells
function addPip(cell, side, real) {
  let pipAt = (!real) ? getPipAt(cell, side) : -1;
  if (pipAt < 0) {
    let pip = document.createElement("span");
    pip.setAttribute("class", "pip "+side+"Pip");
    pip.setAttribute("id", cell+side+"Pip");
    di(cell).appendChild(pip);
  }
}
function removePip(cell, side) {
  let pipAt = getPipAt(cell, side);
  if (pipAt >= 0) {di(cell).removeChild(di(cell).childNodes[pipAt])}
}
function addWheelX(cell, real) {
  let wheelXAt = (!real) ? getWheelXAt(cell) : -1;
  if (wheelXAt < 0 && di(cell) != null) {
    let wheelX = document.createElement("span");
    wheelX.setAttribute("class", "wheelX");
    wheelX.setAttribute("id", cell+"WheelX");
    di(cell).appendChild(wheelX);
  }
}
function removeWheelX(cell) {
  let wheelXAt = getWheelXAt(cell);
  if (wheelXAt >= 0) {di(cell).removeChild(di(cell).childNodes[wheelXAt])}
}
function addWheelLine(cell, side, real) {
  let wheelLineAt = (!real) ? getWheelLineAt(cell, side) : -1;
  if (wheelLineAt < 0) {
    let wheelLine = document.createElement("span");
    wheelLine.setAttribute("class", "wheelLine "+side+"WheelLine");
    wheelLine.setAttribute("id", cell+side+"WheelLine");
    di(cell).appendChild(wheelLine);
  }
}
function removeWheelLine(cell, side) {
  let wheelLineAt = getWheelLineAt(cell, side);
  if (wheelLineAt >= 0) {di(cell).removeChild(di(cell).childNodes[wheelLineAt])}
}
function removeWheelLines(cell) {
  let sides = ["t", "r", "b", "l"];
  sides.forEach((value) => {removeWheelLine(cell, value)});
}


//Get
function getDirectionOrder(directions) {
  let order = ["t", "r", "b", "l", "tt", "rr", "bb", "ll"], ordered = [];
  order.forEach((value) => {if (directions.includes(value)) {ordered.push(value)}});
  return ordered;
}
function getPipAt(cell, side) {
  let children = (di(cell) != null) ? di(cell).childNodes : [],
      pipAt = -1;
  children.forEach((value, index) => {if (value.getAttribute("class").includes(side+"Pip")) {pipAt = index}});
  return pipAt;
}
function getArrowAt(cell, direction) {
  let children = (di(cell) != null) ? di(cell).childNodes : [],
      arrowAt = -1;
  children.forEach((value, index) => {if (value.getAttribute("class").includes(direction+"Arrow")) {arrowAt = index}});
  return arrowAt;
}
function getWheelXAt(cell) {
  let children = (di(cell) != null) ? di(cell).childNodes : [],
      wheelAt = -1;
  children.forEach((value, index) => {if (value.getAttribute("class").includes("wheelX")) {wheelAt = index}});
  return wheelAt;
}
function getWheelLineAt(cell, side) {
  let children = (di(cell) != null) ? di(cell).childNodes : [],
      wheelLineAt = -1;
  children.forEach((value, index) => {if (value.getAttribute("class").includes(side+"WheelLine")) {wheelLineAt = index}});
  return wheelLineAt;
}

function getCellAt(x, y, originalCell) {
  let elements = document.elementsFromPoint(x, y), cell = null;
  for (let i=elements.length-1; i>= 0; i--) {
    value = elements[i];
    let classes = value.getAttribute("class");
    if (classes != null && classes.includes("Cell") && !classes.includes("void") && value != originalCell) {cell = value}
  }
  return cell;
}
function getCellsAt(x, y) {
  let elements = document.elementsFromPoint(x, y),
      cells = [];
  elements.forEach((value) => {
    let classes = value.getAttribute("class");
    if (classes != null) {
      if (classes.includes("Cell") && !classes.includes("void")) {
        cells.push(value);
      }
    }
  });
  return cells;
}

function getClick(type) {
  if (type.includes(0)) {return "none"}
  else if (type.includes(1)) {return "swipe"}
  else if (type.includes(2)) {return "click"}
  else if (type.includes(3)) {return "none pop"}
  else if (type.includes(4)) {return "click pop"}
}
function getCellIdInfo(id, info) {
  if (info == "r") {return Number(id.charAt(0))}
  if (info == "c") {return Number(id.substring(1, id.length-1))}
  if (info == "l") {return Number(id.charAt(id.length-1))}
}
function getIdFromDirection(cell, direction, layer) {
  let r = getCellIdInfo(cell, "r"),
      c = getCellIdInfo(cell, "c"), id;
  switch(direction) {
    case "t": id = (r-1)+""+c+""+(layer || user.levelState.cells[r-1][c].length-1); break;
    case "r": id = r+""+(c+1)+""+(layer || user.levelState.cells[r][c+1].length-1); break;
    case "b": id = (r+1)+""+c+""+(layer || user.levelState.cells[r+1][c].length-1); break;
    case "l": id = r+""+(c-1)+""+(layer || user.levelState.cells[r][c-1].length-1); break;
    case "tt": id = (r-2)+""+c+""+(layer || user.levelState.cells[r-2][c].length-1); break;
    case "rr": id = r+""+(c+2)+""+(layer || user.levelState.cells[r][c+2].length-1); break;
    case "bb": id = (r+2)+""+c+""+(layer || user.levelState.cells[r+2][c].length-1); break;
    case "ll": id = r+""+(c-2)+""+(layer || user.levelState.cells[r][c-2].length-1); break;
  }
  return id;
}
function getOppositeDirection(direction) {
  let oppositeDirection;
  switch(direction) {
    case "t": oppositeDirection = "b"; break;
    case "r": oppositeDirection = "l"; break;
    case "b": oppositeDirection = "t"; break;
    case "l": oppositeDirection = "r"; break;
    case "tt": oppositeDirection = "bb"; break;
    case "rr": oppositeDirection = "ll"; break;
    case "bb": oppositeDirection = "tt"; break;
    case "ll": oppositeDirection = "rr"; break;
  }
  return oppositeDirection;
}


//Update
function loadLevel(level) {
  level = (level == 0 || level >= levels.length) ? 1 : level;
  user.onLevel = level;
  user.levelState = JSON.parse(JSON.stringify(levels[level]));
  di("tableContainer").innerHTML = "";
  for (let r=0; r<levels[level].cells.length; r++) {
    let row = document.createElement("div");
    row.setAttribute("class", "tableRow");
    row.setAttribute("id", "row"+r);
    for (let c=0; c<levels[level].cells[r].length; c++) {
      let cellContainer = document.createElement("div");
      cellContainer.setAttribute("class", "tile");
      cellContainer.setAttribute("id", r+""+c+"t");
      for (let l=0; l<levels[level].cells[r][c].length; l++) {
        cellContainer.appendChild(createCell(levels[level].cells[r][c][l]));
      }
      row.appendChild(cellContainer);
    }
    di("tableContainer").appendChild(row);
  }
  di("onLevel").textContent = "Level "+level;
  updateLevel();
}
function updateLevel() {
  let cells = user.levelState.cells;
  
  for (let r=0; r<cells.length; r++) {
    for (let c=0; c<cells[r].length; c++) {
      for (let l=0; l<cells[r][c].length; l++) {
        
        //Update Pips
        if (typeof cells[r][c][l].pips != "undefined") {
          if (l == 0) {
            cells[r][c][l].pips.forEach((value) => {
              let pipD = value, pipR, pipC, pipL;
              value = (value == "t") ? (r-1)+""+c+""+l : (value == "r") ? r+""+(c+1)+""+l : (value == "b") ? (r+1)+""+c+""+l : r+""+(c-1)+""+l;
              pipR = getCellIdInfo(value, "r");
              pipC = getCellIdInfo(value, "c");
              pipL = getCellIdInfo(value, "l");
              if (cells[pipR][pipC][pipL].shown && cells[r][c][l].shown) {addPip(r+""+c+""+l, pipD)} else {removePip(r+""+c+""+l, pipD)}
            });
          }
          else {cells[r][c][l].pips.forEach((value) => {removePip(r+""+c+""+l, value)})}
        }
        
        //Update Wheels
        removeWheelLines(r+""+c+""+l);
        if (typeof cells[r][c][l].connectors != "undefined") {
          cells[r][c][l].connectors.forEach((value) => {
            let id = getIdFromDirection(r+""+c+""+l, value),
                conR = getCellIdInfo(id, "r"),
                conC = getCellIdInfo(id, "c"),
                conL = getCellIdInfo(id, "l");
            if (cells[conR][conC][conL].shown) {addWheelX(id)} else {removeWheelX(id)}
            if (cells[conR][conC][conL].shown && cells[r][c][l].shown) {addWheelLine(r+""+c+""+l, value)} else {removeWheelLine(r+""+c+""+l, value)}
          });
        }
      }
    }
  }
  
  //Load next level
  if (user.levelState.cellCount == 0) {
    setTimeout(() => {
      loadLevel(user.onLevel+1);
      updateLevel();
    }, 1000);
  }
}
loadLevel(1);
