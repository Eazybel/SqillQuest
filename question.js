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
 
 switch ("true") {
  case questions[i].correct_answers.answer_a_correct:
    questions[i].correct_answer="a"
    break;
  case questions[i].correct_answers.answer_b_correct:
    questions[i].correct_answer="b"
    break;
  case questions[i].correct_answers.answer_c_correct:
    questions[i].correct_answer="c"
    break;
  case questions[i].correct_answers.answer_d_correct:
    questions[i].correct_answer="d"
    break;
 
  default:
    break;
 }
}
submit.onclick=(e)=>{
  e.preventDefault()
for (let i = 0; i < h2.length; i++) {
if (a[i].previousElementSibling.checked) {
 if(a[i].className==questions[i].correct_answer){
  counter+=1
 }else{
  console.log("no")
 }
}
else if (b[i].previousElementSibling.checked) {
  if(b[i].className==questions[i].correct_answer){
  counter+=1
 }else{
  console.log("no")
 }
}
else if (c[i].previousElementSibling.checked) {
  if(c[i].className==questions[i].correct_answer){
  counter+=1
 }else{
  console.log("no")
 }
}
else if (d[i].previousElementSibling.checked) {
  if(d[i].className==questions[i].correct_answer){
  counter+=1
 }else{
  console.log("no")
 }
}
else{
  alert("you missed a question(s) please answer it")
}
}
if(localStorage.getItem("score")<counter){
localStorage.setItem("score",counter)
}

}
high.innerText=`${localStorage.getItem("score")}/10`
