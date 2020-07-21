function palindrome(str){
    var rev_str="";
    for(var i=str.length-1;i>=0;i--){
    rev_str+=str[i];
    }
    if(str===rev_str){
        console.log(str+' is palindrome');
      }else{
        console.log(str+' is not a palindrome');
      }
    }
    palindrome('hello');