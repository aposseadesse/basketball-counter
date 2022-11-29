let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScoreBtnOne = document.getElementById("home-score-btn-1")

let homeScoreBtnTwo = document.getElementById("home-score-btn-2")

let homeScoreBtnThree = document.getElementById("home-score-btn-3")

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")

let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")

let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

function homeOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeTwo(){
    homeScore += 2   
    homeScoreEl.textContent = homeScore 
}

function homeThree(){
    homeScore += 3    
    homeScoreEl.textContent = homeScore
}



function guestOne(){
    guestScore += 1   
    guestScoreEl.textContent = guestScore 
}

function guestTwo(){
    guestScore += 2 
    guestScoreEl.textContent = guestScore   
}

function guestThree(){
    guestScore += 3    
    guestScoreEl.textContent = guestScore
}