// Interactivity for Playo Index Page
document.addEventListener('DOMContentLoaded', () => {
    // Handle button interactions
    const loginButton = document.querySelector('button.bg-green-500');
    const signUpButton = document.querySelector('button.bg-blue-500');

    loginButton.addEventListener('click', () => {
        window.location.href = 'login.html'; // Navigate to the login page
    });

    signUpButton.addEventListener('click', () => {
        window.location.href = 'signup.html'; // Navigate to the signup page
    });

    const ctaButton = document.querySelector('footer button');
    ctaButton.addEventListener('click', () => {
        alert('Welcome to PLAYO! Sign up or log in to start playing.');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            const email = document.querySelector('#email').value.trim();
            const password = document.querySelector('#password').value.trim();

            if (!email || !password) {
                e.preventDefault();
                alert('Please fill in all fields before proceeding.');
            }
        });
    }

    const signupForm = document.querySelector('#signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const password = document.querySelector('#password').value.trim();
            const confirmPassword = document.querySelector('#confirm-password').value.trim();

            if (!name || !email || !password || !confirmPassword || password !== confirmPassword) {
                e.preventDefault();
                alert('Please fill in all fields and ensure passwords match.');
            }
        });
    }
});
