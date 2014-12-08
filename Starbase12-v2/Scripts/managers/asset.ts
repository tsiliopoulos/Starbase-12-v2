﻿module managers {
    // Asset Manager Class
    export class Assets {
        public static loader;
        public static atlas: createjs.SpriteSheet;
        public static bitMapFont: createjs.SpriteSheet;

        // PUBLIC STATIC METHODS

        // Initialize Image and Sound Assets
        public static init() {
            var assetManifest = [
                { id: "textureAtlas", src: "assets/images/atlas.png" },
                { id: "fontAtlas", src: "assets/fonts/fontAtlas.png" },
                { id: "particle", src: "assets/images/particle_base.png" },
                { id: "background", src: "assets/images/hexagon.jpg" },
                { id: "hudLS", src: "assets/images/hudLS.png" },
                { id: "hudRS", src: "assets/images/hudRS.png" },
                { id: "menuScreen", src: "assets/images/menuScreen.png" },
                { id: "introScreen", src: "assets/images/introScreen.png" },
                { id: "phaser", src: "assets/sounds/phaser.mp3" },
                { id: "disruptor", src: "assets/sounds/disruptor.mp3" },
                { id: "shield", src: "assets/sounds/shield.mp3" },
                { id: "photon", src: "assets/sounds/photon.mp3" },
                { id: "explosion", src: "assets/sounds/smallexplosion.mp3" },
                { id: "hull", src: "assets/sounds/hullHit.mp3" },
                { id: "redAlert", src: "assets/sounds/redAlert.mp3" }
            ];

            createjs.Sound.initializeDefaultPlugins();
            createjs.Sound.alternateExtensions = ["mp3"];
            this.loader = new createjs.LoadQueue(false);
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.loader.setUseXHR(false);
        }

        // Load Sprites and BitMap Fonts
        public static loadSprites() {
            // SpriteSheet Data Object
            var objectData = {
                "images": [this.loader.getResult("textureAtlas")],
                "frames": [
                    [56, 398, 36, 66],
                    [440, 104, 36, 66],
                    [394, 168, 36, 66],
                    [432, 172, 36, 66],
                    [158, 396, 36, 66],
                    [409, 240, 36, 66],
                    [196, 375, 36, 66],
                    [234, 375, 36, 66],
                    [272, 375, 36, 66],
                    [310, 371, 36, 66],
                    [348, 371, 36, 66],
                    [386, 371, 36, 66],
                    [2, 2, 180, 62],
                    [409, 308, 34, 38],
                    [394, 236, 10, 20],
                    [2, 66, 180, 62],
                    [2, 398, 52, 76],
                    [217, 322, 44, 51],
                    [263, 322, 44, 51],
                    [309, 322, 44, 47],
                    [355, 322, 44, 47],
                    [153, 361, 33, 33],
                    [196, 443, 33, 33],
                    [231, 443, 33, 33],
                    [266, 443, 33, 33],
                    [301, 443, 33, 33],
                    [336, 439, 33, 33],
                    [371, 439, 33, 33],
                    [406, 439, 33, 33],
                    [445, 308, 33, 33],
                    [445, 343, 33, 33],
                    [424, 378, 33, 33],
                    [441, 413, 33, 33],
                    [184, 2, 180, 62],
                    [2, 130, 180, 62],
                    [104, 194, 47, 101],
                    [104, 297, 47, 101],
                    [153, 194, 47, 101],
                    [184, 66, 180, 62],
                    [366, 2, 100, 100],
                    [184, 130, 62, 62],
                    [248, 130, 62, 62],
                    [202, 194, 62, 62],
                    [312, 130, 62, 62],
                    [266, 194, 62, 62],
                    [153, 297, 62, 62],
                    [2, 194, 100, 100],
                    [330, 194, 62, 62],
                    [94, 400, 62, 62],
                    [376, 104, 62, 62],
                    [217, 258, 62, 62],
                    [281, 258, 62, 62],
                    [345, 258, 62, 62],
                    [2, 296, 100, 100],
                    [468, 2, 10, 10]
                ],
                "animations": {

                    "shipBL": [0],
                    "shipBLR": [1],
                    "shipBLY": [2],
                    "shipBR": [3],
                    "shipBRR": [4],
                    "shipBRY": [5],
                    "shipTL": [6],
                    "shipTLR": [7],
                    "shipTLY": [8],
                    "shipTR": [9],
                    "shipTRR": [10],
                    "shipTRY": [11],
                    "backButton": [12],
                    "crosshair": [13],
                    "disruptorBolt": [14],
                    "instructionsButton": [15],
                    "klingon": [16],
                    "klingonBL": [17],
                    "klingonBR": [18],
                    "klingonTL": [19],
                    "klingonTR": [20],
                    "torpedo": {
                        frames: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                        speed: 0.2
                    },
                    "playAgainButton": [33],
                    "playButton": [34],
                    "ship": [35],
                    "shipR": [36],
                    "shipY": [37],
                    "startButton": [38],
                    "starbase": [39],
                    "starbaseBL": [40],
                    "starbaseBLR": [41],
                    "starbaseBLY": [42],
                    "starbaseBR": [43],
                    "starbaseBRR": [44],
                    "starbaseBRY": [45],
                    "starbaseR": [46],
                    "starbaseTL": [47],
                    "starbaseTLR": [48],
                    "starbaseTLY": [49],
                    "starbaseTR": [50],
                    "starbaseTRR": [51],
                    "starbaseTRY": [52],
                    "starbaseY": [53],
                    "tracer": [54]
                }
            };

            // BitMap Font SpriteSheet Data object
            var fontData = {
                "images": [this.loader.getResult("fontAtlas")],
                "frames": [

                    [50, 1658, 18, 76],
                    [2, 2, 75, 76],
                    [94, 272, 27, 90],
                    [2, 1649, 27, 90],
                    [94, 237, 31, 33],
                    [86, 535, 38, 76],
                    [70, 1747, 27, 76],
                    [2, 477, 38, 76],
                    [42, 552, 38, 76],
                    [2, 555, 38, 76],
                    [99, 1747, 17, 76],
                    [82, 613, 38, 76],
                    [42, 630, 38, 76],
                    [2, 633, 38, 76],
                    [82, 691, 38, 76],
                    [42, 708, 38, 76],
                    [2, 711, 38, 76],
                    [82, 769, 38, 76],
                    [42, 786, 38, 76],
                    [2, 789, 38, 76],
                    [2, 1492, 34, 76],
                    [77, 1499, 34, 76],
                    [82, 847, 38, 76],
                    [42, 864, 38, 76],
                    [50, 1736, 18, 76],
                    [2, 867, 38, 76],
                    [79, 2, 45, 77],
                    [74, 1577, 33, 76],
                    [2, 80, 58, 76],
                    [82, 925, 38, 76],
                    [42, 942, 38, 76],
                    [2, 945, 38, 76],
                    [2, 393, 40, 82],
                    [49, 237, 43, 77],
                    [82, 1003, 38, 76],
                    [46, 316, 41, 76],
                    [42, 1020, 38, 76],
                    [2, 236, 45, 76],
                    [62, 81, 58, 76],
                    [2, 314, 42, 77],
                    [2, 1023, 38, 76],
                    [80, 1173, 36, 76],
                    [2, 1741, 27, 90],
                    [71, 1655, 27, 90],
                    [40, 1190, 36, 76],
                    [2, 1259, 36, 76],
                    [78, 1251, 36, 76],
                    [2, 1101, 36, 77],
                    [40, 1268, 36, 76],
                    [40, 1424, 35, 76],
                    [89, 364, 36, 90],
                    [2, 1180, 36, 77],
                    [31, 1747, 17, 77],
                    [100, 1655, 23, 90],
                    [86, 456, 39, 77],
                    [31, 1658, 17, 77],
                    [2, 158, 54, 76],
                    [2, 1337, 36, 76],
                    [2, 1415, 36, 75],
                    [82, 1081, 36, 90],
                    [42, 1098, 36, 90],
                    [38, 1502, 34, 76],
                    [78, 1329, 36, 76],
                    [2, 1570, 33, 77],
                    [40, 1346, 36, 76],
                    [44, 394, 40, 77],
                    [58, 159, 54, 76],
                    [44, 473, 40, 77],
                    [78, 1407, 35, 90],
                    [37, 1580, 32, 76]
                ],
                "animations": {

                    "!": [0],
                    "%": [1],
                    "(": [2],
                    ")": [3],
                    "*": [4],
                    "0": [5],
                    "1": [6],
                    "2": [7],
                    "3": [8],
                    "4": [9],
                    ".": [10],
                    "5": [11],
                    "6": [12],
                    "7": [13],
                    "8": [14],
                    "9": [15],
                    "A": [16],
                    "B": [17],
                    "C": [18],
                    "D": [19],
                    "E": [20],
                    "F": [21],
                    "G": [22],
                    "H": [23],
                    "I": [24],
                    "J": [25],
                    "K": [26],
                    "L": [27],
                    "M": [28],
                    "N": [29],
                    "O": [30],
                    "P": [31],
                    "Q": [32],
                    "R": [33],
                    "S": [34],
                    "T": [35],
                    "U": [36],
                    "V": [37],
                    "W": [38],
                    "X": [39],
                    "Y": [40],
                    "Z": [41],
                    "[": [42],
                    "]": [43],
                    "a": [44],
                    "b": [45],
                    "c": [46],
                    "d": [47],
                    "e": [48],
                    "f": [49],
                    "g": [50],
                    "h": [51],
                    "i": [52],
                    "j": [53],
                    "k": [54],
                    "l": [55],
                    "m": [56],
                    "n": [57],
                    "o": [58],
                    "p": [59],
                    "q": [60],
                    "r": [61],
                    "s": [62],
                    "t": [63],
                    "u": [64],
                    "v": [65],
                    "w": [66],
                    "x": [67],
                    "y": [68],
                    "z": [69]
                }
            };

            this.atlas = new createjs.SpriteSheet(objectData);
            this.bitMapFont = new createjs.SpriteSheet(fontData);
        }

    }
} 