let numberConteiner=document.querySelector('.raiting-state__number-container');
let rateNumber=document.querySelector('.thankyou-state__result--number');
let submitButton= document.querySelector('.raiting-state__button');
let raitingstate=document.querySelector('.raiting-state');
let thankyoustate=document.querySelector('.thankyou-state');

numberConteiner.addEventListener('click',e=>{
    let numberSelected=e.target.innerText;
    rateNumber.innerText = numberSelected;
    if(numberSelected > 0 || numberSelected <=5 ){

        submitButton.addEventListener('click',()=>{
            raitingstate.style.display='none';
            thankyoustate.style.display='flex';
        })
    }
});