// Grade calculator

function Gradechecker(){
    let marks = prompt("please enter your marks:");

if(marks <= 100 && marks >= 90){
    confirm(" A")

}
else if(marks <= 89 && marks >=80){
    confirm("B");
}

else if(marks <= 79 && marks >=70){
    confirm("C");
}

else if(marks <= 69 && marks >= 60){
    confirm("D");
}
else if(marks<60){
    confirm("F");
}

else{
    confirm("Invalid input");
}
}


// leapchecker


function Leapchecker(){

    
    const year = prompt("Enter a year");
    
    if(year%4==0){
        confirm(" this is a leap year")
    }
    
    else if(year%4!=0){
    
        confirm("this is not a leap year");
    
    }
    
    else{
        confirm("Invalid input")
    }
    }

    
    // numberchecker


    function number(){

    
        const number = prompt("Enter a number: ");
        
        if(number==0){
        
            confirm(" The entered number is Zero");
        
        }
        
        else if(number<0) {
            confirm( " The entered number is Negative");
        }
        
        else if (number>0){
            confirm ("The entered number is Positive")
        }
        
        else{
            confirm("Invalid input");
        }
        
        
        }


        // stringchecker


        function string(){
            let words = prompt("Enter any word or sentence");
        
        if(words.length<5){
            confirm("short string");
        }
        
        
        else if(words.length<=10 && words.length>=5){
            confirm("medium string");
        }
        
        else if (words.length>10){
           confirm("Long string");
        }
         
        }


        // loginacess

        function login(){
            let username = prompt("Enter your username");
            let password = prompt("Enter your password");
        
            if(username== "mukhutar" && password== 111){
                confirm("Access granted");
            }
            else{
                confirm("Access denied")
            }
        }
        