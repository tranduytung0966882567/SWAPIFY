// Simple SPA Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });
    // Show target section
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Login Form Steps Navigation
function nextStep(stepNumber) {
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById('step-' + stepNumber).classList.add('active');
}

// Modals
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function showTerms() {
    openModal('terms-modal');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function acceptTerms() {
    closeModal('terms-modal');
    // After accepting terms, user is "logged in" and goes to Explore
    alert("Đăng ký thành công! Chào mừng đến với Swapify.");
    showSection('explore');
}

function openVideoModal() {
    alert("Hiển thị Video Giới thiệu: Swapify – Thế giới nơi kỹ năng là sức mạnh");
}

function startMicroTest() {
    document.getElementById('micro-test-ui').classList.remove('hidden');
    document.querySelector('.verification-options').classList.add('hidden');
}

function openPortfolioUpload() {
    alert("Hiển thị UI Tải lên Portfolio (Drag & Drop, Link Drive/Behance)");
}
