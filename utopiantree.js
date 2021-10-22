function utopianTree(n) {
    let height = 1;
    if(n == 0){
        return 1;
    }
    for(let i = 1; i <= n; i++ ){
        if(i%2 == 0){
            height = height + 1;
        }else{
            height = height*2;
        }
        
    }
    
    return height; 

}