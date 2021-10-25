
function saveData(){
    let name,userName,pwd,email,dob,gender,cllgName;

    name = document.getElementById('Name').value;
    userName = document.getElementById('userName').value;
    pwd = document.getElementById('pwd').value;
    email = document.getElementById('email').value;
    dob = document.getElementById('dob').value;
    // gender = document.getElementByName('gender').value;
    cllgName = document.getElementById('cllgName').value;

    let user_data = new Array();
    user_data = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if(user_data.some((v)=>{return v.userName==userName})){
        alert('user Name already exist')
    }
    else{
        user_data.push({
            "name":name,
            "userName":userName,
            "pwd":pwd,
            "email":email,
            "dob":dob,
            "gender":gender,
            "cllgName":cllgName
        })
    }
    localStorage.setItem("users",JSON.stringify(user_data));
    alert('signup Successfully');
}


function login(){
    let userName,pwd;

    userName = document.getElementById('username').value;
    pwd = document.getElementById('pws').value;

    let user_data = new Array();
    user_data = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if(user_data.some((v)=>{return v.userName==userName && v.pwd==pwd})){
        alert('login pass')
        let currentUser = user_data.filter((v)=>{return v.userName==userName && v.pwd==pwd})[0];
        localStorage.setItem('name',currentUser.name);
        localStorage.setItem('email',currentUser.email);
        // JSON.parse(localStorage.setItem('user',currentUser[0]));
        localStorage.setItem('user',currentUser[0])
        window.location.href="profile.html";
    }
    else{
        alert('login Fail')
    }
}