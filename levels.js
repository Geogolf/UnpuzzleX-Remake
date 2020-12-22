const levels = [
  {
    cells: [
      [
        []
      ]
    ],
    cellCount: 0,
    popAt: 0
  },
  {
    cells: [
      [
        [{id: "000", type: [1], pips: ["r"]}],
        [{id: "010", type: [1], pips: []}]
      ]
    ],
    cellCount: 2,
    popAt: 0
  },
  {
    cells: [
      [
        [{id: "000", type: [1], pips: []}],
        [{id: "010", type: [1], pips: ["l", "r"]}],
        [{id: "020", type: [1], pips: []}]
      ],
      [
        [{id: "100", type: [0], pips: []}],
        [{id: "110", type: [1], pips: ["t", "b"]}],
        [{id: "120", type: [0], pips: []}]
      ],
      [
        [{id: "200", type: [0], pips: []}],
        [{id: "210", type: [1], pips: []}],
        [{id: "220", type: [0], pips: []}]
      ]
    ],
    cellCount: 5,
    popAt: 0
  },
  {
    cells: [
      [
        [{id: "000", type: [1], pips: ["b"]}],
        [{id: "010", type: [1], pips: []}],
        [{id: "020", type: [0], pips: []}],
        [{id: "030", type: [0], pips: []}],
        [{id: "040", type: [0], pips: []}],
        [{id: "050", type: [0], pips: []}],
        [{id: "060", type: [0], pips: []}],
        [{id: "070", type: [1], pips: []}],
        [{id: "080", type: [1], pips: ["b"]}]
      ],
      [
        [{id: "100", type: [1], pips: ["b"]}],
        [{id: "110", type: [1], pips: ["t", "l"]}],
        [{id: "120", type: [0], pips: []}],
        [{id: "130", type: [1], pips: []}],
        [{id: "140", type: [1], pips: ["r", "l"]}],
        [{id: "150", type: [1], pips: []}],
        [{id: "160", type: [0], pips: []}],
        [{id: "170", type: [1], pips: ["t", "r", "b"]}],
        [{id: "180", type: [1], pips: []}]
      ],
      [
        [{id: "200", type: [1], pips: []}],
        [{id: "210", type: [1], pips: ["t"]}],
        [{id: "220", type: [0], pips: []}],
        [{id: "230", type: [0], pips: []}],
        [{id: "240", type: [0], pips: []}],
        [{id: "250", type: [0], pips: []}],
        [{id: "260", type: [0], pips: []}],
        [{id: "270", type: [1], pips: []}],
        [{id: "280", type: [1], pips: ["t"]}]
      ]
    ],
    cellCount: 15,
    popAt: 0
  },
  {
    cells: [
      [
        [{id: "000", type: [1], pips: []}],
        [{id: "010", type: [1], pips: ["b", "l"]}],
        [{id: "020", type: [0], pips: []}],
        [{id: "030", type: [0], pips: []}],
        [{id: "040", type: [0], pips: []}],
        [{id: "050", type: [0], pips: []}],
        [{id: "060", type: [0], pips: []}],
        [{id: "070", type: [1], pips: []}],
        [{id: "080", type: [1], pips: ["l"]}]
      ],
      [
        [{id: "100", type: [1], pips: []}],
        [{id: "110", type: [1], pips: ["r"]}],
        [{id: "120", type: [1], pips: []}],
        [{id: "130", type: [0], pips: []}],
        [{id: "140", type: [0], pips: []}],
        [{id: "150", type: [0], pips: []}],
        [{id: "160", type: [1], pips: []}],
        [{id: "170", type: [1], pips: ["l"]}],
        [{id: "180", type: [1], pips: ["t", "b", "l"]}]
      ],
      [
        [{id: "200", type: [1], pips: ["t", "r", "b"]}],
        [{id: "210", type: [1], pips: ["t"]}],
        [{id: "220", type: [0], pips: []}],
        [{id: "230", type: [0], pips: []}],
        [{id: "240", type: [1], pips: []}],
        [{id: "250", type: [0], pips: []}],
        [{id: "260", type: [0], pips: []}],
        [{id: "270", type: [1], pips: ["r"]}],
        [{id: "280", type: [1], pips: []}]
      ],
      [
        [{id: "300", type: [1], pips: []}],
        [{id: "310", type: [0], pips: []}],
        [{id: "320", type: [0], pips: []}],
        [{id: "330", type: [1], pips: []}],
        [{id: "340", type: [1], pips: ["t", "l"]}],
        [{id: "350", type: [1], pips: ["l"]}],
        [{id: "360", type: [0], pips: []}],
        [{id: "370", type: [0], pips: []}],
        [{id: "380", type: [1], pips: ["t"]}]
      ]
    ],
    cellCount: 20,
    popAt: 0
  },
  {
    cells: [
      [
        [{id: "000", type: [1], pips: ["r"]}],
        [{id: "010", type: [1], pips: []}],
        [{id: "020", type: [0], pips: []}],
        [{id: "030", type: [3], pips: []}],
        [{id: "040", type: [0], pips: []}],
        [{id: "050", type: [1], pips: []}],
        [{id: "060", type: [1], pips: ["b", "l"]}]
      ],
      [
        [{id: "100", type: [1], pips: ["t", "b"]}],
        [{id: "110", type: [2], direction: "r", pips: ["l"]}],
        [{id: "120", type: [0], pips: []}],
        [{id: "130", type: [3], pips: []}],
        [{id: "140", type: [0], pips: []}],
        [{id: "150", type: [2], direction: "l", pips: ["r"]}],
        [{id: "160", type: [1], pips: ["b"]}]
      ],
      [
        [{id: "200", type: [1], pips: ["r"]}],
        [{id: "210", type: [1], pips: []}],
        [{id: "220", type: [0], pips: []}],
        [{id: "230", type: [3], pips: []}],
        [{id: "240", type: [0], pips: []}],
        [{id: "250", type: [1], pips: ["r"]}],
        [{id: "260", type: [1], pips: []}]
      ]
    ],
    cellCount: 15,
    popAt: 3
  },
  {
    cells: [
      [
        [{id: "000", type: [1], pips: ["b"]}],
        [{id: "010", type: [1], pips: []}],
        [{id: "020", type: [1], pips: ["r", "b"]}],
        [{id: "030", type: [1], pips: []}],
        [{id: "040", type: [1], pips: ["b", "l"]}]
      ],
      [
        [{id: "100", type: [1], pips: ["r"]}],
        [{id: "110", type: [3], pips: ["t"]}],
        [{id: "120", type: [1], pips: []}],
        [{id: "130", type: [1], pips: []}],
        [{id: "140", type: [1], pips: ["b", "l"]}]
      ],
      [
        [{id: "200", type: [1], pips: ["r", "b"]}],
        [{id: "210", type: [1], pips: []}],
        [{id: "220", type: [3], pips: ["r", "b"]}],
        [{id: "230", type: [1], pips: []}],
        [{id: "240", type: [1], pips: ["l"]}]
      ],
      [
        [{id: "300", type: [1], pips: ["r"]}],
        [{id: "310", type: [1], pips: []}],
        [{id: "320", type: [1], pips: ["b", "l"]}],
        [{id: "330", type: [3], pips: ["r"]}],
        [{id: "340", type: [1], pips: ["t", "b"]}]
      ],
      [
        [{id: "400", type: [1], pips: ["r"]}],
        [{id: "410", type: [1], pips: ["t"]}],
        [{id: "420", type: [1], pips: ["r"]}],
        [{id: "430", type: [1], pips: ["t"]}],
        [{id: "440", type: [1], pips: []}]
      ]
    ],
    cellCount: 25,
    popAt: 3
  },
  {
    cells: [
      [
        [{id: "000", type: [0], pips: []}],
        [{id: "010", type: [0], pips: []}],
        [{id: "020", type: [0], pips: []}],
        [{id: "030", type: [2], direction: "b", pips: ["b"]}],
        [{id: "040", type: [2], direction: "b", pips: []}],
        [{id: "050", type: [2], direction: "b", pips: ["b"]}],
        [{id: "060", type: [0], pips: []}],
        [{id: "070", type: [0], pips: []}],
        [{id: "080", type: [0], pips: []}]
      ],
      [
        [{id: "100", type: [0], pips: []}],
        [{id: "110", type: [1], pips: []}],
        [{id: "120", type: [1], pips: ["l"]}],
        [{id: "130", type: [1], pips: []}],
        [{id: "140", type: [1], pips: ["l"]}],
        [{id: "150", type: [1], pips: ["b"]}],
        [{id: "160", type: [1], pips: ["r"]}],
        [{id: "170", type: [1], pips: []}],
        [{id: "180", type: [0], pips: []}]
      ],
      [
        [{id: "200", type: [0], pips: []}],
        [{id: "210", type: [0], pips: []}],
        [{id: "220", type: [1], pips: ["t"]}],
        [{id: "230", type: [1], pips: []}],
        [{id: "240", type: [1], pips: ["t", "b", "l"]}],
        [{id: "250", type: [1], pips: ["r"]}],
        [{id: "260", type: [1], pips: ["t"]}],
        [{id: "270", type: [0], pips: []}],
        [{id: "280", type: [0], pips: []}]
      ],
      [
        [{id: "300", type: [2], direction: "r", pips: []}],
        [{id: "310", type: [0], pips: []}],
        [{id: "320", type: [1], pips: ["t", "r"]}],
        [{id: "330", type: [3], pips: []}],
        [{id: "340", type: [3], pips: []}],
        [{id: "350", type: [3], pips: ["t", "r"]}],
        [{id: "360", type: [1], pips: ["b"]}],
        [{id: "370", type: [0], pips: []}],
        [{id: "380", type: [2], direction: "l", pips: []}]
      ],
      [
        [{id: "400", type: [0], pips: []}],
        [{id: "410", type: [0], pips: []}],
        [{id: "420", type: [1], pips: []}],
        [{id: "430", type: [2], direction: "t", pips: ["r", "l"]}],
        [{id: "440", type: [1], pips: []}],
        [{id: "450", type: [2], direction: "t", pips: ["t"]}],
        [{id: "460", type: [1], pips: []}],
        [{id: "470", type: [0], pips: []}],
        [{id: "480", type: [0], pips: []}]
      ]
    ],
    cellCount: 27,
    popAt: 3
  },
  {
    cells: [
      [
        [{id: "000", type: [1], pips: []}],
        [{id: "010", type: [0], pips: []}],
        [{id: "020", type: [0], pips: []}],
        [{id: "030", type: [1], pips: ["b"]}],
        [{id: "040", type: [1], pips: ["l"]}],
        [{id: "050", type: [1], pips: ["r"]}],
        [{id: "060", type: [1], pips: []}],
        [{id: "070", type: [1], pips: ["b"]}],
        [{id: "080", type: [0], pips: []}],
        [{id: "090", type: [0], pips: []}],
        [{id: "0100", type: [1], pips: ["b"]}]
      ],
      [
        [{id: "100", type: [2], direction: "r", pips: ["t"]}],
        [{id: "110", type: [0], pips: []}],
        [{id: "120", type: [1], pips: []}],
        [{id: "130", type: [1], pips: ["r", "b"]}],
        [{id: "140", type: [1], pips: ["r"]}],
        [{id: "150", type: [3], pips: ["t", "r"]}],
        [{id: "160", type: [1], pips: []}],
        [{id: "170", type: [1], pips: ["r", "l"]}],
        [{id: "180", type: [1], pips: []}],
        [{id: "190", type: [0], pips: []}],
        [{id: "1100", type: [2], direction: "l", pips: []}]
      ],
      [
        [{id: "200", type: [0], pips: []}],
        [{id: "210", type: [2], direction: "b", pips: ["r"]}],
        [{id: "220", type: [1], pips: ["t"]}],
        [{id: "230", type: [1], pips: []}],
        [{id: "240", type: [0], pips: []}],
        [{id: "250", type: [3], pips: []}],
        [{id: "260", type: [0], pips: []}],
        [{id: "270", type: [1], pips: ["r"]}],
        [{id: "280", type: [1], pips: ["t", "r", "b"]}],
        [{id: "290", type: [2], direction: "b", pips: []}],
        [{id: "2100", type: [0], pips: []}]
      ],
      [
        [{id: "300", type: [0], pips: []}],
        [{id: "310", type: [0], pips: []}],
        [{id: "320", type: [1], pips: ["r"]}],
        [{id: "330", type: [1], pips: ["t", "r", "b"]}],
        [{id: "340", type: [1], pips: []}],
        [{id: "350", type: [3], pips: ["l"]}],
        [{id: "360", type: [1], pips: []}],
        [{id: "370", type: [1], pips: ["t"]}],
        [{id: "380", type: [1], pips: []}],
        [{id: "390", type: [0], pips: []}],
        [{id: "3100", type: [0], pips: []}]
      ],
      [
        [{id: "400", type: [0], pips: []}],
        [{id: "410", type: [0], pips: []}],
        [{id: "420", type: [0], pips: []}],
        [{id: "430", type: [1], pips: []}],
        [{id: "440", type: [1], pips: ["r", "l"]}],
        [{id: "450", type: [2], direction: "t", pips: ["r"]}],
        [{id: "460", type: [1], pips: ["t", "r"]}],
        [{id: "470", type: [1], pips: []}],
        [{id: "480", type: [0], pips: []}],
        [{id: "490", type: [0], pips: []}],
        [{id: "4100", type: [0], pips: []}]
      ]
    ],
    cellCount: 35,
    popAt: 3
  },
  {
    cells: [
      [
        [{id: "000", type: [0], pips: []}],
        [{id: "010", type: [0], pips: []},{id: "011", type: [2], direction: "b", connected: "b", pips: []}],
        [{id: "020", type: [0], pips: []}],
        [{id: "030", type: [0], pips: []}],
        [{id: "040", type: [0], pips: []}],
        [{id: "050", type: [0], pips: []}],
        [{id: "060", type: [0], pips: []}]
      ],
      [
        [{id: "100", type: [0], pips: []}, {id: "101", type: [2], direction: "r", connected: "r", pips: []}],
        [{id: "110", type: [4], connectors: ["t", "r", "l"], pips: []}],
        [{id: "120", type: [0], pips: []}, {id: "121", type: [1], connected: "l", pips: []}],
        [{id: "130", type: [0], pips: []}],
        [{id: "140", type: [0], pips: []}, {id: "141", type: [1], connected: "r", pips: []}],
        [{id: "150", type: [4], connectors: ["r", "b", "l"], pips: []}],
        [{id: "160", type: [0], pips: []}, {id: "161", type: [2], direction: "l", connected: "l", pips: []}]
      ],
      [
        [{id: "200", type: [0], pips: []}],
        [{id: "210", type: [0], pips: []}],
        [{id: "220", type: [0], pips: []}],
        [{id: "230", type: [0], pips: []}],
        [{id: "240", type: [0], pips: []}],
        [{id: "250", type: [0], pips: []}, {id: "251", type: [2], direction: "t", connected: "t", pips: []}],
        [{id: "260", type: [0], pips: []}]
      ]
    ],
    cellCount: 8,
    popAt: 2
  },
  {
    cells: [
      [
        [{id: "000", type: [0], pips: []}],
        [{id: "010", type: [0], pips: []}, {id: "011", type: [2], direction: "b", connected: "b", pips: []}],
        [{id: "020", type: [0], pips: []}],
        [{id: "030", type: [0], pips: []}],
        [{id: "040", type: [0], pips: []}],
        [{id: "050", type: [0], pips: []}, {id: "051", type: [2], direction: "l", connected: "b", pips: []}],
        [{id: "060", type: [0], pips: []}]
      ],
      [
        [{id: "100", type: [0], pips: []}, {id: "101", type: [1], connected: "r", pips: []}],
        [{id: "110", type: [4], connectors: ["t", "b", "l"], pips: []}],
        [{id: "120", type: [0], pips: []}],
        [{id: "130", type: [0], pips: []}],
        [{id: "140", type: [0], pips: []}],
        [{id: "150", type: [4], connectors: ["t", "r", "b"], pips: []}],
        [{id: "160", type: [0], pips: []}, {id: "161", type: [1], connected: "l", pips: []}]
      ],
      [
        [{id: "200", type: [0], pips: []}],
        [{id: "210", type: [0], pips: []}, {id: "211", type: [2], direction: "t", connected: "t", pips: []}],
        [{id: "220", type: [0], pips: []}, {id: "221", type: [2], direction: "r", connected: "r", pips: []}],
        [{id: "230", type: [4], connectors: ["r", "b", "l"], pips: []}],
        [{id: "240", type: [0], pips: []}, {id: "241", type: [2], direction: "l", connected: "l", pips: []}],
        [{id: "250", type: [0], pips: []}, {id: "251", type: [2], direction: "t", connected: "t", pips: []}],
        [{id: "260", type: [0], pips: []}]
      ],
      [
        [{id: "300", type: [0], pips: []}],
        [{id: "310", type: [0], pips: []}],
        [{id: "320", type: [0], pips: []}],
        [{id: "330", type: [0], pips: []}, {id: "331", type: [2], direction: "t", connected: "t", pips: []}],
        [{id: "340", type: [0], pips: []}],
        [{id: "350", type: [0], pips: []}],
        [{id: "360", type: [0], pips: []}]
      ]
    ],
    cellCount: 12,
    popAt: 3
  },
  {
    cells: [
      [
        [{id: "000", type: [0]}],
        [{id: "010", type: [0]}],
        [{id: "020", type: [0]}],
        [{id: "030", type: [2], direction: "b"}],
        [{id: "040", type: [1]}],
        [{id: "050", type: [2], direction: "b", pips: ["l"]}],
        [{id: "060", type: [0]}],
        [{id: "070", type: [0]}],
        [{id: "080", type: [0]}]
      ],
      [
        [{id: "100", type: [1], pips: ["r"]}],
        [{id: "110", type: [1], pips: ["b"]}],
        [{id: "120", type: [1]}],
        [{id: "130", type: [1], pips: ["t"]}],
        [{id: "140", type: [0]}],
        [{id: "150", type: [1], pips: ["r"]}],
        [{id: "160", type: [1]}],
        [{id: "170", type: [1], pips: ["l"]}],
        [{id: "180", type: [1], pips: ["l"]}]
      ],
      [
        [{id: "200", type: [1], pips: ["r", "b"]}],
        [{id: "210", type: [1]}],
        [{id: "220", type: [1], pips: ["t"]}],
        [{id: "230", type: [0]}],
        [{id: "240", type: [4], connectors: ["b"]}],
        [{id: "250", type: [0], pips: []}],
        [{id: "260", type: [1], pips: ["r"]}],
        [{id: "270", type: [1], pips: ["t"]}],
        [{id: "280", type: [1], pips: ["l"]}]
      ],
      [
        [{id: "300", type: [2], direction: "r"}],
        [{id: "310", type: [1], pips: ["l"]}],
        [{id: "320", type: [1], pips: ["t", "l"]}],
        [{id: "330", type: [1]}],
        [{id: "340", type: [0]}, {id: "341", type: [3], connected: "t"}],
        [{id: "350", type: [1], pips: ["b"]}],
        [{id: "360", type: [1], pips: ["r"]}],
        [{id: "370", type: [1], pips: ["r"]}],
        [{id: "380", type: [1], pips: ["t"]}]
      ],
      [
        [{id: "400", type: [0]}],
        [{id: "410", type: [0]}],
        [{id: "420", type: [0]}],
        [{id: "430", type: [1], pips: ["t"]}],
        [{id: "440", type: [2], direction: "t", pips: ["r", "l"]}],
        [{id: "450", type: [1]}],
        [{id: "460", type: [0]}],
        [{id: "470", type: [0]}],
        [{id: "480", type: [0]}]
      ]
    ],
    cellCount: 30,
    popAt: 2
  },
  {
    cells: [
      [
        [{id: "000", type: [1], pips: ["r"]}],
        [{id: "010", type: [1]}],
        [{id: "020", type: [0]}, {id: "021", type: [2], direction: "b", connected: "b"}],
        [{id: "030", type: [0]}],
        [{id: "040", type: [0]}],
        [{id: "050", type: [0]}],
        [{id: "060", type: [0]}, {id: "061", type: [2], direction: "b", connected: "b"}],
        [{id: "070", type: [1], pips: ["r"]}],
        [{id: "080", type: [1]}]
      ],
      [
        [{id: "100", type: [1], pips: ["t"]}],
        [{id: "110", type: [0]}, {id: "111", type: [2], direction: "l", connected: "r"}],
        [{id: "120", type: [4], connectors: ["t", "r", "l"]}],
        [{id: "130", type: [0]}, {id: "131", type: [2], direction: "r", connected: "l"}],
        [{id: "140", type: [0]}],
        [{id: "150", type: [0]}, {id: "151", type: [2], direction: "l", connected: "r"}],
        [{id: "160", type: [4], connectors: ["t", "r", "l"]}],
        [{id: "170", type: [0]}, {id: "171", type: [2], direction: "t", connected: "l"}],
        [{id: "180", type: [1], pips: ["t", "b"]}]
      ],
      [
        [{id: "200", type: [2], direction: "r", pips: ["t", "r"]}],
        [{id: "210", type: [1]}],
        [{id: "220", type: [1], pips: ["l"]}],
        [{id: "230", type: [0]}],
        [{id: "240", type: [4], connectors: ["b"]}],
        [{id: "250", type: [0]}],
        [{id: "260", type: [1]}],
        [{id: "270", type: [1], pips: ["r", "l"]}],
        [{id: "280", type: [1]}]
      ],
      [
        [{id: "300", type: [0]}],
        [{id: "310", type: [0]}],
        [{id: "320", type: [1]}],
        [{id: "330", type: [2], direction: "t", pips: ["l"]}],
        [{id: "340", type: [0]}, {id: "341", type: [3], connected: "t"}],
        [{id: "350", type: [1], pips: ["r"]}],
        [{id: "360", type: [1], pips: ["t"]}],
        [{id: "370", type: [0]}],
        [{id: "380", type: [0]}]
      ]
    ],
    cellCount: 26,
    popAt: 4
  },
  {
    cells: [
      [
        [{id: "000", type: [0]}],
        [{id: "010", type: [0]}],
        [{id: "020", type: [1]}],
        [{id: "030", type: [2], direction: "b", pips: ["l"]}],
        [{id: "040", type: [1], pips: ["b", "l"]}],
        [{id: "050", type: [0]}],
        [{id: "060", type: [0]}]
      ],
      [
        [{id: "100", type: [1]}],
        [{id: "110", type: [1], pips: ["b", "l"]}],
        [{id: "120", type: [1], pips: ["l"]}],
        [{id: "130", type: [0]}, {id: "131", type: [2], connected: "b", direction: "t"}],
        [{id: "140", type: [1], pips: ["r"]}],
        [{id: "150", type: [1]}],
        [{id: "160", type: [1], pips: ["l"]}]
      ],
      [
        [{id: "200", type: [2], direction: "r", pips: ["t"]}],
        [{id: "210", type: [1], pips: ["b"]}],
        [{id: "220", type: [0]}, {id: "221", type: [2], connected: "r", direction: "l"}],
        [{id: "230", type: [3, 4], connectors: ["t", "r", "b", "l"]}],
        [{id: "240", type: [0]}, {id: "241", type: [1], connected: "l"}],
        [{id: "250", type: [1]}],
        [{id: "260", type: [2], direction: "l", pips: ["b", "l"]}]
      ],
      [
        [{id: "300", type: [1], pips: ["r"]}],
        [{id: "310", type: [1]}],
        [{id: "320", type: [1], pips: ["l"]}],
        [{id: "330", type: [0]}, {id: "331", type: [1], connected: "t"}],
        [{id: "340", type: [1]}],
        [{id: "350", type: [1], pips: ["l"]}],
        [{id: "360", type: [1]}]
      ],
      [
        [{id: "400", type: [0]}],
        [{id: "410", type: [0]}],
        [{id: "420", type: [1], pips: ["t"]}],
        [{id: "430", type: [2], direction: "t"}],
        [{id: "440", type: [1], pips: ["l"]}],
        [{id: "450", type: [0]}],
        [{id: "460", type: [0]}]
      ]
    ],
    cellCount: 26,
    popAt: 1
  }
];
levels.forEach((v1) => {v1.cells.forEach((v2) => {v2.forEach((v3) => {v3.forEach((v4) => {v4.shown = v4.type != 0})})})});
