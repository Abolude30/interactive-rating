const submit = document.getElementById('submit');
const mainCard = document.getElementById('main-card');
const thanks = document.getElementById('thanks-card');


submit.addEventListener('click' , appear);

function appear() {
    // const submit = document.getElementById('submit');
    const mainCard = document.getElementById('main-card');
    const thanks = document.getElementById('thanks-card');

    if (thanks.style.display === "none") {
        thanks.style.display = "block";
        mainCard.style.display = "none"
    } else {
        thanks.style.display = "none";
        mainCard.style.display = "block";
    }
   
}




const rating = document.getElementsByClassName('btn');
const inPut = document.getElementById('input');

for( let i =0; i<rating.length; i++){
    rating[i].addEventListener("click", chg);
}

function chg(event) {
  const  rating = document.getElementsByClassName('btn');
  const  inPut = document.getElementById('input');
  let btn = event.target;
  let sel = btn.innerHTML;
    
for( let i =0; i<rating.length; i++){

    rating[i].addEventListener("click", function(event){
        // btn.style.backgroundColor = "hsl(216, 12%, 54%)";   
        // inPut.innerHTML = sel; 
        // inPut.style.fontStyle = "initial";

        if (btn !== rating[i]) {
            btn.style.backgroundColor = "hsl(216deg 6.77% 26.55%)";   
            inPut.innerHTML = sel; 
            inPut.style.fontStyle = "initial";
        } else {
            btn.style.backgroundColor = "hsl(216, 12%, 54%)";   
            inPut.innerHTML = sel; 
            inPut.style.fontStyle = "initial";
        }

        
    });
}
 
}





