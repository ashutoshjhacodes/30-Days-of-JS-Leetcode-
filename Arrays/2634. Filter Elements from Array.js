// 

var filter = function(arr, fn) {
    filteredArray=[];
    for(let i=0;i<=arr.length-1;i++)
    {
        if(fn(arr[i],i)){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
};

