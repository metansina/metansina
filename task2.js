/* Task 2 */
var a = process.argv[2];
var b = process.argv[3];
if (a==b){
    console.log("0");
}
else if(a.lenght==1){
    console.log("-1");
}
else{
    var a2=[], a3=[];
    a2=a.split("");
    a3=a.split("");
    l=a.length-1;
    var f=true;
    for(var i=0; i<l; i++){
        var n=a2[0];
        a2.push(n);
        a2.splice(0,1);
        a=a2.join("");
        if(a==b){
            var k=i+1;
            f=false;
            break;
        }
    }
    for(var j=0; j<l; j++){
        var p=a3[l];
        a3.unshift(p);
        a3.splice(l+1,1);
        a=a3.join("");
        if(a==b){
            var m=j+1;
            f=false;
            break;
        }
    }
    if (f==false){
        if (k<=m){
            console.log(k);
        }
        else{
            console.log(m);
        }
    }
    else{
        console.log("-1");
    }
}
    