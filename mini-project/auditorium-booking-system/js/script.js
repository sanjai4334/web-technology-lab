document.addEventListener('DOMContentLoaded', function() {
    var bookingForm = document.getElementById('bookingForm');
    var responseDiv = document.getElementById('response');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var date = document.getElementById('date').value;
        var startTime = document.getElementById('startTime').value;
        var endTime = document.getElementById('endTime').value;
        var phone = document.getElementById('phone').value;
        var eventType = document.getElementById('event').value;
        var attendees = document.getElementById('attendees').value;

        var bookingData = {
            name: name,
            email: email,
            date: date,
            startTime: startTime,
            endTime: endTime,
            phone: phone,
            event: eventType,
            attendees: attendees
        };

        if (startTime >= endTime) {
            responseDiv.innerHTML = '<div class="alert alert-danger">Start time must be before end time.</div>';
            return;
        }

        fetch('http://localhost:3001/api/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(response => response.json())
        .then(data => {
            responseDiv.innerHTML = '<div class="alert alert-success">' + data.message + '</div>';
        })
        .catch(error => {
            responseDiv.innerHTML = '<div class="alert alert-danger">' + error.message + '</div>';
        });
        setTimeout(function() {
            responseDiv.innerHTML = '';
        }, 3000);
    });
});
