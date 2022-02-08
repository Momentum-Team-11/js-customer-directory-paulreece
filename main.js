let containered = document.getElementById("container");

for (let customer of customers) {
  let name = customer.name.first + " " + customer.name.last;
  let first = customer.name.first;

  let email = customer.email;

  let bday = moment(customer.dob.date).format("MMM D, YY");
  let dob = "DOB: " + bday;

  let stateName = customer.location.state;

  console.log(stateName);

  nameToAbbr(stateName);
  console.log(nameToAbbr(stateName));

  let address =
    customer.location.street.number +
    " " +
    customer.location.street.name +
    " " +
    customer.location.city +
    ", " +
    nameToAbbr(stateName) +
    " " +
    customer.location.postcode;
  console.log("Address ", address);

  let phone = customer.phone;
  console.log(phone);

  let pic = customer.picture.medium;
  console.log(pic);

  let date = moment(customer.registered.date).format("MMM D, YY");
  let register = "Customer since: " + date;
  console.log(register);

  containered.innerHTML += `<div> <img src=${pic} alt="medium-pic"> <br>
    <h2 class="name">${name} </h2> 
    <div class="email">${email} </div> 
    <br> ${address} <br>
    ${phone} <br> <br> 
    ${dob} <br> 
    ${register} 
    </div>`;
}
