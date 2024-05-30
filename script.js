document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple form validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = document.getElementById('skills').value;
    
    // Normally, you would send this data to the backend here.
    // For this example, we'll just display a pop-up.
    alert('You\'re logged in successfully');
    
    // Mock storing data (send to backend)
    console.log({
        username: username,
        password: password,
        gender: gender,
        skills: skills
    });
    
    // Reset form
    document.getElementById('userForm').reset();
});
