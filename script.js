const ulList = document.getElementById('ul-list');
const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click',()=>{
    if(inputBox.value ===''){
        alert("you must write something")
    }
    else{
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        ulList.appendChild(list);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        list.appendChild(span); 
    }
    inputBox.value ='';
    saveData();
})

ulList.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
       e.target.classList.toggle('checked');
    saveData();
    }
    else{
        e.target.tagName==="span";
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",ulList.innerHTML);
}
function showData(){
    ulList.innerHTML = localStorage.getItem("data");
}
showData();

