console.log("hey all") 
let studentsname=["ali","ahmad","hashim"]
let marks=[88,50,46]



function calclate_marks() {



    for (let i = 0; i < marks.length; i++) {
        if (marks[i]>=50) {
            console.log("congrate" + " " +studentsname[i]+ " your mark is" + marks[i]+ " and you are pass" )
        }
        else{

            console.log("sorry" + " " +studentsname[i]+ " your mark is" + marks[i]+ " and you are fail" )
        }
        
    }
    


    
}

calclate_marks()



// for (let i = 0; i < 5; i++) {
//     if (i==3) {
//         console.log("hey im " + " " + i)
//         continue;
//     }
//     console.log(i)
    
// }


// function oddoreven(num1) {
//     if (num1%2==0) {

//         console.log("the " +num1 + " " + "is even number")
        
//     }
//     else{
//         console.log("the " +num1 + " " + "is odd number")
        
//     }

// }

// oddoreven(5)
// oddoreven(10)
// oddoreven(19)
// oddoreven(46)