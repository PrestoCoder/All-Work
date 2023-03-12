// If once a closure is made, all the subsequent functions that are returned from that function, or its returned functions.
// will all share the same closure, which was made for the top most function.

// Thus, in the below example, after innerFun's closure is made, innerMostFun will keep using its closure.
// However, if innerFun would declare a new variable, innerMostFun would require a closure of its own, enclosed in 
// innerFun's closure. 

// Thus,
// closure1(closure2(closure3(closure4)))

function outerFun(){
    let money = 110;    
    function innerFun(){
        money++;
        function innerMostFun() {
            money++;
            console.log(money);
        }
        return innerMostFun;
    }
    return innerFun;
}

let fun = outerFun();
let fun1 = fun();
let fun2 = fun();

fun1();//111 then 113
fun1();//112 then 114
fun1();//113 then 115
fun2();//114 then 116
fun2();//115 then 117
fun1();//116 then 118

