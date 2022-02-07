
let containered = document.getElementById('container')


for (let customer of customers) {
    let name = customer.name.first + ' ' + customer.name.last
    // function capital() {
    //     return name.charAt(0).toUpperCase() + name.slice(1)
    // }
    console.log('Name: ', name)

    let email = customer.email

    let bday =  moment(customer.dob.date).format("MMM D, YY")
    let dob ='DOB: ' + bday

    let address = customer.location.street.number + ' ' + customer.location.street.name + ' ' + customer.location.city + ', ' + customer.location.state + ' ' + customer.location.postcode
        console.log('Address ', address)

    let phone = customer.phone
    console.log(phone)

    let pic = customer.picture.medium
    console.log(pic)

    let date =  moment(customer.registered.date).format("MMM D, YY")
    let register ='Customer since: ' + date
    console.log(register)
    
   

    containered.innerHTML += `<div> <img src=${pic} alt="medium-pic"> <br>
    <h2>${name} </h2> ${email} <br> ${address} <br> <br> ${dob} <br>${phone} <br> ${register} 
    </div>`
}

