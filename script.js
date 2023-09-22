
let kamil = {}
const nr1 =(elo1,elo2)=>{
elo3 = elo1/10
  kamil= {elo2,elo3}
  console.log(kamil)

}

let kamil1 = {}
const nr2 =(elo1,elo2)=>{
  
  elo3 = elo1/10
  kamil1= {elo2,elo3}
  console.log(kamil)

  console.log(elo1,elo2)
}


const getSuperHero2 = (id) => {
let gero = []
const heroimage2=document.getElementById('hero Image2')
  fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.2.0/api/all.json')
 .then(response=>response.json())
  .then(json =>{
    gero = json
     let twoj = {
    "id": 732,
    "name": "Twoj stary",
    "slug": "732-zoom",
    "powerstats": {
      "intelligence": 0,
      "strength": 10,
      "speed": 10,
      "durability": 28,
      "power": 10,
      "combat": 100
    },
    "appearance": {
      "gender": "Male",
      "race": null,
      "height": [
        "6'1",
        "185 cm"
      ],
      "weight": [
        "181 lb",
        "81 kg"
      ],
      "eyeColor": "Red",
      "hairColor": "Brown"
    },
    "biography": {
      "fullName": "Hunter Zolomon",
      "alterEgos": "No alter egos found.",
      "aliases": [
        "-"
      ],
      "placeOfBirth": "-",
      "firstAppearance": "Flash Secret Files #3",
      "publisher": "DC Comics",
      "alignment": "bad"
    },
    "work": {
      "occupation": "-",
      "base": "Keystone City, Kansas"
    },
    "connections": {
      "groupAffiliation": "Secret Society of Super Villains, formerly Keystone Police Department, F.B.I.",
      "relatives": "Ashley Zolomon (ex-wife)"
    },
    "images": {
      "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/731-zoom.jpg",
      "sm": "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100069953044057&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FPanMenel%2F&tbnid=UuZZEmFTuYfSIM&vet=12ahUKEwjfjcTsnK76AhVK4oUKHRmlC54QMygQegUIARDdAQ..i&docid=vUZ49VkPTHzRwM&w=304&h=304&q=menel&ved=2ahUKEwjfjcTsnK76AhVK4oUKHRmlC54QMygQegUIARDdAQ",
      "md": "https://static1.s123-cdn-static-a.com/uploads/4880578/800_crop_602d4edce8c50_602d4ed4b1f5b.jpg",
      "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/731-zoom.jpg"
    }
  }
    gero.push(twoj)
  // console.log(gero[563])
 
     const name=`<h2>${gero[id].name}</h2>`
   const power=`<h2>${gero[id]}</h2>`
   
   
    let img = gero[id].images.md
 heroimage2.innerHTML= `${name}${getstatshtml(gero[id])}<img src = "${img}"/>`
nr1(gero[id].powerstats.speed+gero[id].powerstats.strength+gero[id].powerstats.intelligence+gero[id].powerstats.durability+gero[id].powerstats.power+gero[id].powerstats.combat,gero[id].name)
   })
}
const getSuperHero = (id) => {
let gero = []
const heroimage2=document.getElementById('hero Image2')
const heroimage=document.getElementById('hero Image')
  fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.2.0/api/all.json')
 .then(response=>response.json())
  .then(json =>{
    gero = json
     let twoj = {
    "id": 732,
    "name": "Twoj stary",
    "slug": "732-zoom",
    "powerstats": {
      "intelligence": 0,
      "strength": 10,
      "speed": 10,
      "durability": 28,
      "power": 10,
      "combat": 100
    },
    "appearance": {
      "gender": "Male",
      "race": null,
      "height": [
        "6'1",
        "185 cm"
      ],
      "weight": [
        "181 lb",
        "81 kg"
      ],
      "eyeColor": "Red",
      "hairColor": "Brown"
    },
    "biography": {
      "fullName": "Hunter Zolomon",
      "alterEgos": "No alter egos found.",
      "aliases": [
        "-"
      ],
      "placeOfBirth": "-",
      "firstAppearance": "Flash Secret Files #3",
      "publisher": "DC Comics",
      "alignment": "bad"
    },
    "work": {
      "occupation": "-",
      "base": "Keystone City, Kansas"
    },
    "connections": {
      "groupAffiliation": "Secret Society of Super Villains, formerly Keystone Police Department, F.B.I.",
      "relatives": "Ashley Zolomon (ex-wife)"
    },
    "images": {
      "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/731-zoom.jpg",
      "sm": "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100069953044057&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FPanMenel%2F&tbnid=UuZZEmFTuYfSIM&vet=12ahUKEwjfjcTsnK76AhVK4oUKHRmlC54QMygQegUIARDdAQ..i&docid=vUZ49VkPTHzRwM&w=304&h=304&q=menel&ved=2ahUKEwjfjcTsnK76AhVK4oUKHRmlC54QMygQegUIARDdAQ",
      "md": "https://static1.s123-cdn-static-a.com/uploads/4880578/800_crop_602d4edce8c50_602d4ed4b1f5b.jpg",
      "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/731-zoom.jpg"
    }
  }
    gero.push(twoj)
  // console.log(gero[563])
 
     const name=`<h2>${gero[id].name}</h2>`
   const power=`<h2>${gero[id]}</h2>`
   
   
    let img = gero[id].images.md
 heroimage.innerHTML= `${name}${getstatshtml(gero[id])}<img src = "${img}"/>`
nr2(gero[id].powerstats.speed+gero[id].powerstats.strength+gero[id].powerstats.intelligence+gero[id].powerstats.durability+gero[id].powerstats.power+gero[id].powerstats.combat,gero[id].name)
   })
}

