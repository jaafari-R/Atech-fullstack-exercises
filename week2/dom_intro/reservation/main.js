const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const checkReservation = () => {
    const reserveName = document.getElementById("reservationName").value;
    console.log(reserveName);
    if(reservations[reserveName] === undefined ) {
        alert("There is no reservation registered in your name");
    }
    else if(reservations[reserveName].claimed === true) {
        alert("Your reservation has alreay been claimed");
    }
    else {
        console.log(reservations[reserveName])
        reservations[reserveName].claimed = true;
        console.log(reservations[reserveName])
        alert("Welcome", reserveName);
    }
}