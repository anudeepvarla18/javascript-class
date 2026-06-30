setInterval(function(){
    let ct=new Date().toLocaleTimeString()
    document.getElementById('abc').innerHTML=ct;
},3000)