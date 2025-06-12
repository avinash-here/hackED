// Admin Modal Functionality
function showAdminLogin() {
    const modal = document.getElementById('adminModal');
    modal.style.display = 'block';
}

function closeAdminModal() {
    const modal = document.getElementById('adminModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('adminModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle admin form submission
function handleAdminLogin(e) {
    e.preventDefault();
    const id = document.getElementById('adminId').value;
    const password = document.getElementById('adminPassword').value;
    
    // For demo purposes, accept any non-empty credentials
    if (id && password) {
        sessionStorage.setItem('isAdminLoggedIn', 'true');
        window.location.href = 'admin.html';
    } else {
        alert('Please enter both ID and password');
    }
}

// Add event listeners for admin functionality
document.getElementById('adminLoginForm').addEventListener('submit', handleAdminLogin);
document.querySelector('.close-modal').addEventListener('click', closeAdminModal);

// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = question.nextElementSibling;
        
        // Close all other answers
        document.querySelectorAll('.faq-answer.active').forEach(activeAnswer => {
            if (activeAnswer !== answer) {
                activeAnswer.classList.remove('active');
                activeAnswer.parentElement.classList.remove('active');
            }
        });
        
        // Toggle current answer
        faqItem.classList.toggle('active');
        answer.classList.toggle('active');
    });
}); 