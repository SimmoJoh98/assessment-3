const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

// If I have time, I'll go back and consolidate this to one function that checks for cases of target emission.
// Alternatively, again, if I have time, I'll do a fancier alert rather than using that annoying alert().
// Or frankly, If I'm feeling lazy, I won't do it and I'll honestly load up some Monster Hunter Rise to play... just being honest! :^)
function handleColor(){
    alert('Favorite Color(s): Green, Red, Black')
}
function handlePlace(){
    alert('Favorite Place: My room, at my computer. Or in the middle of the wilderness')
}
function handleRitual(){
    alert('Favorite Ritual: Raid / gaming night with the boys, and a few extra C O L D cans of mtn dew')
}





colorBtn.addEventListener('click', handleColor)
placeBtn.addEventListener('click', handlePlace)
ritualBtn.addEventListener('click', handleRitual)