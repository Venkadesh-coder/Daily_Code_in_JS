function fact_type_1(number){
  var answer=1;
  if(number==0||number==1){
    return answer;
  }else{
    for(var i=number;i>=1;i--){
      answer=answer*i;
    }
    return answer;
  }  
}
var number=0;
console.log("The factorial of "+number+" is "+fact_type_1(number));