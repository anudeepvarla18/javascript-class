let employees=[{"eid":1,"ename":"charlotte","gender":"female"},{"eid":100,"ename":"ogdan","gender":"male"}]

let male_count=0
for(const employee of employees) {
    if(employee.gender ==="male"){
        male_count++;
}
}
console.log("no of male employees",male_count);