function LinearSearch(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
            return i
        }
    }
    return -1
}
LinearSearch([34,56,1,2,4])