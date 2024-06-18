document.addEventListener('DOMContentLoaded', function() {
    const email = localStorage.getItem('userEmail');
    const myBookingsContainer = document.getElementById('myBookingsContainer');

    function fetchMyBookings() {
        fetch(`http://localhost:3001/api/bookings?email=${email}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    renderMyBookings(data.bookings);
                } else {
                    myBookingsContainer.innerHTML = '<div class="alert alert-danger">Failed to load bookings</div>';
                }
            })
            .catch(error => {
                myBookingsContainer.innerHTML = '<div class="alert alert-danger">Error: ' + error.message + '</div>';
            });
    }

    function renderMyBookings(bookings) {
        myBookingsContainer.innerHTML = ''; // Clear previous content

        bookings.forEach(booking => {
            let statusClass;
            if (booking.status === 'approved') {
                statusClass = 'status-approved';
            } else if (booking.status === 'rejected') {
                statusClass = 'status-rejected';
            } else if (booking.status === 'pending') {
                statusClass = 'status-pending';
            } else {
                statusClass = ''; // Default class
            }

            const cardHtml = `
                <div class="col">
                    <div class="card booking-card ${statusClass}">
                        <div class="card-body">
                            <h5 class="card-title">${booking.event}</h5>
                            <p class="card-text"><strong>Date:</strong> ${booking.date}</p>
                            <p class="card-text"><strong>Time:</strong> ${booking.startTime} - ${booking.endTime}</p>
                            <p class="card-text"><strong>Attendees:</strong> ${booking.attendees}</p>
                            <p class="card-text"><strong>Status:</strong> ${booking.status}</p>
                        </div>
                    </div>
                </div>
            `;
            myBookingsContainer.innerHTML += cardHtml;
        });
    }

    fetchMyBookings();
});
