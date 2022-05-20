const txt1 = "A"
const txt2 = "B"
const txt3 = "C"

function display(test, callback) {
    setTimeout(() => {
        callback(test)
    }, 1000);
}

display(txt1, (result)=> {
    console.log(result)
    display(txt2, (result)=>{
        console.log(result)
        display(txt3, (result) => {
            console.log(result)
        });
    });
});

// การบ้านส่ง CodeCamp //
