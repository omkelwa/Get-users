 let tbody = document.querySelector("tbody")
//  tbody.style.backgroundColor = "blue"
 let button = document.querySelector("button")
let button1 = document.querySelector("#get-name") 
 button.addEventListener("click" , getUsers)



async    function getUsers (){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
         
        data.forEach((item)=>{
            // console.log(item)
            let firstName = item.name
            let userName = item.username
            let email = item.email
            let address = item.address.street
            // console.log(firstName)
            // console.log(email)
            let tr = document.createElement("tr")
            tbody.appendChild(tr)
            let td1 = document.createElement("td")
            td1.innerText = firstName
            let td2 = document.createElement("td")
            td2.innerText = userName
            let td3 = document.createElement("td")
            td3.innerText = email
            let td4 = document.createElement("td")
            td4.innerText = address
            // let td5 = document.querySelector("td")
            // td5.innerText = company
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            // tr.appendChild(td5)

        })
    }
     
    