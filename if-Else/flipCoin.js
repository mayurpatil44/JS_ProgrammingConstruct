function flipCoin() {
    // Following line will returns the value of 0 and 1, Here in JS random function returns value between 0 to 0.99...
    flip = Math.floor(Math.random() * 2);  
    if (flip == 0){                        // condition is checked for head and tail using if else        
        console.log("head");    
    } else {
        console.log("tail");
 
    }
}

flipCoin();