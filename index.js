const incrementBtn=document.getElementById('increment-btn')
const saveBtn=document.getElementById('save-btn')
let prevv=document.getElementById('prev')
let numm=document.getElementById('num')
let count=0
incrementBtn.addEventListener('click',function(){
   count+=1
   numm.textContent=count
   console.log('clicked')
})

saveBtn.addEventListener('click',function(){
    prevv.textContent+=`- ${count}`
})