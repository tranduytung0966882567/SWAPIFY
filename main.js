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

// Local Data Actions
function filterExploreUsers() {
    const searchText = document.getElementById('explore-search').value.toLowerCase();
    const cards = document.querySelectorAll('#explore .user-card');
    cards.forEach(card => {
        const content = card.textContent.toLowerCase();
        if (content.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterForum() {
    const searchText = document.getElementById('community-search').value.toLowerCase();
    const items = document.querySelectorAll('#community .forum-item');
    items.forEach(item => {
        const content = item.textContent.toLowerCase();
        if (content.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    const chatContainer = document.getElementById('chat-messages');
    
    // Create new message element
    const msgElement = document.createElement('div');
    msgElement.style.cssText = 'align-self: flex-end; background: var(--primary); padding: 10px 15px; border-radius: 12px 12px 0 12px; max-width: 80%; color: white;';
    msgElement.textContent = message;
    
    chatContainer.appendChild(msgElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // Clear input
    input.value = '';
}

function createBlogPost() {
    const title = document.getElementById('blog-title').value.trim();
    const content = document.getElementById('blog-content').value.trim();
    const tags = document.getElementById('blog-tags').value.trim();
    
    if (!title || !content) {
        alert('Vui lòng nhập tiêu đề và nội dung bài viết!');
        return;
    }
    
    const blogList = document.getElementById('blog-list');
    
    // Create new blog item html
    const newBlog = document.createElement('div');
    newBlog.className = 'glass-card p-4';
    newBlog.style.cssText = 'cursor: pointer; transition: transform 0.2s;';
    newBlog.onmouseover = function() { this.style.transform = 'translateY(-5px)' };
    newBlog.onmouseout = function() { this.style.transform = 'translateY(0)' };
    
    newBlog.innerHTML = `
        <div class="user-card-header mb-2">
            <div class="avatar"><img src="https://i.pravatar.cc/150?img=3" alt="Avatar" style="width: 40px; height: 40px;"></div>
            <div class="user-info">
                <h3 style="font-size: 1rem;">Bạn (Me)</h3>
                <p>Vừa xong</p>
            </div>
        </div>
        <h4>${title}</h4>
        <p style="color: var(--text-muted); margin-top: 10px; font-size: 0.95rem;">${content}</p>
        <p style="color: var(--accent); margin-top: 5px; font-size: 0.85rem;">${tags}</p>
        <div class="card-actions mt-4">
            <button class="btn-outline" onclick="alert('Đã thích bài viết!')"><i class="fa-solid fa-heart"></i> 0</button>
            <button class="btn-outline" onclick="alert('Mở phần bình luận')"><i class="fa-solid fa-comment"></i> 0</button>
        </div>
    `;
    
    // Prepend to list
    blogList.insertBefore(newBlog, blogList.firstChild);
    
    // Close modal and clear form
    closeModal('blog-modal');
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-content').value = '';
    document.getElementById('blog-tags').value = '';
    
    alert('Đăng đánh giá thành công!');
}

function scrollToContact() {
    showSection('home');
    setTimeout(() => {
        const contactSection = document.getElementById('home-contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}
