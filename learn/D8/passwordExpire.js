function genRandomNumWithExpiration(name) {
    const passcodeCache = {};//{name:{password, expiry}}
    const expirationTime = 5 * 1000; // 5 seconds in milliseconds

    return function logPasscode() {
        if (!passcodeCache[name]) {
            const passcode = Math.floor(Math.random() * 101);
            const expiry = Date.now() + expirationTime;
            passcodeCache[name] = { passcode, expiry };
        }
        if (Date.now() > passcodeCache[name].expiry) {
            const passcode = Math.floor(Math.random() * 101);
            const expiry = Date.now() + expirationTime;
            passcodeCache[name] = { passcode, expiry };
            console.log(`The old password of ${name} expired, the new password is now ${passcode}`);
        }else{
            console.log(`The password has not expired yet.`);
        }
        //     console.log(`Name: ${name} password: ${passcodeCache[name].password} (expires in ${Math.ceil((passcodeCache[name].expiry - Date.now()) / 1000)} seconds)`);
        //     return passcodeCache[name].password;
        //   } else {
        //     const passcode = Math.floor(Math.random() * 101);
        //     const expiry = Date.now() + expirationTime;
        //     passcodeCache[name] = {passcode, expiry};
        //     console.log(`Name: ${name} passcode generated: ${passcode} (expires in 100 seconds)`);
        //     return passcode;
    }
};

const getPasscodeA = genRandomNumWithExpiration("A");
const getPasscodeB = genRandomNumWithExpiration("B");

console.log("First calls:");
getPasscodeA();
getPasscodeB();

setTimeout(() => {
    console.log("\nAfter 5 seconds:");
    getPasscodeA();
    getPasscodeB();
}, 5000);