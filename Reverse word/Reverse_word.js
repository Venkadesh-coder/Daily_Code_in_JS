function reverse_str(str){
    var rev_str="";
    for(var i=str.length-1;i>=0;i--){
    rev_str+=str[i];
    }
    return rev_str;
    }
    var str='I am Venkadesh',temp='',result='',i=0;
    while(i<str.length){
        if(str[i]===' '){
            result+=(result&&' ')+reverse_str(temp);
            temp='';
        }else{
            temp+=str[i];
        }
        i++;
    }
    if(temp)result+=(result&&' ')+reverse_str(temp);
    console.log(result);