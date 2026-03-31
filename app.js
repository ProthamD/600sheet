// Main Application Logic
class DSATracker {
    constructor() {
        this.tasks = tasksData;
        this.completedTasks = new Set(this.loadProgress());
        this.currentFilter = 'all';
        this.searchQuery = '';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.render();
        this.updateStats();
    }

    setupEventListeners() {
        // Search
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.render();
        });

        // Filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });

        // Export
        document.getElementById('exportBtn').addEventListener('click', () => this.exportProgress());

        // Reset
        document.getElementById('resetBtn').addEventListener('click', () => this.resetProgress());

        // Modal
        const modal = document.getElementById('modal');
        const closeBtn = document.querySelector('.close');
        const closeModalBtn = document.getElementById('modalCloseBtn');

        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    render() {
        const container = document.getElementById('categoriesContainer');
        container.innerHTML = '';

        let hasVisibleTasks = false;

        this.tasks.forEach(category => {
            const filteredTasks = category.tasks.filter(task => this.filterTask(task, category));

            if (filteredTasks.length === 0) return;

            hasVisibleTasks = true;

            const categoryEl = document.createElement('div');
            categoryEl.className = 'category';
            categoryEl.innerHTML = `
                <div class="category-header">
                    <div class="category-title">
                        <span class="icon">${category.icon}</span>
                        <span>${category.category}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span class="category-count">${filteredTasks.filter(t => this.completedTasks.has(t.id)).length}/${filteredTasks.length}</span>
                        <span class="category-toggle">▼</span>
                    </div>
                </div>
                <div class="category-content">
                    <div class="tasks-list"></div>
                </div>
            `;

            categoryEl.querySelector('.category-header').addEventListener('click', () => {
                categoryEl.classList.toggle('collapsed');
            });

            const tasksList = categoryEl.querySelector('.tasks-list');
            filteredTasks.forEach(task => {
                const taskEl = this.createTaskElement(task, category);
                tasksList.appendChild(taskEl);
            });

            container.appendChild(categoryEl);
        });

        document.getElementById('emptyState').style.display = hasVisibleTasks ? 'none' : 'block';
    }

    createTaskElement(task, category) {
        const taskEl = document.createElement('div');
        const isCompleted = this.completedTasks.has(task.id);
        taskEl.className = `task-item ${isCompleted ? 'completed' : ''}`;
        
        taskEl.innerHTML = `
            <input 
                type="checkbox" 
                class="task-checkbox" 
                ${isCompleted ? 'checked' : ''}
                data-task-id="${task.id}"
            >
            <div class="task-content">
                <div class="task-name">${task.name}</div>
                <div class="task-meta">
                    <a href="${task.link}" target="_blank" class="task-link">
                        Problem Link ↗
                    </a>
                    <span class="task-difficulty ${task.difficulty}">${task.difficulty}</span>
                </div>
            </div>
        `;

        const checkbox = taskEl.querySelector('.task-checkbox');
        checkbox.addEventListener('change', () => {
            this.toggleTask(task.id, checkbox.checked);
        });

        taskEl.addEventListener('click', (e) => {
            if (e.target !== checkbox && !e.target.closest('.task-link')) {
                this.showModal(task, category);
            }
        });

        return taskEl;
    }

    filterTask(task, category) {
        const matchesSearch = 
            task.name.toLowerCase().includes(this.searchQuery) ||
            category.category.toLowerCase().includes(this.searchQuery);

        if (!matchesSearch) return false;

        if (this.currentFilter === 'completed') {
            return this.completedTasks.has(task.id);
        } else if (this.currentFilter === 'pending') {
            return !this.completedTasks.has(task.id);
        }

        return true;
    }

    toggleTask(taskId, isCompleted) {
        if (isCompleted) {
            this.completedTasks.add(taskId);
        } else {
            this.completedTasks.delete(taskId);
        }

        this.saveProgress();
        this.updateStats();
        this.render();
    }

    showModal(task, category) {
        const modal = document.getElementById('modal');
        document.getElementById('modalTitle').textContent = task.name;
        document.getElementById('modalBody').innerHTML = `
            <p><strong>Category:</strong> ${category.category}</p>
            <p><strong>Difficulty:</strong> <span class="task-difficulty ${task.difficulty}">${task.difficulty}</span></p>
            <p><strong>Description:</strong> ${task.description}</p>
        `;
        document.getElementById('modalLink').href = task.link;
        modal.classList.add('active');
    }

    updateStats() {
        const totalTasks = this.tasks.reduce((sum, cat) => sum + cat.tasks.length, 0);
        const completedCount = this.completedTasks.size;
        const percentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

        document.getElementById('completedCount').textContent = completedCount;
        document.getElementById('totalCount').textContent = totalTasks;
        document.getElementById('percentComplete').textContent = percentage;
        document.getElementById('progressBarFill').style.width = percentage + '%';
    }

    saveProgress() {
        localStorage.setItem('dsaProgress', JSON.stringify(Array.from(this.completedTasks)));
    }

    loadProgress() {
        const saved = localStorage.getItem('dsaProgress');
        return saved ? JSON.parse(saved) : [];
    }

    exportProgress() {
        const totalTasks = this.tasks.reduce((sum, cat) => sum + cat.tasks.length, 0);
        const completedCount = this.completedTasks.size;
        const percentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

        const exportData = {
            exportDate: new Date().toISOString(),
            totalTasks: totalTasks,
            completedTasks: completedCount,
            completionPercentage: percentage,
            completedItems: this.tasks.map(category => ({
                category: category.category,
                completed: category.tasks
                    .filter(task => this.completedTasks.has(task.id))
                    .map(task => ({
                        id: task.id,
                        name: task.name,
                        difficulty: task.difficulty,
                        link: task.link
                    }))
            })).filter(cat => cat.completed.length > 0)
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `dsa-progress-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);

        alert(`Progress exported! ${completedCount}/${totalTasks} tasks completed (${percentage}%)`);
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            this.completedTasks.clear();
            this.saveProgress();
            this.updateStats();
            this.render();
            alert('All progress has been reset.');
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new DSATracker();
});
