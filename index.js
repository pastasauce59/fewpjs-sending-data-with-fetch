// submitData function with two arguments
function submitData(name, email){

    let formData = {
    name: `${name}`,
    email: `${email}`
};
//console.log(formData)


//post request
    const configObject = {
        method: "Post",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
};

    return fetch('http://localhost:3000/users', configObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        let bodyEle = document.querySelector('body')
        let h2Ele = document.createElement('h2')
        h2Ele = object.id
        bodyEle.append(h2Ele)
        
        //console.log(object.id);
    })
    .catch(function(error){
        alert("Catching something in the act!");
        let bodyEle = document.querySelector('body')
        let h3Ele = document.createElement('h3')
        h3Ele = error.message
        bodyEle.append(h3Ele)
        console.log(error.message);
    });
}

//submitData("steve","steve@email");