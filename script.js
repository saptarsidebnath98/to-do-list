
const inputBox = document.querySelector('.inputBox');
const inputBtn = document.querySelector('.inputBtn');
const listContainer = document.querySelector('.listContainer');

function addTask(){
    if(inputBox.value === ""){
        alert("content required!");
    }else{  
        let li = document.createElement("li");
        listContainer.appendChild(li);//
        li.textContent = inputBox.value;

        let cross = document.createElement('span');
        cross.innerHTML = `<img src="images/cross.png" class="crossBtn"></img>`;
        li.appendChild(cross);   
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === "IMG"){
        e.target.parentElement.parentElement.remove();
        console.log(e.target.tagName);
        saveData();
    }else if (e.target.classList.contains("checkBtn")) { // Toggle checked class on clicking check/uncheck button
        e.target.parentElement.classList.toggle('checked');
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();