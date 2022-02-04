function handleSubmit(evt) {
	evt.preventDefault();
	// logic here for actually taking the data somewhere.
	alert('form submitted');
	evt.target.reset() // emptying inputs after data is taken
}
// old default code
// let form = document.querySelector('form#contact');
// form.addEventListener('submit', handleSubmit);
document.querySelector('#contact').addEventListener('submit',handleSubmit)


function imgCompliment(){
	alert('You hovered over this, which means you are the smartest person on earth')
}
document.querySelector('#cat').addEventListener('mouseover',imgCompliment)