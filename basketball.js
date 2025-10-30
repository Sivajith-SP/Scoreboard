let countElhome = document.getElementById("count-el-home")
let countElguest = document.getElementById("count-el-guest")
let resetEl = document.getElementById("reset-el")
let count1=0
let count2=0

function add1home() {
         
         count1 = count1 + 1
         countElhome.textContent = count1

}


function add2home() {
         
         count1 = count1 + 2
         countElhome.textContent = count1

}

function add3home() {
         
         count1 = count1 + 3
         countElhome.textContent = count1

}


function add1guest() {
         
         count2 = count2+ 1
         countElguest.textContent = count2

}


function add2guest() {
         
         count2 = count2 + 2
         countElguest.textContent = count2

}


function add3guest() {
         
         count2 = count2 + 3
         countElguest.textContent = count2

}

function reset() {

         count1=0
         count2=0
         countElhome.textContent = count1
         countElguest.textContent = count2

}