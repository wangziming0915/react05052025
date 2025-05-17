//writes an example of a closure that generates a random number between 0 and 100 with initiated and logs the password is "##" when invoked
function genRandomNum(name){
    const passcodeSet = {};
    
    return function(){
        if(!passcodeSet[name]){
            passcodeSet[name] = Math.floor(Math.random() * 101);
        }
        console.log(`Name: ${name} password: ${passcodeSet[name]}`);
    };
}

const logPassword1 = genRandomNum('A');
const logPassword2 = genRandomNum("B");
logPassword1();
logPassword1();
logPassword2();


//Modify the closure above to memoize an objective of name <-> passcode pairs, 
//and log a passcode for a given name from cache. 
//For instance, every time 'logPasscode('peter')' is run, 
//the function should log "The passcode is ##" with the specific passcode generated for 'Peter';


