const span =document.querySelectorAll("span")
const button=document.querySelectorAll("button")
button.forEach(buttons=>{
buttons.onclick=()=>{
 const input=buttons.parentElement.querySelectorAll("input")
 input.forEach(inputs=>{
    if(inputs.checked){
        if(inputs.nextSibling.innerText=="Beginner"){
            const selected=inputs.parentElement.parentElement.parentElement.querySelector("h2").innerText

                   fetch(`https://quizapi.io/api/v1/questions?apiKey=HmXinFOR8xQlpJsjNmFeYCZHggpiT5RyQrkBRvme&limit=10&category=${selected}&difficulty=easy`)
                   .then(res=>{                  
                    if(!res.ok){
                       window.location="./coming.html"
                      return Promise.reject("Page Not found")
                    }else if(res.ok){
                            return res.json()
                    }
                   })
                   .then(data=>{

                    localStorage.clear()
                       localStorage.setItem("Quiz",JSON.stringify(data))
                      window.open("./question.html","_blank")
                       console.log(data)
                   })
                   .catch(
                    err=>{
                        console.log(err)
                    }
                )
        }
        if(inputs.nextSibling.innerText=="Intermediate"){
             const selected=inputs.parentElement.parentElement.parentElement.querySelector("h2").innerText
                   fetch(`https://quizapi.io/api/v1/questions?apiKey=HmXinFOR8xQlpJsjNmFeYCZHggpiT5RyQrkBRvme&limit=10&category=${selected}&difficulty=medium`)
                  .then(res=>{                  
                    if(!res.ok){
                       window.open("./coming.html","_blanc")
                      return Promise.reject("Page Not found")
                    }else if(res.ok){
                            return res.json()
                    }
                   })
                   .then(data=>{
                    localStorage.clear()
                    localStorage.setItem("Quiz",JSON.stringify(data))
                    window.open("./question.html","_blank")
                   }).catch(
                    err=>{
                        console.log(err)
                    }
                   )
        
        }
        if(inputs.nextSibling.innerText=="Advanced"){
             const selected=inputs.parentElement.parentElement.parentElement.querySelector("h2").innerText

                   fetch(`https://quizapi.io/api/v1/questions?apiKey=HmXinFOR8xQlpJsjNmFeYCZHggpiT5RyQrkBRvme&limit=10&category=${selected}&difficulty=hard`)
                   .then(res=>{
                    if(!res.ok){
                       window.location="./coming.html"
                      return Promise.reject("Page Not found")
                    }else if(res.ok){
                            return res.json()
                    }
                     
                   })
                   .then(data=>{
                    localStorage.clear()
                   localStorage.setItem("Quiz",JSON.stringify(data))
                    window.open("./question.html","_blank")
                   }).catch(
                    err=>{
                        console.log(err)
                    }
                )
        }
        
    }
 })
 
 }
 })

