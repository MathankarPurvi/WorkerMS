let fname = document.getElementById('fname');
let mname = document.getElementById('mname');
let lname = document.getElementById('lname');
let btn = document.getElementById('btn');
let contact = document.getElementById('ph');
let password = document.getElementById('pass'); 
btn.addEventListener('click',()=>{

    btn.style.backgroundColor="blue"
    // console.log(ip1.value);

    // console.log(ip1.value)
    const post = async()=>{

        try {
            const response = await fetch('http://localhost:8000/api/register',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({fname:fname.value,mname:mname.value,lname:lname.value,contact:contact.value,password:password.value})
            });
            console.log(await response.json());
            window.location.href = 'index.html';
            
        
        } catch (error) {
            console.log("Error");
        }
    }
    if(fname.value && mname.value && lname.value && contact.value && contact.value.length ===10 && password.value && password.value.length<9){

        post();
    }
    else{
        alert("invalid Boi")
    }

})


// loginbtn.addEventListener('click',()=>{

//     loginbtn.style.backgroundColor="blue"
//     console.log("Clicked")
//     // console.log(ip1.value);

//     // console.log(ip1.value)
//     const login = async()=>{

//         try {
//             const response = await fetch('http://localhost:8000/api/login',{
//                 method:"GET",
//                 headers:{
//                     "Content-Type":"application/json",
//                 },
//                 body:JSON.stringify({fname:loginfname.value,password:loginpass.value})
//             });
//             const res_data = await response.json();
//             if(!(res_data.ok)){
//                 alert(res_data.msg);
//             }
//             console.log(res_data);
//             alert(res_data.msg);

        
//         } catch (error) {
//             console.log("Error");
//         }
//     }
//     // login();

// })

