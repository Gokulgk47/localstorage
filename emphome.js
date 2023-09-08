empname=localStorage.getItem('UserName');
heading.innerHTML=`Welcome ${empname}`;

function sub(){
    empid=document.getElementById('empid').value;
    const details={
        id:empid,
        name: document.getElementById('name').value,
        designation:document.getElementById('Designation').value,
        experience: document.getElementById('Experience').value
    }

    localStorage.setItem(`${empid}`,JSON.stringify(details));
    alert("Employee Details Sucesfully Added");
}

function search(){
    key=document.getElementById('search').value;
    if(key in localStorage){
       var empdetails= JSON.parse(localStorage.getItem(key));
       var empid=empdetails.id;
       var ename=empdetails.name;
       var edes=empdetails.designation;
       var eexp=empdetails.experience;
      
       
       sreults.innerHTML=`<div class="card mt-5" style="width: 18rem;">
       <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" class="card-img-top" alt="...">
       <ul class="list-group list-group-flush">
         <li class="list-group-item">Employee ID:${empid}</li>
         <li class="list-group-item">Employee Name:${ename}</li>
         <li class="list-group-item">Employee Designation:${edes}</li>
         <li class="list-group-item">Employee Experience:${eexp}</li>
       </ul>
     </div>`
    }
    else{
        sreults.innerHTML=`<p>No Reults Found</p>`
    }
}

function logout(){
    var log=confirm("are you sure ?");
    if(log==true){
        window.location='./home.html';
        localStorage.clear();
    }    
}