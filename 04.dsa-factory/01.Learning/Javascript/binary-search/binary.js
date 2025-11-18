function BinarySearch(arr,elem){
    let start =0;
    let end = arr.length-1
    let middle =Math.floor((start+end)/2)
    while(arr[middle]!==elem && start<=end){
        if(elem <arr[middle]){
            end = middle-1
        }else{
            start = middle+1
        }
        middle =Math.floor((start+end)/2)
    }
    if(arr[middle] ===elem){
        return middle
    }
    return -1
}

Console.log(BinarySearch([2,3,4,5,6,7,8,9,15],7))