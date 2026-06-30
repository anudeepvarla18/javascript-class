let enames=["rahul","sg","pg"]
let unames=enames;
unames=[];
for(let ename of enames){
    unames.push(ename)
}
unames[1]="sonia"
console.log(enames);
console.log(unames);