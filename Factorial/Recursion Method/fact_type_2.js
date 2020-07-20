function fact_type_2(number){
    if(number==0||number==1){
      return 1;
    }
    return number*fact_type_2(number-1);
  }
  var number=5;
  console.log("The factorial of "+number+" is "+fact_type_2(number));
