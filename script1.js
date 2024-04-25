// let fname = document.getElementById('fname');
// let mname = document.getElementById('mname');
// let lname = document.getElementById('lname');
// let btn = document.getElementById('btn');
// let contact = document.getElementById('ph');
// let password = document.getElementById('pass'); 
let loginfname = document.getElementById('loginfname');
let loginbtn = document.getElementById('loginbtn');
let loginpass = document.getElementById('loginpass');
//loginbtn.style.backgroundColor="red"
// btn.addEventListener('click',()=>{

//     btn.style.backgroundColor="blue"
//     // console.log(ip1.value);

//     // console.log(ip1.value)
//     const post = async()=>{

//         try {
//             const response = await fetch('http://localhost:8000/api/register',{
//                 method:"POST",
//                 headers:{
//                     "Content-Type":"application/json",
//                 },
//                 body:JSON.stringify({fname:fname.value,mname:mname.value,lname:lname.value,contact:contact.value,password:password.value})
//             });
//             console.log(await response.json());
        
//         } catch (error) {
//             console.log("Error");
//         }
//     }
//     // post();

// })


loginbtn.addEventListener('click',()=>{

   // loginbtn.style.backgroundColor="blue"
    console.log("Clicked")
    // console.log(ip1.value);

    // console.log(ip1.value)
    const login = async()=>{

        try {
            const response = await fetch('http://localhost:8000/api/login',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({fname:loginfname.value,password:loginpass.value})
            });
            const res_data = await response.json();
            if(!(res_data.ok)){
                alert(res_data.msg);
                return 
            }
            console.log(res_data);
            alert(res_data.msg);
            window.location.href = "home.html";
        
        } catch (error) {
            console.log("Error",error);
        }
    }
    if(loginfname.value && loginpass.value &&loginpass.value.length <9 ){
        console.log("Called")
        login();
    }
    else{
        alert("Password length should be less than 8 character and fill all the details")
    }

})

