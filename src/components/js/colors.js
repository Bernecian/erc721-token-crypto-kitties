// adapted from https://github.com/arcticfrostgaming/lumio

const colorObj = {
  10: { color: '#241C1C', name: 'Rough Coal 1', },
  11: { color: '#322726', name: 'Rough Coal 2', },
  12: { color: '#443533', name: 'Rough Coal 3', },
  13: { color: '#6A5A4E', name: 'Rough Coal 4', },
  14: { color: '#796A58', name: 'Rough Coal 5', },
  15: { color: '#462D24', name: 'Soft Earth 1', },
  16: { color: '#52352A', name: 'Soft Earth 2', },
  17: { color: '#5D392A', name: 'Soft Earth 3', },
  18: { color: '#68402F', name: 'Soft Earth 4', },
  19: { color: '#7A4830', name: 'Soft Earth 5', },
  20: { color: '#885735', name: 'Soft Earth 6', },
  21: { color: '#976538', name: 'Soft Earth 7', },
  22: { color: '#A3743B', name: 'Soft Earth 8', },
  23: { color: '#AF873E', name: 'Soft Earth 9', },
  24: { color: '#7E625E', name: 'Hard Metal 1', },
  25: { color: '#8C7168', name: 'Hard Metal 2', },
  26: { color: '#9D8275', name: 'Hard Metal 3', },
  27: { color: '#A9917E', name: 'Hard Metal 4', },
  28: { color: '#817B60', name: 'Piquant Olive 1', },
  29: { color: '#958E6F', name: 'Piquant Olive 2', },
  30: { color: '#A9A37E', name: 'Piquant Olive 3', },
  31: { color: '#CCC9AA', name: 'Piquant Olive 4', },
  32: { color: '#CCAFAA', name: 'Cold Snow 1', },
  33: { color: '#D8C0B6', name: 'Cold Snow 2', },
  34: { color: '#E3D0C4', name: 'Cold Snow 3', },
  35: { color: '#E9DBCC', name: 'Cold Snow 4', },
  36: { color: '#04598F', name: 'Clear Water 1', },
  37: { color: '#046397', name: 'Clear Water 2', },
  38: { color: '#046CA5', name: 'Clear Water 3', },
  39: { color: '#0480A4', name: 'Clear Water 4', },
  40: { color: '#1398A9', name: 'Clear Water 5', },
  41: { color: '#26A4AD', name: 'Clear Water 6', },
  42: { color: '#36B4B0', name: 'Clear Water 7', },
  43: { color: '#4DC4B1', name: 'Clear Water 8', },
  44: { color: '#54DEB2', name: 'Clear Water 9', },
  45: { color: '#553A47', name: 'Hot Flame 1', },
  46: { color: '#784452', name: 'Hot Flame 2', },
  47: { color: '#904851', name: 'Hot Flame 3', },
  48: { color: '#A84E4E', name: 'Hot Flame 4', },
  49: { color: '#C1604D', name: 'Hot Flame 5', },
  50: { color: '#D47055', name: 'Hot Flame 6', },
  51: { color: '#59313B', name: 'Coccoa Bean 1', },
  52: { color: '#6F393A', name: 'Coccoa Bean 2', },
  53: { color: '#80483D', name: 'Coccoa Bean 3', },
  54: { color: '#93573F', name: 'Coccoa Bean 4', },
  55: { color: '#A36A41', name: 'Coccoa Bean 5', },
  56: { color: '#B28142', name: 'Coccoa Bean 6', },
  57: { color: '#843C35', name: 'Tropical Wood 1', },
  58: { color: '#9C4C3D', name: 'Tropical Wood 2', },
  59: { color: '#AD6143', name: 'Tropical Wood 3', },
  60: { color: '#BA7845', name: 'Tropical Wood 4', },
  61: { color: '#C99147', name: 'Tropical Wood 5', },
  62: { color: '#A26846', name: 'Fine Sand 1', },
  63: { color: '#B67D4F', name: 'Fine Sand 2', },
  64: { color: '#BF8953', name: 'Fine Sand 3', },
  65: { color: '#C59759', name: 'Fine Sand 4', },
  66: { color: '#CBA65B', name: 'Fine Sand 5', },
  67: { color: '#945F3C', name: 'Sweet Banana 1', },
  68: { color: '#B28142', name: 'Sweet Banana 2', },
  69: { color: '#CDA544', name: 'Sweet Banana 3', },
  70: { color: '#ECCF49', name: 'Sweet Banana 4', },
  71: { color: '#8D492B', name: 'Calm Sunset 1', },
  72: { color: '#9C522F', name: 'Calm Sunset 2', },
  73: { color: '#AD5E33', name: 'Calm Sunset 3', },
  74: { color: '#BF6B3E', name: 'Calm Sunset 4', },
  75: { color: '#CF7B43', name: 'Calm Sunset 5', },
  76: { color: '#505B1E', name: 'Living Forest 1', },
  77: { color: '#626B20', name: 'Living Forest 2', },
  78: { color: '#777922', name: 'Living Forest 3', },
  79: { color: '#898B23', name: 'Living Forest 4', },
  80: { color: '#9D9F28', name: 'Living Forest 5', },
  81: { color: '#1F6C6B', name: 'Deep Sea 1', },
  82: { color: '#20806A', name: 'Deep Sea 2', },
  83: { color: '#469870', name: 'Deep Sea 3', },
  84: { color: '#75B47A', name: 'Deep Sea 4', },
  85: { color: '#8CC47B', name: 'Deep Sea 5', },
  86: { color: '#483F50', name: 'Wild Berries 1', },
  87: { color: '#664D6E', name: 'Wild Berries 2', },
  88: { color: '#7F5583', name: 'Wild Berries 3', },
  89: { color: '#975E95', name: 'Wild Berries 4', },
  90: { color: '#AB629C', name: 'Wild Berries 5', },
  91: { color: '#ffffff', name: 'Greys 1', },
  92: { color: '#f1f1f1', name: 'Greys 2', },
  93: { color: '#dedede', name: 'Greys 3', },
  94: { color: '#c6c6c6', name: 'Greys 4', },
  95: { color: '#a7a7a7', name: 'Greys 5', },
  96: { color: '#878787', name: 'Greys 6', },
  97: { color: '#686868', name: 'Greys 7', },
  98: { color: '#474747', name: 'Greys 8', },
  99: { color: '#222222', name: 'Greys 9', },
};

module.exports = {
  colorObj,
};