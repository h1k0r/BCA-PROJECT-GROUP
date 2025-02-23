document.addEventListener('DOMContentLoaded', function() {
    // Initialize Prism.js syntax highlighting
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }

    // Learning path selector functionality
    const pathButtons = document.querySelectorAll('[data-path]');
    pathButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            pathButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Update content based on selected path
            const path = this.getAttribute('data-path');
            updateContentForPath(path);
        });
    });

    function updateContentForPath(path) {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            // Show/hide content based on difficulty level
            // This can be enhanced with actual content filtering
            card.style.opacity = '1';
            if (path === 'beginner') {
                if (card.querySelector('.card-title').textContent.includes('Advanced')) {
                    card.style.opacity = '0.5';
                }
            } else if (path === 'intermediate') {
                if (card.querySelector('.card-title').textContent.includes('Basics')) {
                    card.style.opacity = '0.5';
                }
            }
        });
    }

    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Progress tracking using localStorage
    const trackProgress = () => {
        const sections = document.querySelectorAll('.tutorial-content h2');
        const progress = JSON.parse(localStorage.getItem('tutorialProgress') || '{}');
        const currentPage = window.location.pathname;

        // Add checkboxes to sections
        sections.forEach(section => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'progress-check';
            checkbox.style.marginRight = '10px';

            const sectionId = section.id;
            const progressKey = `${currentPage}-${sectionId}`;

            checkbox.checked = progress[progressKey] || false;

            checkbox.addEventListener('change', (e) => {
                progress[progressKey] = e.target.checked;
                localStorage.setItem('tutorialProgress', JSON.stringify(progress));
                updateProgressBar();
                updateAchievements();
            });

            section.insertBefore(checkbox, section.firstChild);
        });

        // Progress bar functionality
        const updateProgressBar = () => {
            const total = sections.length;
            const completed = Object.values(progress).filter(v => v).length;
            const percentage = (completed / total) * 100;

            const progressBar = document.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.width = `${percentage}%`;
                progressBar.textContent = `${Math.round(percentage)}%`;
            }
        };

        // Add progress bar
        const progressBarContainer = document.createElement('div');
        progressBarContainer.className = 'progress mb-4';
        progressBarContainer.style.height = '20px';

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.role = 'progressbar';
        progressBar.style.width = '0%';
        progressBar.textContent = '0%';

        progressBarContainer.appendChild(progressBar);
        const content = document.querySelector('.tutorial-content');
        if (content) {
            content.prepend(progressBarContainer);
            updateProgressBar();
        }
    };

    // Achievement system
    const achievements = {
        beginner: { name: 'Beginner Programmer', threshold: 5 },
        intermediate: { name: 'Intermediate Coder', threshold: 15 },
        advanced: { name: 'Advanced Developer', threshold: 30 }
    };

    function updateAchievements() {
        const progress = JSON.parse(localStorage.getItem('tutorialProgress') || '{}');
        const completedCount = Object.values(progress).filter(v => v).length;

        // Check for achievements
        Object.entries(achievements).forEach(([level, data]) => {
            if (completedCount >= data.threshold) {
                showAchievement(data.name);
            }
        });
    }

    function showAchievement(achievementName) {
        const toast = document.createElement('div');
        toast.className = 'achievement-toast';
        toast.innerHTML = `
            <div class="toast-header">
                <strong class="me-auto">Achievement Unlocked!</strong>
                <button type="button" class="btn-close" onclick="this.parentElement.parentElement.remove()"></button>
            </div>
            <div class="toast-body">
                You've earned: ${achievementName}
            </div>
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 5000);
    }

    // Code copy functionality
    document.querySelectorAll('.code-example').forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn btn btn-sm btn-outline-primary';
        copyButton.textContent = 'Copy';
        block.style.position = 'relative';
        copyButton.style.position = 'absolute';
        copyButton.style.right = '10px';
        copyButton.style.top = '10px';

        copyButton.addEventListener('click', function() {
            const code = block.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 2000);
                });
            }
        });

        block.appendChild(copyButton);
    });

    // Search functionality
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'form-control mb-4';
    searchInput.placeholder = 'Search tutorials...';
    document.querySelector('main .container').prepend(searchInput);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        document.querySelectorAll('.card').forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-text').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Initialize progress tracking if on tutorial page
    if (document.querySelector('.tutorial-content')) {
        trackProgress();
    }

    // Add CSS for achievement toasts
    const style = document.createElement('style');
    style.textContent = `
        .achievement-toast {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--bs-dark);
            color: var(--bs-light);
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            z-index: 1000;
        }
        .achievement-toast .toast-header {
            background: rgba(255,255,255,0.1);
            color: var(--bs-light);
            padding: 5px 10px;
            margin-bottom: 10px;
        }
    `;
    document.head.appendChild(style);
});