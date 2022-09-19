const PI = 3.14159;

const sphereVolume = function (radius) {
let cubeRadius = (radius * radius * radius)
let volume = (cubeRadius * (4/3) * PI)
return volume
}


const coneVolume = function (radius, height) {
 let squareRadius = (radius * radius)
 let volume = (squareRadius * (1/3) * PI * height)
return volume
}


const prismVolume = function (height, width, depth) {
  let volume = (width * depth) * height
  return volume
}

const totalVolume = function (solids) {
  let totalVol = 0;
  for (let obj of solids) {
    if (obj.type === 'sphere') {
      totalVol += sphereVolume(obj.radius)
    }else if (obj.type === 'cone') {
      totalVol += coneVolume(obj.radius, obj.height)
    }else if (obj.type === 'prism') {
      totalVol += prismVolume(obj.height, obj.width, obj.depth)
    }
  }
  return totalVol;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]
