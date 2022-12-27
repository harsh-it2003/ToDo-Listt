var itemsArray=[];

//for adding a new task in the list:
add=document.getElementById("add");
add.addEventListener("click",()=>{
    let task=title.value;
    let des=description.value;
    itemsArray.push([task,des]);

    let newTask=`
        <tr>
        <td>${itemsArray.length}</td>
        <td>${task}</td>
        <td>${des}</td>
        <td><button class="btn btn-sm btn-primary" id=${itemsArray.length} onclick="deleteRowWithID(${itemsArray.length})">Delete</button></td>
        </tr>
    `

    myTable=document.getElementsByClassName("table")[0];
    myTable.innerHTML+=newTask;
})


//for deleting a task from the list :
function deleteRowWithID(a){
    let tempArray=[];
    for(var i=0;i<itemsArray.length;i++){
        if(i+1==a){
            continue;
        }
        tempArray.push(itemsArray[i]);
    }

    myTable=document.getElementsByClassName("table")[0];
    myTable.innerHTML=`
        <thead>
        <tr>
          <th scope="col">SNo.</th>
          <th scope="col">Task</th>
          <th scope="col">Task Description</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
    `;
    itemsArray=tempArray;
    for(var i=0;i<itemsArray.length;i++){
        let currRow=`
            <td>${i+1}</td>
            <td>${itemsArray[i][0]}</td>
            <td>${itemsArray[i][1]}</td>
            <td><button class="btn btn-sm btn-primary" id=${i+1} onclick="deleteRowWithID(${i+1})">Delete</button></td>
        `;
        myTable.innerHTML+=currRow;
    }
}


