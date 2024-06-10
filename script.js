//your JS code here. If required.
let time = document.getElementById("timer")
function dynTime(){
	let date = new Date()
	time.innerHTML = `${date.toLocaleString()}`
}
setInterval(dynTime,1000)