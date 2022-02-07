
let containered = document.getElementById('container')

moment().format("MMM Do YY")

for (let customer of customers) {
    let name = customer.name.first + ' ' + customer.name.last
    // function capital() {
    //     return name.charAt(0).toUpperCase() + name.slice(1)
    // }
    console.log('Name: ', name)
    let dob =customer.dob.date

    let address = customer.location.street.number + ' ' + customer.location.street.name + ' ' + customer.location.city + ', ' + customer.location.state + ' ' + customer.location.postcode
        console.log('Address ', address)

    let phone = customer.phone
    console.log(phone)

    let pic = customer.picture.medium
    console.log(pic)
    
    let register ='Customer since ' + customer.registered.date
    console.log(register)

    containered.innerHTML += `<div> <img src=${pic} alt="medium-pic"> <br>
    ${name} <br> ${address} <br> ${dob} <br>${phone} <br> ${register} 
    </div>`
}

