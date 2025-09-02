document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const thankYouMessage = document.getElementById('subm');
    const formContainer = document.getElementById('frm');

    // Hide the thank-you message initially
    thankYouMessage.style.display = 'none';

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Basic validation (you can add more)
        const email = document.getElementById('email').value;
        const phone = document.getElementById('num').value;

        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!/^[7-9][0-9]{9}$/.test(phone)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        // If validation passes, show thank-you message and hide the form
        formContainer.style.display = 'none';
        thankYouMessage.style.display = 'block';

        // Optional: You can still submit to Google Forms via the iframe
        e.target.submit();
    });
});
