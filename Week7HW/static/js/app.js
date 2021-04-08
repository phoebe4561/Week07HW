const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener('submit', e=>{
    e.preventDefault();
 
    async function searchName(){
    const username = document.querySelector("#username").value;
    const response = await fetch("/api/users?username=" + encodeURIComponent(username));
    const result = await response.json();
        if(result.data === null){
            document.querySelector("#get_result").textContent="查無此人";
        }else{
            document.querySelector("#get_result").textContent=result.data.name +"("+result.data.username+")";
        }
      }
      searchName();
});

const updateForm = document.querySelector("#updateForm");
updateForm.addEventListener('submit',e=>{
    e.preventDefault();

    async function updateName(){
        const nameValue = document.querySelector("#name").value;
        const response = await fetch("/api/user",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": nameValue
            })     
        })

        const res = await response.json();
            if(res["ok"]){
                document.getElementById("showName").innerHTML = nameValue + ",歡迎登入系統";
                document.querySelector("#update_result").textContent="更新成功";
                console.log(response);
            }
            if(res["error"]){
                document.querySelector("#update_result").textContent="更新失敗";
            }
          }
            updateName();
    });  

    // function updateName(){
    // const nameValue = document.querySelector("#name").value;
    // fetch("/api/user",{
    //     method:"POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         "name": nameValue
    //     })          
    // })   
    // .then((res)=>{
    //     return res.json();
    // })
    // .then(response=>{
    //     if(response["ok"]){
    //         document.getElementById("showName").innerHTML = nameValue + ",歡迎登入系統";
    //         document.querySelector("#update_result").textContent="更新成功";
    //         console.log(response);
    //     }
    //     if(response["error"]){
    //         document.querySelector("#update_result").textContent="更新失敗";
    //     }
    //   })
    // }
    // updateName();
// })
 