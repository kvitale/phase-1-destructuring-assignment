const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const farmSounds = farmAnimals.split(" ")

const [moo, neigh, baa, oink, cluck] = farmSounds

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const farmNames = farmAnimals.split(" ")
let noHorse = [...farmNames.splice(1,1)]
let [bessie, dolly, babe, little] = farmNames
console.log(farmNames)

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const farmColors = farmAnimals.split(" ")
let noChicken = [...farmColors.splice(-1,), ...farmColors.splice(1,1)]
let [blackAndWhite, black, pink] = farmColors
console.log(farmColors)
// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
// let noIndigo = colors.splice(-5, 1)
const [r, o, y, g, b, , v] = colors
console.log([r, o, y, g, b, , v])

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const [, , , , , indg, ] = colors
console.log([, , , , , indg, ])
// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
let {muppetName, color, song, job, partner} = muppet
console.log(muppetName)
console.log(color)
console.log(song)
console.log(job)
console.log(partner)
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
let {  song2, song4, } = nestedMuppet.album.theMuppetMovie
let {nestedJob, nestedPartner} = nestedMuppet
console.log(song2)
console.log(song4)
console.log(nestedJob)
console.log(nestedPartner)