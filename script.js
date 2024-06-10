//your JS code here. If required.
let time = document.getElementById("time")
function dynTime(){
	let date = new Date()
	time.innerHTML = `${date.toLocaleString()}`
}
setInterval(dynTime,100)