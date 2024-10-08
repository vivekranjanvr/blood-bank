document.getElementById('donorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const name = document.getElementById('name').value;
    const bloodType = document.getElementById('bloodType').value;

    // Simple validation
    if (name === '' || bloodType === '') {
        alert('Please fill in all the fields.');
        return;
    }

    // Confirmation message
    alert(`Thank you, ${name}! You've registered as a ${bloodType} blood donor.`);

    // Clear form
    document.getElementById('donorForm').reset();
});
