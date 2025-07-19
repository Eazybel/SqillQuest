const span =document.querySelectorAll("span")
const button=document.querySelectorAll("button")
button.forEach(buttons=>{
buttons.onclick=()=>{
 const input=buttons.parentElement.querySelectorAll("input")
 input.forEach(inputs=>{
    if(inputs.checked){
        if(inputs.nextSibling.innerText=="Beginner"){
            const selected=inputs.parentElement.parentElement.parentElement.querySelector("h2").innerText

                   fetch(`https://quizapi.io/api/v1/questions?apiKey=LSu3DAdnWagtzaWR6VMfKX4ErN7XCdOCDz725ocK&limit=10&category=${selected}&difficulty=easy`)
                   .then(res=>{
                    
                    if(res.status==404){
                        window.location="./coming.html"
                    }
                    return res.json()
                
                   })
                   .then(data=>{
                       localStorage.setItem("Quiz",JSON.stringify(data))
                       window.location="./question.html"
                       
                   
                   })
        }
        if(inputs.nextSibling.innerText=="Intermediate"){
             const selected=inputs.parentElement.parentElement.parentElement.querySelector("h2").innerText
                   fetch(`https://quizapi.io/api/v1/questions?apiKey=LSu3DAdnWagtzaWR6VMfKX4ErN7XCdOCDz725ocK&limit=10&category=${selected}&difficulty=medium`)
                  .then(res=>{
                   
                    if(res.status==404){
                        window.location="./coming.html"
                    }
                    return  res.json()
                   })
                   .then(data=>{
                    localStorage.setItem("Quiz",JSON.stringify(data))
                    window.location="./question.html"
                   })
        
        }
        if(inputs.nextSibling.innerText=="Advanced"){
             const selected=inputs.parentElement.parentElement.parentElement.querySelector("h2").innerText

                   fetch(`https://quizapi.io/api/v1/questions?apiKey=LSu3DAdnWagtzaWR6VMfKX4ErN7XCdOCDz725ocK&limit=10&category=${selected}&difficulty=hard`)
                   .then(res=>{
                    if(res.status==404){
                        window.location="./coming.html"
                    }
                     return res.json()
                   })
                   .then(data=>{
                   localStorage.setItem("Quiz",JSON.stringify(data))
                    window.location="./question.html"
                   })
                    
        }
        
    }
 })
 
 }
 })

