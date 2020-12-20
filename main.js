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
const levels = [
  {
    cells: [
      [
        
      ]
    ],
    cellCount: 0,
    popAt: 0
  },
  {
    cells: [
      [
        [{id: "000", type: 1, pips: ["r"]}],
        [{id: "010", type: 1, pips: []}]
      ]
    ],
    cellCount: 2,
    popAt: 0
  },
  {
    cells: [
      [
        [{id: "000", type: 1, pips: []}],
        [{id: "010", type: 1, pips: ["l", "r"]}],
        [{id: "020", type: 1, pips: []}]
      ],
      [
        [{id: "100", type: 0, pips: []}],
        [{id: "110", type: 1, pips: ["t", "b"]}],
        [{id: "120", type: 0, pips: []}]
      ],
      [
        [{id: "200", type: 0, pips: []}],
        [{id: "210", type: 1, pips: []}],
        [{id: "220", type: 0, pips: []}]
      ]
    ],
    cellCount: 5,
    popAt: 0
  },
  {
    cells: [
      [
        [{id: "000", type: 1, pips: ["b"]}],
        [{id: "010", type: 1, pips: []}],
        [{id: "020", type: 0, pips: []}],
        [{id: "030", type: 0, pips: []}],
        [{id: "040", type: 0, pips: []}],
        [{id: "050", type: 0, pips: []}],
        [{id: "060", type: 0, pips: []}],
        [{id: "070", type: 1, pips: []}],
        [{id: "080", type: 1, pips: ["b"]}]
      ],
      [
        [{id: "100", type: 1, pips: ["b"]}],
        [{id: "110", type: 1, pips: ["t", "l"]}],
        [{id: "120", type: 0, pips: []}],
        [{id: "130", type: 1, pips: []}],
        [{id: "140", type: 1, pips: ["r", "l"]}],
        [{id: "150", type: 1, pips: []}],
        [{id: "160", type: 0, pips: []}],
        [{id: "170", type: 1, pips: ["t", "r", "b"]}],
        [{id: "180", type: 1, pips: []}]
      ],
      [
        [{id: "200", type: 1, pips: []}],
        [{id: "210", type: 1, pips: ["t"]}],
        [{id: "220", type: 0, pips: []}],
        [{id: "230", type: 0, pips: []}],
        [{id: "240", type: 0, pips: []}],
        [{id: "250", type: 0, pips: []}],
        [{id: "260", type: 0, pips: []}],
        [{id: "270", type: 1, pips: []}],
        [{id: "280", type: 1, pips: ["t"]}]
      ]
    ],
    cellCount: 15,
    popAt: 0
  },
  {
    cells: [
      [
        [{id: "000", type: 1, pips: []}],
        [{id: "010", type: 1, pips: ["b", "l"]}],
        [{id: "020", type: 0, pips: []}],
        [{id: "030", type: 0, pips: []}],
        [{id: "040", type: 0, pips: []}],
        [{id: "050", type: 0, pips: []}],
        [{id: "060", type: 0, pips: []}],
        [{id: "070", type: 1, pips: []}],
        [{id: "080", type: 1, pips: ["l"]}]
      ],
      [
        [{id: "100", type: 1, pips: []}],
        [{id: "110", type: 1, pips: ["r"]}],
        [{id: "120", type: 1, pips: []}],
        [{id: "130", type: 0, pips: []}],
        [{id: "140", type: 0, pips: []}],
        [{id: "150", type: 0, pips: []}],
        [{id: "160", type: 1, pips: []}],
        [{id: "170", type: 1, pips: ["l"]}],
        [{id: "180", type: 1, pips: ["t", "b", "l"]}]
      ],
      [
        [{id: "200", type: 1, pips: ["t", "r", "b"]}],
        [{id: "210", type: 1, pips: ["t"]}],
        [{id: "220", type: 0, pips: []}],
        [{id: "230", type: 0, pips: []}],
        [{id: "240", type: 1, pips: []}],
        [{id: "250", type: 0, pips: []}],
        [{id: "260", type: 0, pips: []}],
        [{id: "270", type: 1, pips: ["r"]}],
        [{id: "280", type: 1, pips: []}]
      ],
      [
        [{id: "300", type: 1, pips: []}],
        [{id: "310", type: 0, pips: []}],
        [{id: "320", type: 0, pips: []}],
        [{id: "330", type: 1, pips: []}],
        [{id: "340", type: 1, pips: ["t", "l"]}],
        [{id: "350", type: 1, pips: ["l"]}],
        [{id: "360", type: 0, pips: []}],
        [{id: "370", type: 0, pips: []}],
        [{id: "380", type: 1, pips: ["t"]}]
      ]
    ],
    cellCount: 20,
    popAt: 0
  },
  {
    cells: [
      [
        [{id: "000", type: 1, pips: ["r"]}],
        [{id: "010", type: 1, pips: []}],
        [{id: "020", type: 0, pips: []}],
        [{id: "030", type: 3, pips: []}],
        [{id: "040", type: 0, pips: []}],
        [{id: "050", type: 1, pips: []}],
        [{id: "060", type: 1, pips: ["b", "l"]}]
      ],
      [
        [{id: "100", type: 1, pips: ["t", "b"]}],
        [{id: "110", type: 2, direction: "r", pips: ["l"]}],
        [{id: "120", type: 0, pips: []}],
        [{id: "130", type: 3, pips: []}],
        [{id: "140", type: 0, pips: []}],
        [{id: "150", type: 2, direction: "l", pips: ["r"]}],
        [{id: "160", type: 1, pips: ["b"]}]
      ],
      [
        [{id: "200", type: 1, pips: ["r"]}],
        [{id: "210", type: 1, pips: []}],
        [{id: "220", type: 0, pips: []}],
        [{id: "230", type: 3, pips: []}],
        [{id: "240", type: 0, pips: []}],
        [{id: "250", type: 1, pips: ["r"]}],
        [{id: "260", type: 1, pips: []}]
      ]
    ],
    cellCount: 15,
    popAt: 3
  },
  {
    cells: [
      [
        [{id: "000", type: 1, pips: ["b"]}],
        [{id: "010", type: 1, pips: []}],
        [{id: "020", type: 1, pips: ["r", "b"]}],
        [{id: "030", type: 1, pips: []}],
        [{id: "040", type: 1, pips: ["b", "l"]}]
      ],
      [
        [{id: "100", type: 1, pips: ["r"]}],
        [{id: "110", type: 3, pips: ["t"]}],
        [{id: "120", type: 1, pips: []}],
        [{id: "130", type: 1, pips: []}],
        [{id: "140", type: 1, pips: ["b", "l"]}]
      ],
      [
        [{id: "200", type: 1, pips: ["r", "b"]}],
        [{id: "210", type: 1, pips: []}],
        [{id: "220", type: 3, pips: ["r", "b"]}],
        [{id: "230", type: 1, pips: []}],
        [{id: "240", type: 1, pips: ["l"]}]
      ],
      [
        [{id: "300", type: 1, pips: ["r"]}],
        [{id: "310", type: 1, pips: []}],
        [{id: "320", type: 1, pips: ["b", "l"]}],
        [{id: "330", type: 3, pips: ["r"]}],
        [{id: "340", type: 1, pips: ["t", "b"]}]
      ],
      [
        [{id: "400", type: 1, pips: ["r"]}],
        [{id: "410", type: 1, pips: ["t"]}],
        [{id: "420", type: 1, pips: ["r"]}],
        [{id: "430", type: 1, pips: ["t"]}],
        [{id: "440", type: 1, pips: []}]
      ]
    ],
    cellCount: 25,
    popAt: 3
  },
  {
    cells: [
      [
        [{id: "000", type: 0, pips: []}],
        [{id: "010", type: 0, pips: []}],
        [{id: "020", type: 0, pips: []}],
        [{id: "030", type: 2, direction: "b", pips: ["b"]}],
        [{id: "040", type: 2, direction: "b", pips: []}],
        [{id: "050", type: 2, direction: "b", pips: ["b"]}],
        [{id: "060", type: 0, pips: []}],
        [{id: "070", type: 0, pips: []}],
        [{id: "080", type: 0, pips: []}]
      ],
      [
        [{id: "100", type: 0, pips: []}],
        [{id: "110", type: 1, pips: []}],
        [{id: "120", type: 1, pips: ["l"]}],
        [{id: "130", type: 1, pips: []}],
        [{id: "140", type: 1, pips: ["l"]}],
        [{id: "150", type: 1, pips: ["b"]}],
        [{id: "160", type: 1, pips: ["r"]}],
        [{id: "170", type: 1, pips: []}],
        [{id: "180", type: 0, pips: []}]
      ],
      [
        [{id: "200", type: 0, pips: []}],
        [{id: "210", type: 0, pips: []}],
        [{id: "220", type: 1, pips: ["t"]}],
        [{id: "230", type: 1, pips: []}],
        [{id: "240", type: 1, pips: ["t", "b", "l"]}],
        [{id: "250", type: 1, pips: ["r"]}],
        [{id: "260", type: 1, pips: ["t"]}],
        [{id: "270", type: 0, pips: []}],
        [{id: "280", type: 0, pips: []}]
      ],
      [
        [{id: "300", type: 2, direction: "r", pips: []}],
        [{id: "310", type: 0, pips: []}],
        [{id: "320", type: 1, pips: ["t", "r"]}],
        [{id: "330", type: 3, pips: []}],
        [{id: "340", type: 3, pips: []}],
        [{id: "350", type: 3, pips: ["t", "r"]}],
        [{id: "360", type: 1, pips: ["b"]}],
        [{id: "370", type: 0, pips: []}],
        [{id: "380", type: 2, direction: "l", pips: []}]
      ],
      [
        [{id: "400", type: 0, pips: []}],
        [{id: "410", type: 0, pips: []}],
        [{id: "420", type: 1, pips: []}],
        [{id: "430", type: 2, direction: "t", pips: ["r", "l"]}],
        [{id: "440", type: 1, pips: []}],
        [{id: "450", type: 2, direction: "t", pips: ["t"]}],
        [{id: "460", type: 1, pips: []}],
        [{id: "470", type: 0, pips: []}],
        [{id: "480", type: 0, pips: []}]
      ]
    ],
    cellCount: 27,
    popAt: 3
  },
  {
    cells: [
      [
        [{id: "000", type: 1, pips: []}],
        [{id: "010", type: 0, pips: []}],
        [{id: "020", type: 0, pips: []}],
        [{id: "030", type: 1, pips: ["b"]}],
        [{id: "040", type: 1, pips: ["l"]}],
        [{id: "050", type: 1, pips: ["r"]}],
        [{id: "060", type: 1, pips: []}],
        [{id: "070", type: 1, pips: ["b"]}],
        [{id: "080", type: 0, pips: []}],
        [{id: "090", type: 0, pips: []}],
        [{id: "0100", type: 1, pips: ["b"]}]
      ],
      [
        [{id: "100", type: 2, direction: "r", pips: ["t"]}],
        [{id: "110", type: 0, pips: []}],
        [{id: "120", type: 1, pips: []}],
        [{id: "130", type: 1, pips: ["r", "b"]}],
        [{id: "140", type: 1, pips: ["r"]}],
        [{id: "150", type: 3, pips: ["t", "r"]}],
        [{id: "160", type: 1, pips: []}],
        [{id: "170", type: 1, pips: ["r", "l"]}],
        [{id: "180", type: 1, pips: []}],
        [{id: "190", type: 0, pips: []}],
        [{id: "1100", type: 2, direction: "l", pips: []}]
      ],
      [
        [{id: "200", type: 0, pips: []}],
        [{id: "210", type: 2, direction: "b", pips: ["r"]}],
        [{id: "220", type: 1, pips: ["t"]}],
        [{id: "230", type: 1, pips: []}],
        [{id: "240", type: 0, pips: []}],
        [{id: "250", type: 3, pips: []}],
        [{id: "260", type: 0, pips: []}],
        [{id: "270", type: 1, pips: ["r"]}],
        [{id: "280", type: 1, pips: ["t", "r", "b"]}],
        [{id: "290", type: 2, direction: "b", pips: []}],
        [{id: "2100", type: 0, pips: []}]
      ],
      [
        [{id: "300", type: 0, pips: []}],
        [{id: "310", type: 0, pips: []}],
        [{id: "320", type: 1, pips: ["r"]}],
        [{id: "330", type: 1, pips: ["t", "r", "b"]}],
        [{id: "340", type: 1, pips: []}],
        [{id: "350", type: 3, pips: ["l"]}],
        [{id: "360", type: 1, pips: []}],
        [{id: "370", type: 1, pips: ["t"]}],
        [{id: "380", type: 1, pips: []}],
        [{id: "390", type: 0, pips: []}],
        [{id: "3100", type: 0, pips: []}]
      ],
      [
        [{id: "400", type: 0, pips: []}],
        [{id: "410", type: 0, pips: []}],
        [{id: "420", type: 0, pips: []}],
        [{id: "430", type: 1, pips: []}],
        [{id: "440", type: 1, pips: ["r", "l"]}],
        [{id: "450", type: 2, direction: "t", pips: ["r"]}],
        [{id: "460", type: 1, pips: ["t", "r"]}],
        [{id: "470", type: 1, pips: []}],
        [{id: "480", type: 0, pips: []}],
        [{id: "490", type: 0, pips: []}],
        [{id: "4100", type: 0, pips: []}]
      ]
    ],
    cellCount: 35,
    popAt: 3
  },
  {
    cells: [
      [
        [{id: "000", type: 0, pips: []}],
        [{id: "010", type: 0, pips: []},{id: "011", type: 2, direction: "b", connected: "b", pips: []}],
        [{id: "020", type: 0, pips: []}],
        [{id: "030", type: 0, pips: []}],
        [{id: "040", type: 0, pips: []}],
        [{id: "050", type: 0, pips: []}],
        [{id: "060", type: 0, pips: []}]
      ],
      [
        [{id: "100", type: 0, pips: []}, {id: "101", type: 2, direction: "r", connected: "r", pips: []}],
        [{id: "110", type: 4, connectors: ["t", "r", "l"], pips: []}],
        [{id: "120", type: 0, pips: []}, {id: "121", type: 1, connected: "l", pips: []}],
        [{id: "130", type: 0, pips: []}],
        [{id: "140", type: 0, pips: []}, {id: "141", type: 1, connected: "r", pips: []}],
        [{id: "150", type: 4, connectors: ["r", "b", "l"], pips: []}],
        [{id: "160", type: 0, pips: []}, {id: "161", type: 2, direction: "l", connected: "l", pips: []}]
      ],
      [
        [{id: "200", type: 0, pips: []}],
        [{id: "210", type: 0, pips: []}],
        [{id: "220", type: 0, pips: []}],
        [{id: "230", type: 0, pips: []}],
        [{id: "240", type: 0, pips: []}],
        [{id: "250", type: 0, pips: []}, {id: "251", type: 2, direction: "t", connected: "t", pips: []}],
        [{id: "260", type: 0, pips: []}]
      ]
    ],
    cellCount: 8,
    popAt: 2
  },
  {
    cells: [
      [
        [{id: "000", type: 0, pips: []}],
        [{id: "010", type: 0, pips: []}, {id: "011", type: 2, direction: "b", connected: "b", pips: []}],
        [{id: "020", type: 0, pips: []}],
        [{id: "030", type: 0, pips: []}],
        [{id: "040", type: 0, pips: []}],
        [{id: "050", type: 0, pips: []}, {id: "051", type: 2, direction: "l", connected: "b", pips: []}],
        [{id: "060", type: 0, pips: []}]
      ],
      [
        [{id: "100", type: 0, pips: []}, {id: "101", type: 1, connected: "r", pips: []}],
        [{id: "110", type: 4, connectors: ["t", "b", "l"], pips: []}],
        [{id: "120", type: 0, pips: []}],
        [{id: "130", type: 0, pips: []}],
        [{id: "140", type: 0, pips: []}],
        [{id: "150", type: 4, connectors: ["t", "r", "b"], pips: []}],
        [{id: "160", type: 0, pips: []}, {id: "161", type: 1, connected: "l", pips: []}]
      ],
      [
        [{id: "200", type: 0, pips: []}],
        [{id: "210", type: 0, pips: []}, {id: "211", type: 2, direction: "t", connected: "t", pips: []}],
        [{id: "220", type: 0, pips: []}, {id: "221", type: 2, direction: "r", connected: "r", pips: []}],
        [{id: "230", type: 4, connectors: ["r", "b", "l"], pips: []}],
        [{id: "240", type: 0, pips: []}, {id: "241", type: 2, direction: "l", connected: "l", pips: []}],
        [{id: "250", type: 0, pips: []}, {id: "251", type: 2, direction: "t", connected: "t", pips: []}],
        [{id: "260", type: 0, pips: []}]
      ],
      [
        [{id: "300", type: 0, pips: []}],
        [{id: "310", type: 0, pips: []}],
        [{id: "320", type: 0, pips: []}],
        [{id: "330", type: 0, pips: []}, {id: "331", type: 2, direction: "t", connected: "t", pips: []}],
        [{id: "340", type: 0, pips: []}],
        [{id: "350", type: 0, pips: []}],
        [{id: "360", type: 0, pips: []}]
      ]
    ],
    cellCount: 12,
    popAt: 3
  },
  {
    cells: [
      [
        [{id: "000", type: 0, pips: []}],
        [{id: "010", type: 0, pips: []}],
        [{id: "020", type: 0, pips: []}],
        [{id: "030", type: 2, direction: "b", pips: []}],
        [{id: "040", type: 1, pips: []}],
        [{id: "050", type: 2, direction: "b", pips: ["l"]}],
        [{id: "060", type: 0, pips: []}],
        [{id: "070", type: 0, pips: []}],
        [{id: "080", type: 0, pips: []}]
      ],
      [
        [{id: "100", type: 1, pips: ["r"]}],
        [{id: "110", type: 1, pips: ["b"]}],
        [{id: "120", type: 1, pips: []}],
        [{id: "130", type: 1, pips: ["t"]}],
        [{id: "140", type: 0, pips: []}],
        [{id: "150", type: 1, pips: ["r"]}],
        [{id: "160", type: 1, pips: []}],
        [{id: "170", type: 1, pips: ["l"]}],
        [{id: "180", type: 1, pips: ["l"]}]
      ],
      [
        [{id: "200", type: 1, pips: ["r", "b"]}],
        [{id: "210", type: 1, pips: []}],
        [{id: "220", type: 1, pips: ["t"]}],
        [{id: "230", type: 0, pips: []}],
        [{id: "240", type: 4, connectors: ["b"], pips: []}],
        [{id: "250", type: 0, pips: []}],
        [{id: "260", type: 1, pips: ["r"]}],
        [{id: "270", type: 1, pips: ["t"]}],
        [{id: "280", type: 1, pips: ["l"]}]
      ],
      [
        [{id: "300", type: 2, direction: "r", pips: []}],
        [{id: "310", type: 1, pips: ["l"]}],
        [{id: "320", type: 1, pips: ["t", "l"]}],
        [{id: "330", type: 1, pips: []}],
        [{id: "340", type: 0, pips: []}, {id: "341", type: 3, connected: "t", pips: []}],
        [{id: "350", type: 1, pips: ["b"]}],
        [{id: "360", type: 1, pips: ["r"]}],
        [{id: "370", type: 1, pips: ["r"]}],
        [{id: "380", type: 1, pips: ["t"]}]
      ],
      [
        [{id: "400", type: 0, pips: []}],
        [{id: "410", type: 0, pips: []}],
        [{id: "420", type: 0, pips: []}],
        [{id: "430", type: 1, pips: ["t"]}],
        [{id: "440", type: 2, direction: "t", pips: ["r", "l"]}],
        [{id: "450", type: 1, pips: []}],
        [{id: "460", type: 0, pips: []}],
        [{id: "470", type: 0, pips: []}],
        [{id: "480", type: 0, pips: []}]
      ]
    ],
    cellCount: 30,
    popAt: 2
  }/*,
  {
    cells: [
      [
        [{id: "000", type: 0, pips: []}],
        [{id: "010", type: 0, pips: []}],
        [{id: "020", type: 0, pips: []}],
        [{id: "030", type: 0, pips: []}],
        [{id: "040", type: 0, pips: []}],
        [{id: "050", type: 0, pips: []}],
        [{id: "060", type: 0, pips: []}],
        [{id: "070", type: 0, pips: []}],
        [{id: "080", type: 0, pips: []}]
      ],
      [
        [{id: "100", type: 0, pips: []}],
        [{id: "110", type: 0, pips: []}],
        [{id: "120", type: 0, pips: []}],
        [{id: "130", type: 0, pips: []}],
        [{id: "140", type: 0, pips: []}],
        [{id: "150", type: 0, pips: []}],
        [{id: "160", type: 0, pips: []}],
        [{id: "170", type: 0, pips: []}],
        [{id: "180", type: 0, pips: []}]
      ],
      [
        [{id: "200", type: 0, pips: []}],
        [{id: "210", type: 0, pips: []}],
        [{id: "220", type: 0, pips: []}],
        [{id: "230", type: 0, pips: []}],
        [{id: "240", type: 0, pips: []}],
        [{id: "250", type: 0, pips: []}],
        [{id: "260", type: 0, pips: []}],
        [{id: "270", type: 0, pips: []}],
        [{id: "280", type: 0, pips: []}]
      ],
      [
        [{id: "300", type: 0, pips: []}],
        [{id: "310", type: 0, pips: []}],
        [{id: "320", type: 0, pips: []}],
        [{id: "330", type: 0, pips: []}],
        [{id: "340", type: 0, pips: []}],
        [{id: "350", type: 0, pips: []}],
        [{id: "360", type: 0, pips: []}],
        [{id: "370", type: 0, pips: []}],
        [{id: "380", type: 0, pips: []}]
      ]
    ],
    cellCount: 26,
    popAt: 4
  }*/
];
levels.forEach((v1) => {v1.cells.forEach((v2) => {v2.forEach((v3) => {v3.forEach((v4) => {v4.shown = v4.type != 0})})})});


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
        cellData = user.levelState.cells[getCellIdInfo(id, "r")][getCellIdInfo(id, "c")][getCellIdInfo(id, "l")],
        click = getClick(cellData.type);
    if (click.includes("click") && cellData.type == 4) {rotateCell(id); updateLevel()}
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
    else if (click.includes("click") && cellData.type != 4) {moveCell(id, cellData.direction)}
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
      classStr = (data.type == 0) ? "voidCell" : "blankCell",
      plate, layer = getCellIdInfo(data.id, "l");
  switch(data.type) {
    case 0: break;
    case 1: break;
    case 2:
      /*plate = document.createElement("div");
      plate.setAttribute("class", data.direction+"Arrow");
      cell.appendChild(plate);*/
      break;
    case 3:
      for (let i=1; i<=4; i++) {
        plate = document.createElement("div");
        plate.setAttribute("class", "bomb"+i);
        cell.appendChild(plate);
      }
      break;
    case 4:
      plate = document.createElement("div");
      plate.setAttribute("class", "wheel");
      cell.appendChild(plate);
      /*data.connectors.forEach((value) => {
        plate = document.createElement("div");
        plate.setAttribute("class", value+"Wheel");
        cell.appendChild(plate);
      });*/
      break;
  }
  let lowestCell = di(getCellIdInfo(data.id, "r")+""+getCellIdInfo(data.id, "c")+""+(getCellIdInfo(data.id, "l")-1));
  if (layer > 0) {classStr += " layeredCell"}
  cell.setAttribute("class", classStr);
  cell.setAttribute("id", data.id);
  return cell;
}
function moveCell(cell, direction) {
  let r = getCellIdInfo(cell, "r"),
      c = getCellIdInfo(cell, "c"),
      l = getCellIdInfo(cell, "l"),
      el = di(cell),
      re = el.getBoundingClientRect(),
      x1 = Math.floor(re.x+re.width/2),
      y1 = Math.floor(re.y+re.height/2),
      x2 = (direction == "t") ? x1 : (direction == "r") ? window.innerWidth+5000 : (direction == "b") ? x1 : (direction == "l") ? -5000 : null,
      y2 = (direction == "t") ? -5000 : (direction == "r") ? y1 : (direction == "b") ? window.innerHeight+5000 : (direction == "l") ? y1 : null;
  
  if (canMoveCell(cell, direction)) {
    //Move Animation
    let topOrLeft = (direction == "l" || direction == "r") ? "left" : "top",
        frameDistance = (direction == "t" || direction == "l") ? -1*24 : 1*24,
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
      c = getCellIdInfo(cell, "c");
  
  //Is the lane clear?
  let cellsInLaneCount = 0;
  switch(direction) {
    case "t":
      for (let i=r-1; i>=0; i--) {
        let breakLoop = false;
        for (let l=0; l<levelData.cells[i][c].length; l++) {
          let data = levelData.cells[i][c][l];
          if (data.type == 3 && cellsInLaneCount == 0) {breakLoop = true}
          if (data.shown && data.type != 0 && data.type != 3) {
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
        for (let l=0; l<levelData.cells[r][i].length; l++) {
          let data = levelData.cells[r][i][l];
          if (data.type == 3 && cellsInLaneCount == 0) {breakLoop = true}
          if (data.shown && data.type != 0 && data.type != 3) {
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
        for (let l=0; l<levelData.cells[i][c].length; l++) {
          let data = levelData.cells[i][c][l];
          if (data.type == 3 && cellsInLaneCount == 0) {breakLoop = true}
          if (data.shown && data.type != 0 && data.type != 3) {
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
        for (let l=0; l<levelData.cells[r][i].length; l++) {
          let data = levelData.cells[r][i][l];
          if (data.type == 3 && cellsInLaneCount == 0) {breakLoop = true}
          if (data.shown && data.type != 0 && data.type != 3) {
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
  if ((direction == "t" || direction == "b") && (getPipAt(cell, "l") >= 0 || getPipAt(cell, "r") >= 0 || getPipAt(r+""+(c-1)+"0", "r") >= 0 || getPipAt(r+""+(c+1)+"0", "l") >= 0)) {canMove = false}
  else if ((direction == "r" || direction == "l") && (getPipAt(cell, "t") >= 0 || getPipAt(cell, "b") >= 0 || getPipAt((r-1)+""+c+"0", "b") >= 0 || getPipAt((r+1)+""+c+"0", "t") >= 0)) {canMove = false}
  if (!canMove) {return false}
  
  return canMove;
}
function popCell(cell) {
  if (di(cell).style.opacity == "") {
    di(cell).style.opacity = 0;
    user.levelState.cellCount--;
    user.levelState.cells[getCellIdInfo(cell, "r")][getCellIdInfo(cell, "c")][getCellIdInfo(cell, "l")].shown = false;
    updateLevel();
  }
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
        cellAtvalue/* = getIdFromDirection(cell, value)*/,
        cellData/* = user.levelState.cells[getCellIdInfo(cellAtvalue, "r")][getCellIdInfo(cellAtvalue, "c")][getCellIdInfo(cellAtvalue, "l")]*/;
    
    let cellDatasAtvalue = user.levelState.cells[getCellIdInfo(getIdFromDirection(cell, value), "r")][getCellIdInfo(getIdFromDirection(cell, value), "c")];
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
    di(getCellIdInfo(cellAtdd, "r")+""+getCellIdInfo(cellAtdd, "c")+"0").appendChild(di(cellAtvalue));
    di(cellAtvalue).setAttribute("id", dr+""+dc+""+dl);
    
    user.levelState.cells[dr][dc].push(cellData);
    user.levelState.cells[dr][dc][user.levelState.cells[dr][dc].indexOf(cellData)].id = dr+""+dc+""+dl;
    user.levelState.cells[getCellIdInfo(cellAtvalue, "r")][getCellIdInfo(cellAtvalue, "c")].splice(user.levelState.cells[getCellIdInfo(cellAtvalue, "r")][getCellIdInfo(cellAtvalue, "c")].indexOf(cellData), 1);
    
    moved.push(dr+""+dc+""+dl);
  });
  moved.forEach((value) => {
    let wr = getCellIdInfo(value, "r"),
        wc = getCellIdInfo(value, "c");
    user.levelState.cells[wr][wc].forEach((value2, index) => {
      di(value2.id).setAttribute("id", wr+""+wc+""+index);
      user.levelState.cells[wr][wc][index].id = wr+""+wc+""+index;
    });
  });
  
  /*let r = getCellIdInfo(cell, "r"),
      c = getCellIdInfo(cell, "c"),
      l = getCellIdInfo(cell, "l"),
      loops = {
        1: ["t", "r", "b", "l"],
        2: ["tt", "rr", "bb", "ll"]
      };
  user.levelState.cells[r][c][l].connectors.forEach((value, index) => {
    let dd = loops[value.length][(typeof loops[value.length][loops[value.length].indexOf(value)+1] != "undefined") ? loops[value.length].indexOf(value)+1 : 0],
        id = getIdFromDirection(cell, dd),
        dr = getCellIdInfo(id, "r"),
        dc = getCellIdInfo(id, "c"),
        dl = getCellIdInfo(id, "l")+1,
        cellData = user.levelState.cells[getCellIdInfo(getIdFromDirection(cell, value), "r")][getCellIdInfo(getIdFromDirection(cell, value), "c")][getCellIdInfo(getIdFromDirection(cell, value), "l")];
    
    user.levelState.cells[r][c][l].connectors[index] = dd;
    di(id).appendChild(di(getIdFromDirection(cell, value)));
    di(getIdFromDirection(cell, value)).setAttribute("id", dr+""+dc+""+dl);
    
    user.levelState.cells[dr][dc].push(cellData);
    user.levelState.cells[dr][dc][user.levelState.cells[dr][dc].indexOf(cellData)].id = dr+""+dc+""+dl;
    user.levelState.cells[getCellIdInfo(cellData.id, "r")][getCellIdInfo(cellData.id, "c")].splice(user.levelState.cells[getCellIdInfo(cellData.id, "r")][getCellIdInfo(cellData.id, "c")].indexOf(cellData), 1);
  });*/
  /*
  let r = getCellIdInfo(cell, "r"),
      c = getCellIdInfo(cell, "c"),
      l = getCellIdInfo(cell, "l"),
      ids = {
        t: (r-1)+""+c+""+(user.levelState.cells[r-1][c].length-1),
        r: r+""+(c+1)+""+(user.levelState.cells[r][c+1].length-1),
        b: (r+1)+""+c+""+(user.levelState.cells[r+1][c].length-1),
        l: r+""+(c-1)+""+(user.levelState.cells[r][c-1].length-1),
        tt: (r-2)+""+c+""+(typeof user.levelState.cells[r+2] != "undefined") ? user.levelState.cells[r-2][c].length-1 : "0",
        rr: r+""+(c+2)+""+(typeof user.levelState.cells[r+2] != "undefined") ? user.levelState.cells[r][c+2].length-1 : "0",
        bb: (r+2)+""+c+""+(typeof user.levelState.cells[r+2] != "undefined") ? user.levelState.cells[r+2][c].length-1 : "0",
        ll: r+""+(c-2)+""+(typeof user.levelState.cells[r+2] != "undefined") ? user.levelState.cells[r][c-2].length-1 : "0"
      },
      loops = {
        1: ["t", "r", "b", "l"],
        2: ["tt", "rr", "bb", "ll"]
      };
      
  user.levelState.cells[r][c][0].connectors.forEach((value, index) => {
    let nextInLoop = loops[value.length][(typeof loops[value.length][loops[value.length].indexOf(value)+1] != "undefined") ? loops[value.length].indexOf(value)+1 : 0],
        dr = getCellIdInfo(ids[nextInLoop], "r"),
        dc = getCellIdInfo(ids[nextInLoop], "c"),
        cellData = user.levelState.cells[getCellIdInfo(ids[value], "r")][getCellIdInfo(ids[value], "c")][1];
    
    user.levelState.cells[r][c][0].connectors[index] = nextInLoop;
    di(dr+""+dc+"0").appendChild(di(ids[value]));
    di(ids[value]).setAttribute("id", ids[nextInLoop]);
    
    user.levelState.cells[dr][dc].push(cellData);
    user.levelState.cells[dr][dc][user.levelState.cells[dr][dc].indexOf(cellData)].id = ids[nextInLoop];
    user.levelState.cells[getCellIdInfo(ids[value], "r")][getCellIdInfo(ids[value], "c")].splice(user.levelState.cells[getCellIdInfo(ids[value], "r")][getCellIdInfo(ids[value], "c")].indexOf(cellData), 1);
  });
  if (user.levelState.cells[r][c][0].connectors[user.levelState.cells[r][c][0].connectors.length-1] == "r") {user.levelState.cells[r][c][0].connectors = getDirectionOrder(user.levelState.cells[r][c][0].connectors)}
  */
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
function addArrow(cell, direction, real) {
  let arrowAt = (!real) ? getArrowAt(cell, direction) : -1;
  if (arrowAt < 0) {
    let arrow = document.createElement("div");
    arrow.setAttribute("class", direction+"Arrow");
    arrow.setAttribute("id", cell+direction+"Arrow");
    di(cell).appendChild(arrow);
  }
}
function removeArrow(cell, direction) {
  let arrowAt = getArrowAt(cell, direction);
  if (arrowAt >= 0) {di(cell).removeChild(di(cell).childNodes[arrowAt])}
}
function addWheelX(cell, real) {
  let wheelXAt = (!real) ? getWheelXAt(cell) : -1;
  if (wheelXAt < 0) {
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
  let click;
  switch(type) {
    case 0: click = "none"; break;
    case 1: click = "swipe"; break;
    case 2: click = "click"; break;
    case 3: click = "none pop"; break; //"None"
    case 4: click = "click pop"; break;
  }
  return click;
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
      let cell = createCell(levels[level].cells[r][c][0]);
      for (let l=1; l<levels[level].cells[r][c].length; l++) {
        cell.appendChild(createCell(levels[level].cells[r][c][l]));
      }
      row.appendChild(cell);
    }
    di("tableContainer").appendChild(row);
  }
}
function updateLevel() {
  let cells = user.levelState.cells;
  
  for (let r=0; r<cells.length; r++) {
    for (let c=0; c<cells[r].length; c++) {
      for (let l=0; l<cells[r][c].length; l++) {
        
        //Update Pips
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
        
        //Update Arrows
        if (cells[r][c][l].type == 2) {
          /*let arrow = document.createElement("div");
          arrow.setAttribute("class", cells[r][c][l].direction+"Arrow");
          di(r+""+c+"0").appendChild(arrow);*/
          addArrow(r+""+c+""+l, cells[r][c][l].direction);
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
            if (value.length == 1) {
              if (cells[conR][conC][conL].shown && cells[r][c][l].shown) {addWheelLine(r+""+c+""+l, value)} else {removeWheelLine(r+""+c+""+l, value)}
            }
            if (value.length == 2) {
              
            }
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
updateLevel();
