function foo() {
    function bar() {
        console.log("foo");
    }
    bar();
}

foo(); // foo
bar(); // ReferenceError: bar is not defined

