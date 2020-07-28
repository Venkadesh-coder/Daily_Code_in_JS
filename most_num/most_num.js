var in_array=[1,2,6,3,1,4,8,2,1];
var max_num_count={};
var max_num='';
for(var i=0;i<in_array.length;i++)
{
    var num=in_array[i];
    if(!max_num_count[num]){
        max_num_count[num]=0;
    }
    max_num_count[num]++;
    if(max_num==''||max_num_count[num]>max_num_count[max_num]){
        max_num=num;
    }
}
console.log(max_num+" is occuring "+max_num_count[max_num]+" times."+max_num+" is most occuring number.");