let newHero  = document.getElementById('hero')
let newHero2  = document.getElementById('hero2')
newHero.onclick=()=> {getSuperHero(Math.floor(Math.random()*563))
}
newHero2.onclick=()=> {getSuperHero2(Math.floor(Math.random()*563))
}
const input= document.getElementById('input')
const search= document.getElementById('search')
const input2= document.getElementById('input2')
const search2= document.getElementById('search2')
search.onclick= ()=>{
  let hero = 'A-Bomb'
  
  
  getSearchSuperHero(input.value)
}
const getSearchSuperHero = (siema)=>{
 let gero = []

  fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.2.0/api/all.json')
 .then(response=>response.json())
  .then(json =>{
    gero = json
   let twoj = {
    "id": 732,
    "name": "Twoj stary",
    "slug": "732-zoom",
    "powerstats": {
      "intelligence": 50,
      "strength": 10,
      "speed": 100,
      "durability": 28,
      "power": 100,
      "combat": 28
    },
    "appearance": {
      "gender": "Male",
      "race": null,
      "height": [
        "6'1",
        "185 cm"
      ],
      "weight": [
        "181 lb",
        "81 kg"
      ],
      "eyeColor": "Red",
      "hairColor": "Brown"
    },
    "biography": {
      "fullName": "Hunter Zolomon",
      "alterEgos": "No alter egos found.",
      "aliases": [
        "-"
      ],
      "placeOfBirth": "-",
      "firstAppearance": "Flash Secret Files #3",
      "publisher": "DC Comics",
      "alignment": "bad"
    },
    "work": {
      "occupation": "-",
      "base": "Keystone City, Kansas"
    },
    "connections": {
      "groupAffiliation": "Secret Society of Super Villains, formerly Keystone Police Department, F.B.I.",
      "relatives": "Ashley Zolomon (ex-wife)"
    },
    "images": {
      "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/731-zoom.jpg",
      "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/731-zoom.jpg",
      "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/731-zoom.jpg",
      "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/731-zoom.jpg"
    }
  }
    gero.push(twoj)
  console.log(gero)
    
  let elo 
   
    for (var i =0;i<564;++i)
      {
        if (gero[i].name == siema){
          elo = i 
         
        }
         
      } 
    getSuperHero(elo)
    })

  
}

  const getstatshtml= (character) => {
 const stats = Object.keys(character.powerstats).map(stat => {
   return `<p>${stat}: ${character.powerstats[stat]}</p>`
 }) 
  console.log(stats.join(' '))

return stats.join(' ')
} 
  


