var in_str='twitter to tweet';
var max_letter_count={};
var max_letter='';
for(var i=0;i<in_str.length;i++)
{
    var letter=in_str[i];
    if(!max_letter_count[letter]){
        max_letter_count[letter]=0;
    }
    max_letter_count[letter]++;
    if(max_letter==''||max_letter_count[letter]>max_letter_count[max_letter]){
        max_letter=letter;
    }
}
console.log(max_letter+" is occuring "+max_letter_count[max_letter]+" times."+max_letter+" is most occuring character.");