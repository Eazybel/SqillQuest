const quiz=localStorage.getItem("Quiz")
const questions=JSON.parse(quiz)
const h2=document.querySelectorAll("h2")
const a=document.querySelectorAll(".a")
const b=document.querySelectorAll(".b")
const c=document.querySelectorAll(".c")
const d=document.querySelectorAll(".d")
const submit=document.getElementById("submit")
const high=document.getElementById("high")
let counter=0
 for (let i = 0; i < h2.length; i++) {
  h2[i].innerText=`${i+1}. ${questions[i].question}`
  if(questions[i].answers.answer_a!=null){
    a[i].innerText=questions[i].answers.answer_a
  }else if(questions[i].answers.answer_a==null){
      a[i].innerText="none"
  }
 if(questions[i].answers.answer_b!=null){
    b[i].innerText=questions[i].answers.answer_b
  }else if(questions[i].answers.answer_b==null){
      b[i].innerText="none"
  }
  if(questions[i].answers.answer_c!=null){
    c[i].innerText=questions[i].answers.answer_c
  }else if(questions[i].answers.answer_c==null){
      c[i].innerText="none"
  }
  if(questions[i].answers.answer_d!=null){
    d[i].innerText=questions[i].answers.answer_d
  }else if(questions[i].answers.answer_d==null){
      d[i].innerText="none"
  }
 
  if (questions[i].correct_answers.answer_a_correct=="true"){
    questions[i].correct_answer="a"
    
  } else if(questions[i].correct_answers.answer_b_correct=="true"){
    questions[i].correct_answer="b"
  
  } else if(questions[i].correct_answers.answer_c_correct=="true"){
  questions[i].correct_answer="c"
    
  }else if(questions[i].correct_answers.answer_d_correct=="true"){
    questions[i].correct_answer="d"
   
  }


}
localStorage.setItem("Quiz",JSON.stringify(questions))
submit.onclick=(e)=>{
  e.preventDefault()
for (let i = 0; i < h2.length; i++) {
if (a[i].previousElementSibling.checked) {
 if(a[i].className==questions[i].correct_answer){
  counter+=1
  a[i].classList.add("text-green-500")
 }else{
  a[i].classList.add("text-red-600")
 }
}
else if (b[i].previousElementSibling.checked) {
  if(b[i].className==questions[i].correct_answer){
  counter+=1
  b[i].classList.add("text-green-500")
 }else{
  b[i].classList.add("text-red-600")
 }
}
else if (c[i].previousElementSibling.checked) {
  if(c[i].className==questions[i].correct_answer){
  counter+=1
  c[i].classList.add("text-green-500")
 }else{
 c[i].classList.add("text-red-600")
 }
}
else if (d[i].previousElementSibling.checked) {
  if(d[i].className==questions[i].correct_answer){
  counter+=1
  d[i].classList.add("text-green-500")
 }else{
 d[i].classList.add("text-red-600")
 }
}
else{
  alert("you missed a question(s) please answer it")
}
  if(a[i].className==questions[i].correct_answer){
  a[i].classList.add("text-green-500")
 }
  if(b[i].className==questions[i].correct_answer){
  b[i].classList.add("text-green-500")
 }
  if(c[i].className==questions[i].correct_answer){
  c[i].classList.add("text-green-500")
 }
  if(d[i].className==questions[i].correct_answer){
  d[i].classList.add("text-green-500")
 }
if(localStorage.getItem(`score ${questions[0].category},${questions[0].difficulty}`)<counter){
high.innerText=counter
}
}
if(localStorage.getItem(`score ${questions[0].category},${questions[0].difficulty}`)<counter){
localStorage.setItem(`score ${questions[0].category},${questions[0].difficulty}`,counter)
}

}
if(localStorage.getItem(`score ${questions[0].category},${questions[0].difficulty}`)!=null){
  high.innerText=`${localStorage.getItem(`score ${questions[0].category},${questions[0].difficulty}`)}/10`
}
if(localStorage.getItem(`score ${questions[0].category},${questions[0].difficulty}`)==null){
  high.innerText="--"
}
//project still works