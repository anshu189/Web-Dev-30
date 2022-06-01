var cnt=0
var addcnt=0
var cntr = document.getElementById("count")
var addcntr = document.getElementById("add")

function incr(){
    cnt++
    cntr.textContent=cnt
}
function reset(){
    cntr.textContent=0
    addcnt=0
    addcntr.textContent=0
    cnt=0
}
function addfunc(){
    addcnt+=cnt
    addcntr.textContent=addcnt
    console.log(cnt)
}
