
let containered = document.getElementById('container')

function nameToAbbr (stateName) {
    const idx = usStates.findIndex(function (state) {
      return state.name === stateName.toUpperCase()
    })
  
    if (idx === -1) {
      return null
    }
  
    return usStates[idx].abbreviation
  }

for (let customer of customers) {

    let first = customer.name.first

    let name = customer.name.first + ' ' + customer.name.last
    
first[0].toUpperCase() + first.substring(1)


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
    <h2>${name} </h2> <div class="email">${email} </div> <br> ${address} <br>${phone} <br> <br> ${dob} <br> ${register} 
    </div>`
}

