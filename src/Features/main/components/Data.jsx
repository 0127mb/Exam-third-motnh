import good from "../assets/good.png";
import sword from "../assets/sowrd.png";
import bad from "../assets/bad.png";
import rochket from "../assets/rochket.png";
import up from "../assets/up.png";
import down from "../assets/down.png";
import award from "../assets/award.png";
import energy from "../assets/energy.png";
import rabbit from "../assets/rabbit.png";
import withoutcolor from "../assets/witoutcolor.png";
import img from '../assets/img.png'
const data = [
  {
    id: 1,
    goodimg: good,
    mememberofchempionship: "Abdusattorov Nodirbek",
    between: sword,
    mememberofchempionship2: "magnus carlsen",
    badimg: bad,
    information: rochket,
    informationtext: "Bullet",
  },
  {
    id: 2,
    king: "👑",
    img:img,
    name: "Magnus carlsen",
    up: up,
    number: 12,
    total: 2861,
    plus: "+102",
  },
  {
    id: 3,
    king: null,
    name: "Nikaru hakamura",
    up: down,
    number: 12,
    total: 2850,
    plus: "-11",
  },
  {
    id: 4,
    king: null,
    name: "Magnus carlsen",
    up: up,
    number: 27,
    total: 2842,
    plus: "+18",
  },
  {
    id: 5,
    king: null,
    name: "Sindarov Javokhir",
    up: null,
    number: null,
    total: 2839,
    plus: "+41",
  },
  {
    id: 6,
    king: null,
    name: "Yakubboev Nodirbek",
    up: up,
    number: 5,
    total: 2839,
    plus: "+19",
  },
  {
    id: 7,
    award: award,
    memember: "Shohrukh Bakhtiyarov",
    overall: 2861,
    score: 2,
    typeofgame: rabbit,
    textname: 'Rappid' ,
    gone: 56,
    date: "12 Dekabr",
    fail: withoutcolor,
    failmemember:'Nikaru hakamura',
    owerall2:(2768),
    failscore:0
  },
    {
    id: 8,
    award: award,
    memember: "Abdusattorov Nodirbek",
    overall: (2604),
    score: 1,
    typeofgame: rochket,
      textname:'bullet',
    gone: 20,
    date: "21 Noyabr",
    fail: withoutcolor,
    failmemember:'Ding Liren',
    owerall2:(2312),
    failscore:0
  },  {
    id: 9,
    award: award,
    memember: "Aronian Levon",
    overall: (2402),
    score: 0,
    typeofgame: energy,
      textname:'Blitz',
    gone: 19,
    date: "19 Oktabr",
    fail: award,
    failmemember:'Sindarov Javokhir',
    owerall2:(2641),
    failscore:2
  },  {
    id: 9,
    award: award,
    memember: "Caruana Fabiano",
    overall: (2402),
    score: 1,
    typeofgame: energy,
      textname:'Blitz',
    gone: 56,
    date: "2 Sentabr",
    fail: withoutcolor,
    failmemember:'Rapport Richard',
    owerall2:(2641),
    failscore:1
  },  {
    id: 10,
    award: award,
    memember: "Yakubboev Nodirbek",
    overall: (2402),
    score: 4,
    typeofgame: rochket,
      textname:'Bullet',
    gone: 56,
    date: "12 Dekabr",
    fail: withoutcolor,
    failmemember:'Gelfand Boris',
    owerall2:(2641),
    failscore:1
  },
];

export default data;
