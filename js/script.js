// -------subhanallah -----------
const subhanallahDis = document.getElementById('subhanallahDisplay')
const subhanallahIncrementBtn = document.getElementById('subhanallahIncrement')
const subhanallahDecrimentBtn = document.getElementById('subhanallahDecriment')

let subhanallahValue = 0;
subhanallahIncrementBtn.addEventListener('click' , function(){
    if (subhanallahValue ===33) {
        return alert ('Subhanallah, 1 Tasbih complete')
    }
    subhanallahValue += 1
    subhanallahDis.innerText = subhanallahValue
})

subhanallahDecrimentBtn.addEventListener('click' , function(){
    if (subhanallahValue ===0) {
        return alert ("You can't added nagative value ")
    }
    subhanallahValue -= 1
    subhanallahDis.innerText = subhanallahValue
})

// ----------alhamdulilah---------
const alhamdulilahDis = document.getElementById('alhamdulilahDisplay')
const alhamdulilahIncrementBtn = document.getElementById('alhamdulilahIncrement')
const alhamdulilahDecrimentBtn = document.getElementById('alhamdulilahDecriment')

let alhamdulilahValue =0;
alhamdulilahIncrementBtn.addEventListener('click' , function(){
    if (alhamdulilahValue ===33) {
        return alert ('Subhanallah, 1 Tasbih complete')
    }
    alhamdulilahValue += 1
    alhamdulilahDis.innerText = alhamdulilahValue
})

alhamdulilahDecrimentBtn.addEventListener('click' , function(){
    if (alhamdulilahValue ===0) {
        return alert ("You can't added nagative value ")
    }
    alhamdulilahValue -= 1
    alhamdulilahDis.innerText = alhamdulilahValue
})

// ----------allahu Akbar--------
const allahuAkbarDis = document.getElementById('allahuAkbarDisplay')
const allahuAkbarIncrementBtn = document.getElementById('allahuAkbarIncrement')
const allahuAkbarDecrimentBtn = document.getElementById('allahuAkbarDecriment')

let allahuAkbarValue =0;
allahuAkbarIncrementBtn.addEventListener('click' , function(){
    if (allahuAkbarValue ===33) {
        return alert ('Subhanallah, 1 Tasbih complete')
    }
    allahuAkbarValue += 1
    allahuAkbarDis.innerText = allahuAkbarValue
})

allahuAkbarDecrimentBtn.addEventListener('click' , function(){
    if (allahuAkbarValue ===0) {
        return alert ("You can't added nagative value ")
    }
    allahuAkbarValue -= 1
    allahuAkbarDis.innerText = allahuAkbarValue
})

// -------------reset Button-----------------
let reset = document.getElementById('resetBtn')
reset.addEventListener('click' ,function(){
    subhanallahValue= 0
    alhamdulilahValue= 0
    allahuAkbarValue = 0
    subhanallahDis.innerText =0
    alhamdulilahDis.innerText = 0
    allahuAkbarDis.innerText = 0
})


