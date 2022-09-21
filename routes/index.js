var extractColors = require('extract-colors'), makeColorAccessible = require('make-color-accessible'), path = require('path');


const src1 =  './public/images/image 1.png';
const src2 =  './public/images/image 2.png';
const src3 =  './public/images/image 3.png';
const src4 =  './public/images/image 4.png';
const src5 =  './public/images/image 5.png';
const src6 =  './public/images/image 6.png';
const src7 =  './public/images/image 7.png';
const src8 =  './public/images/image 8.png';
const src9 =  './public/images/image 9.png';
const src10 =  './public/images/image 10.png';
const src11 =  './public/images/image 11.png';
const src12 =  './public/images/image 12.png';
const src13 =  './public/images/image 13.png';
const src14 =  './public/images/image 14.png';
const src15 =  './public/images/image 15.png';
const src16 =  './public/images/image 16.png';
const src17 =  './public/images/image 17.png';

const src = [src1, src2, src3, src4, src5, src6, src7,src8, src9, src10,src11, src12, src13,src14, src15, src16, src17]

const options = {
  pixels: 10000,
  distance: 1,
  saturationImportance: 0.1,
  splitPower: 16
}


exports.index = async function(req, res){
  const posts = await Promise.all(
    src.map(async (srcRoute) => {
      let color = await extractColors.extractColors(srcRoute, options)
        .then((response) => response)
        .catch(console.error);
      let colorHex = color[0].hex;

      return {src: srcRoute.replace('public/', ''), color: makeColorAccessible(colorHex)};
    })
  )
  res.render('index', {posts});

} 


/*
let colorList = [];

async function myfunction(srcRoute) {
  let color = extractColors.extractColors(srcRoute, options)
      .then((response) => response)
      .catch(console.error);
  return color;
}

// Here we wait for the myfunction to finish
// and then returns a promise that'll be waited for aswell
// It's useless to wait the myfunction to finish before to return
// we can simply returns a promise that will be resolved later

// useless async here
async function start(srcRoute) {
  // useless await here
  return await myfunction(srcRoute);
}

const posts = await Promise.all(
  src.map(async (srcRoute) => {
    let color = extractColors.extractColors(srcRoute, options)
      .then((response) => response)
      .catch(console.error);
  })
)


exports.index = function(req, res){
  res.render('index');
  } 
/*
// Call start
const test = (async() => {
  console.log('before start');

  for(let srcRoute of src)
 {
  let color = await start(srcRoute);
  let colorHex = color[0].hex;
  colorList.push({srcRoute, colorHex});

 } 
 return colorList;
})();
let testA = await test;
  exports.index = function(req, res){
  res.render('index');
  } 
*/
