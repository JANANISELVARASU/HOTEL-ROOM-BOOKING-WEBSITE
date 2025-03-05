const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('input[type="text"]').value;
  const gender = document.querySelector('select[name="gender"]').value;
  const age = document.querySelector('input[type="number"][name="age"]').value;
  const mobile = document.querySelector('input[type="number"][name="mobile"]').value;
  const persons = document.querySelector('input[type="number"][name="persons"]').value;
  const roomType = document.querySelector('select[name="roomType"]').value;
  const bedroomType = document.querySelector('select[name="bedroomType"]').value;

  
  if (!validateName(name) || !validateGender(gender) || !validateAge(age) || !validateMobile(mobile) || !validatePersons(persons) || !validateRoomType(roomType) || !validateBedroomType(bedroomType)) {
    return;
  }

  
  const formData = {
    name,
    gender,
    age,
    mobile,
    persons,
    roomType,
    bedroomType,
  };

  
  if (formData.age < 20) {
    document.getElementById("output").innerHTML = `
      <h2>Booking Failed:</h2>
      <p>You are not eligible to book a room (Age: ${formData.age}).</p>
      <p>Please contact the hotel management for further assistance.</p>
    `;
  } else {
    
    document.getElementById("output").innerHTML = `
      <h2>Booking Details:</h2>
      <p>Name: ${formData.name}</p>
      <p>Gender: ${formData.gender}</p>
      <p>Age: ${formData.age}</p>
      <p>Mobile No: ${formData.mobile}</p>
      <p>No. of Persons: ${formData.persons}</p>
      <p>Room Type: ${formData.roomType}</p>
      <p>Bedroom Type: ${formData.bedroomType}</p>
      <h2 style="color: green;">YOUR ROOM BOOKED SUCCESSFULLY!</h2>
    `;
    
    alert("YOUR ROOM BOOKED SUCCESSFULLY!");
  }
});


function validateName(name) {
  if (name.trim() === '') {
    alert('Please enter your name');
    return false;
  }
  return true;
}

function validateGender(gender) {
  if (gender === '') {
    alert('Please select your gender');
    return false;
  }
  return true;
}

function validateAge(age) {
  const ageValue = parseInt(age);
  if (isNaN(ageValue) || ageValue < 18) {
    alert('Please enter a valid age (18+)');
    return false;
  }
  return true;
}

function validateMobile(mobile) {
  const mobileValue = mobile;
  if (mobileValue.length !== 10 || isNaN(mobileValue)) {
    alert('Please enter a valid mobile number');
    return false;
  }
  return true;
}

function validatePersons(persons) {
  const personsValue = parseInt(persons);
  if (isNaN(personsValue) || personsValue < 1) {
    alert('Please enter a valid number of persons');
    return false;
  }
  return true;
}

function validateRoomType(roomType) {
  if (roomType === '') {
    alert('Please select a room type');
    return false;
  }
  return true;
}

function validateBedroomType(bedroomType) {
  if (bedroomType === '') {
    alert('Please select a bedroom type');
    return false;
  }
  return true;
}
