const quiz=localStorage.getItem("Quiz")
const questions=JSON.parse(quiz)
const h2=document.querySelectorAll("h2")
const a=document.querySelectorAll(".a")
const b=document.querySelectorAll(".b")
const c=document.querySelectorAll(".c")
const d=document.querySelectorAll(".d")
const submit=document.getElementById("submit")
let counter=0
 for (let i = 0; i < h2.length; i++) {
  h2[i].innerText=`${i+1}. ${questions[i].question}`
  a[i].innerText=questions[i].answers.answer_a
  b[i].innerText=questions[i].answers.answer_b
  c[i].innerText=questions[i].answers.answer_c
  d[i].innerText=questions[i].answers.answer_d
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
console.log(counter)
}
console.log(questions)