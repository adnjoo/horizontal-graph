let data = [
  {
    name: "Adam",
    age: 20,
    salary: 30100,
  },
  {
    name: "Bob",
    age: 60,
    salary: 102000,
  },
  {
    name: "Carla",
    age: 31,
    salary: 57000,
  },
  {
    name: "Dave",
    age: 42,
    salary: 22000,
  },
  {
    name: "Ethel",
    age: 80,
    salary: 91000,
  },
  {
    name: "Frank",
    age: 28,
    salary: 73000,
  },
  {
    name: "Gina",
    age: 21,
    salary: 16000,
  },
];
const container = document.getElementById("container");
const button = document.getElementById("button");

// button.addEventListener("click", () => {
//   if (button.innerHTML.includes("salary")) {
//     mySort('salary');
//     button.innerHTML = "switch to age";
//   } else {
//     mySort('age');
//     button.innerHTML = "switch to salary";
//   }
// });

let mySort = (myVar) => {
  console.log(myVar)
  //clear container
  container.innerHTML = "";

  //compare data and sort
  data = data.sort(function (a, b) {
    return b[myVar] - a[myVar];
  });

  //find max variable
  let max = Math.max.apply(Math, data.map(function(data) { return data[myVar]; }))
  max = max * 1.25;
  //loop through data and append name and age
  for (i in data) {
    //make new row
    let newrow = document.createElement("tr");
    //make name cell
    let name = document.createElement("td");
    name.innerHTML = data[i].name + ", " + data[i][myVar];
    name.style.width = "100px";
    newrow.appendChild(name);
    //make age cell
    let age = document.createElement("td");
    age.classList.add("td");
    let div = document.createElement("div");
    div.style.width = data[i][myVar]/max*100 + '%';
    div.classList.add("age");
    //check if first or last
    if (i == 0) {
      age.classList.add("firsttd");
    }
    if (i == data.length - 1) {
      age.classList.add("lasttd");
    }
    age.appendChild(div);
    newrow.appendChild(age);
    container.appendChild(newrow);
  }
};

mySort('age');


function toggleClass(elem,className){
    if (elem.className.indexOf(className) !== -1){
      elem.className = elem.className.replace(className,'');
    }
    else{
      elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
    }
  
    return elem;
  }
  
  function toggleDisplay(elem){
    const curDisplayStyle = elem.style.display;			
  
    if (curDisplayStyle === 'none' || curDisplayStyle === ''){
      elem.style.display = 'block';
    }
    else{
      elem.style.display = 'none';
    }
  
  }
  
  function toggleMenuDisplay(e){
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu');
    const icon = dropdown.querySelector('.fa-angle-right');
  
    toggleClass(menu,'hide');
    toggleClass(icon,'rotate-90');
  }
  
  function handleOptionSelected(e){
    toggleClass(e.target.parentNode, 'hide');			
  
    const id = e.target.id;
    const newValue = e.target.textContent + ' ';
    const titleElem = document.querySelector('.dropdown .title');
    const icon = document.querySelector('.dropdown .title .fa');
  
  
    titleElem.textContent = newValue;
    titleElem.appendChild(icon);
  
    //trigger custom event
    document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
      //setTimeout is used so transition is properly shown
    setTimeout(() => toggleClass(icon,'rotate-90',0));
  }
  
  function handleTitleChange(e){
    console.log(e.target.textContent)
    if (e.target.textContent.includes("salary")) {
        mySort('salary');
      } else {
        mySort('age');
      }
  }
  
  //get elements
  const dropdownTitle = document.querySelector('.dropdown .title');
  const dropdownOptions = document.querySelectorAll('.dropdown .option');
  
  //bind listeners to these elements
  dropdownTitle.addEventListener('click', toggleMenuDisplay);
  
  dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
  
  document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);