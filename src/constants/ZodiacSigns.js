import aquarius from "../assets/aquarius.png";
import aries from "../assets/aries.png";
import cancer from "../assets/cancer.png";
import capricorn from "../assets/capricorn.png";
import fire from "../assets/fire.png";
import gemini from "../assets/gemini.png";
import jupiter from "../assets/jupiter.png";
import leo from "../assets/leo.png";
import libra from "../assets/libra.png";
import mercury from "../assets/mercury.png";
import pisces from "../assets/pisces.png";
import sagittarius from "../assets/sagittarius.png";
import saturn from "../assets/saturn.png";
import scorpio from "../assets/scorpio.png";
import taurus from "../assets/taurus.png";
import uranus from "../assets/uranus.png";
import virgo from "../assets/virgo.png";

const GetRandomSigns = () => {
 let signs = [
  aquarius,
  aries,
  cancer,
  capricorn,
  fire,
  gemini,
  jupiter,
  leo,
  libra,
  mercury,
  pisces,
  sagittarius,
  saturn,
  scorpio,
  taurus,
  uranus,
  virgo,
 ];

 const makeObj = (i, j, arr) => {
  let array = [];
  for (let iter = i; iter >= j; iter--) {
   let obj = {};
   obj.number = iter;
   obj.value = arr[99 - iter];
   array.push(obj);
  }
  return array;
 };

 const shuffle = (array) => array.sort(() => Math.random() - 0.5);
 let chillar = shuffle(signs);
 const magicSign = chillar[0];
 chillar.shift();
 let finalChillar = [];

 for (let i = 0; i < 100; i++) {
  if (i % 9 === 0) {
   finalChillar.push(magicSign);
  } else {
   finalChillar.push(chillar[Math.floor(Math.random() * chillar.length)]);
  }
 }
 finalChillar = finalChillar.reverse();
 let first = makeObj(99, 80, finalChillar);
 let second = makeObj(79, 60, finalChillar);
 let third = makeObj(59, 40, finalChillar);
 let fourth = makeObj(39, 20, finalChillar);
 let fifth = makeObj(19, 0, finalChillar);
 return { magicSign, chillars: [first, second, third, fourth, fifth] };
};

export default GetRandomSigns;
