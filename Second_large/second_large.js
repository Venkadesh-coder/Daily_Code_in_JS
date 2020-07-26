function second_large(array)
{
    var count=array.length-1,swap,j,i;
    for(j=0;j<count;j++)
    {
        for(i=0;i<count;i++)
        {
            if(array[i]>array[i+1])
            {
                [array[i+1],array[i]]=[array[i],array[i+1]];
                number=array[count-1];
            }
        }
    }
    return number;
}
console.log(second_large([4, 10, 2, 9, 11, 3, 13, 5, 15])+" is second largest number");