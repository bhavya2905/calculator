function getval(){
    return document.getElementById("preval").innerText;
}

function printval(num){
    document.getElementById("preval").innerText=num;
}
// printval("99+8");
function getans(){
    return document.getElementById("ansval").innerText;
}

function printans(num){
    if(num==""){
        document.getElementById("ansval").innerText=num;
    }
    else
     document.getElementById("ansval").innerText=formattednum(num);
}
function formattednum(num){
    if(num=='-'){
        return "";
    }
    let n=Number(num);
    let value=n.toLocaleString("en");
    return value;
}
// printans(9999999);
// printans("");
function reverseformattednum(num){
    return Number(num.replace(/,/g,""));
}
// alert(reverseformattednum(getans()));
let operator=document.getElementsByClassName("op");
for(let i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function (){
        // alert(this.id);
        if(this.id =="c"){
            printval("");
            printans("");
        }
        if(this.id=="ce"){
            var output=reverseformattednum(getans()).toString();
            if(output){
                var output=output.substring(0,output.length-1);
                printans(output);
            }
        }
        else{
            let output=getans();
            let history=getval();
            if(output==""&& history!=""){
                if(isNaN(history[history.length-1]))
                history=history.substr(0,history.length-1);
            }
            if(output!="" || history!=""){
                 output=output==""?output:reverseformattednum(output);
                history=history+output;
                if(this.id=="="){
                    let result=eval(history);
                    printans(result);
                    printval("");
                }else{
                    history=history+this.id;
                    printval(history);
                    printans("");
                }
            }

        }
    });
}

let number=document.getElementsByClassName("num");
for(let i=0;i<number.length;i++){
    number[i].addEventListener('click',function (){
        // alert(this.id);
        var output=reverseformattednum(getans());
        if(output!=NaN)//IF THE OUTPUT IS NUMBER
        {
            output=output+this.id;
            printans(output);
        }
    });
}

