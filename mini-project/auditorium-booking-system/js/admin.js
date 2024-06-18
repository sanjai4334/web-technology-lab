document.addEventListener('DOMContentLoaded', function() {
    const bookingsContainer = document.getElementById('bookingsContainer');

    function fetchBookings() {
        fetch('http://localhost:3001/api/admin/bookings')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    renderBookings(data.bookings);
                } else {
                    bookingsContainer.innerHTML = '<div class="alert alert-danger">Failed to load bookings</div>';
                }
            })
            .catch(error => {
                bookingsContainer.innerHTML = '<div class="alert alert-danger">Error: ' + error.message + '</div>';
            });
    }

    function renderBookings(bookings) {
        bookingsContainer.innerHTML = ''; // Clear previous content

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
                            <p class="card-text"><strong>Name:</strong> ${booking.name}</p>
                            <p class="card-text"><strong>Email:</strong> ${booking.email}</p>
                            <p class="card-text"><strong>Date:</strong> ${booking.date}</p>
                            <p class="card-text"><strong>Time:</strong> ${booking.startTime} - ${booking.endTime}</p>
                            <p class="card-text"><strong>Attendees:</strong> ${booking.attendees}</p>
                            <p class="card-text"><strong>Phone:</strong> ${booking.phone}</p>
                            <p class="card-text"><strong>Status:</strong> ${booking.status}</p>
                            <button class="btn btn-success btn-sm" onclick="updateBookingStatus('${booking._id}', 'approved')">
                                <i class="bi bi-check-circle"></i> Approve
                            </button>
                            <button class="btn btn-danger btn-sm ms-2" onclick="updateBookingStatus('${booking._id}', 'rejected')">
                                <i class="bi bi-x-circle"></i> Reject
                            </button>
                        </div>
                    </div>
                </div>
            `;
            bookingsContainer.innerHTML += cardHtml;
        });
    }

    window.updateBookingStatus = function(id, status) {
        fetch(`http://localhost:3001/api/admin/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    fetchBookings();
                } else {
                    alert('Failed to update booking');
                }
            })
            .catch(error => {
                alert('Error: ' + error.message);
            });
    }

    fetchBookings();
});