let playButton = document.getElementById('play')
playButton.onclick=()=>{
console.log("elo")




document.addEventListener('keydown', function(e){
if (e.key=="q"){console.log(kamil.elo2)
 player1.pl1AttackPl2()
  }if (e.key=="a"){
  player1.pl1Heal()
  }if (e.key=="p"){
 player1.pl2AttackPl1()
  }if (e.key=="l"){
  player1.pl2Heal()
  }


  
})

let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')
let attack2 = document.getElementById('attack1')
let heal1 = document.getElementById('heal1')
let attack1 = document.getElementById('attack2')
let heal2 = document.getElementById('heal2')
let rest = document.getElementById('rest')
  rest.onclick= ()=> player1.reset()
attack1.onclick= ()=> player1.pl1AttackPl2()
heal1.onclick= ()=> player1.pl1Heal()
 attack2.onclick= ()=> player1.pl2AttackPl1() 
  heal2.onclick= ()=>player1.pl2Heal()
class Game {
  constructor(name,health,hit) {
    // Flag that indicates if the game is over or not
  this.theEnd = false;
   
    this.player1 = {
      name:name ,
      health:health ,
      hit:hit 
    };

    this.player2 = {
    name:name ,
      health:health ,
      hit:hit
    };
  }

  //Starts the game and logs out the status of players
  start() {
console.log("elo")
  }

  //Console log the winner of the battle
  declareWinner(name) {
console.log("elo")
    resultDiv.innerText=`win ${name}` 
  }

  //If player 1 or player 2 health is below 0
  //Mark theEnd true, to stop the game
  checkTheEnd() {
if(player1.player1.health<0){
  player1.theEnd = true
  player1.declareWinner(player1.player1.name)
}if(player2.player2.health<0){
  player1.theEnd = true
  player1.declareWinner(player2.player2.name)
}
    
console.log("elo")
  }

  //Console log the name and health of both players
  //Ex: Player 1: 100 | Player 2: 50
  playerStatus() {
    
  if(player1.theEnd == false){
 p1HealthDiv.innerText = player1.player1.health.toFixed(0)
  p2HealthDiv.innerText = player2.player2.health.toFixed(0)}
    player1.checkTheEnd()
console.log("elo")
  }

  //Reset health of player 1 and player 2 to 100
  //Reset theEnd to false
  reset() {console.log(kamil.elo2)
console.log(player1.player1.name)
 player1.player1.health = 100
 player2.player2.health = 100
    player1.theEnd = false
    player1.playerStatus()
    resultDiv.innerText= " "
  }

  //Generate a random number between 1 and 10 using Math.random()
  //Use that number to decrease health from player 2
  pl1AttackPl2() {
console.log("elo")
    if(player2.player2.health>0 &player1.theEnd == false){
player2.player2.health-= player1.player1.hit
    document.getElementById('p2attack').play()
    player1.playerStatus()}
  }

  //Generate a random number between 1 and 10 using Math.random()
  //Use that number to decrease health from player 1
  pl2AttackPl1() {
    
console.log("elo")
    if(player1.player1.health>0&player1.theEnd == false){
    player1.player1.health-= player2.player2.hit
      document.getElementById('p2attack').play()
    player1.playerStatus()}
  }

  //Generate a random number between 1 and 5 using Math.random()
  //Use that number to increase health of player 1
  pl1Heal() {
console.log("elo")
    if(player1.player1.health<100&player1.theEnd == false){
    player1.player1.health+= 15
      document.getElementById('p1heal').play()
    player1.playerStatus()}
  }

  //Generate a random number between 1 and 5 using Math.random()
  //Use that number to increase health of player 2
  pl2Heal() {
console.log("elo")
   if(player2.player2.health<100&player1.theEnd == false){
    player2.player2.health+= 15
     document.getElementById('p1heal').play()
    player1.playerStatus()}
    
  }
}

// Initialize the class here
// Call the start function of the game


let player2 = new Game(kamil1.elo2, 100, kamil1.elo3)
let player1 = new Game(kamil.elo2, 100,kamil.elo3)
// ** Save original Player Data **
}