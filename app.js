let cheese = 0;
let drills = 0;
let spaceSuit= 0;
let cheeseTrain = 0;
let cyborg = 0;
let total = 0
let auto = 0
let perSecond = 0;

let clickUpgrades ={
  drills:{
    price: 50,
    quantity: 0,
    multiplier: 5,
  },
  spaceSuit: {
    price: 350,
    quantity: 0,
    multiplier: 10,
  },

};

let autoUpgrades ={
  cheeseTrain:{
    price: 1000,
    quantity: 0,
    multiplier: 50,
  },
  cyborg: {
    price: 5000,
    quantity: 0,
    multiplier: 150,
  },

};

function buyDrill(type){
  let upgrade = clickUpgrades[type];
  if(upgrade.price > cheese){
    console.log('not enough')
  }else{
    cheese-=upgrade.price;
    drills++;
    upgrade.price = Math.floor(upgrade.price*1.5);
    total+=upgrade.multiplier
    update();
  }
}

function buySuit(type){
  let upgrade = clickUpgrades[type];
  if(upgrade.price > cheese){
    console.log('not enough')
  }else{
    cheese-=upgrade.price;
    spaceSuit++;
    upgrade.price = Math.floor(upgrade.price*1.5);
    total+=upgrade.multiplier
    update();
  }
}

function buyTrain(type){
  let upgrade = autoUpgrades[type];
  if(upgrade.price > cheese){
    console.log('not enough')
  }else{
    cheese-=upgrade.price;
    cheeseTrain++;
    upgrade.price = Math.floor(upgrade.price*2);
    auto+=upgrade.multiplier
    update();
  }
}

function buyCyborg(type){
  let upgrade = autoUpgrades[type];
  if(upgrade.price > cheese){
    console.log('not enough')
  }else{
    cheese-=upgrade.price;
    cyborg++;
    upgrade.price = Math.floor(upgrade.price*3);
    auto+=upgrade.multiplier
    update();
  }
}

function collectAutoUpgrades(){
  cheese+=auto;
  update()
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function mine(){
  cheese++;
  cheese+=total
  update()
}

function update(){
  document.getElementById('cheese').innerHTML=`Cheese: ${cheese}`

  document.getElementById('drill').innerHTML=`Cheese Drills: ${drills}`
  document.getElementById('suit').innerHTML=`Space Suits: ${spaceSuit}`
  document.getElementById('train').innerHTML=`Delivery Trains: ${cheeseTrain}`
  document.getElementById('cyborg').innerHTML=`Cheese Cyborgs: ${cyborg}`

  document.getElementById('d-price').innerHTML=`Price: ${clickUpgrades.drills.price}`
  document.getElementById('sp-price').innerHTML=`Price: ${clickUpgrades.spaceSuit.price}`
  document.getElementById('t-price').innerHTML=`Price: ${autoUpgrades.cheeseTrain.price}`
  document.getElementById('c-price').innerHTML=`Price: ${autoUpgrades.cyborg.price}`

  document.getElementById('click').innerHTML=`Click Multiplier: +${total}`
  
  perSecond = Math.floor(auto/3)
  document.getElementById('cps').innerHTML=`Cheese per second: ${perSecond}`
}

startInterval()
update()