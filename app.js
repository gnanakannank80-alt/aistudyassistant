/* AuraStudy // Premium Application JS Engine */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. DATA STORES & LOCAL STORAGE INSTANCES
    // ==========================================
    const DEFAULT_DECKS = [
        {
            id: 'premade-physics',
            name: 'Physics: Laws & Motion',
            cards: [
                { front: 'Newton\'s First Law of Motion', back: 'An object at rest stays at rest, and an object in motion stays in motion, unless acted on by a net external force (Inertia).' },
                { front: 'Newton\'s Second Law of Motion', back: 'The acceleration of an object is directly proportional to the net force acting on it, and inversely proportional to its mass (F = ma).' },
                { front: 'Newton\'s Third Law of Motion', back: 'For every action, there is an equal and opposite reaction.' },
                { front: 'First Law of Thermodynamics', back: 'Energy cannot be created or destroyed, only converted from one form to another (Law of Conservation of Energy).' },
                { front: 'Entropy', back: 'A measure of the molecular disorder or randomness in a system. The second law of thermodynamics states entropy always increases in an isolated system.' }
            ]
        },
        {
            id: 'premade-biology',
            name: 'Biology: Cell Structure',
            cards: [
                { front: 'Mitochondria', back: 'The powerhouse of the cell. Generates adenosine triphosphate (ATP), the cell\'s primary chemical energy source.' },
                { front: 'Ribosomes', back: 'Microscopic structures made of RNA and proteins. The site of protein synthesis in all living cells.' },
                { front: 'Chloroplast', back: 'Organelle found in plant cells that conducts photosynthesis, converting light energy into chemical energy (glucose).' },
                { front: 'Nucleus', back: 'The cell\'s control center. Contains DNA and coordinates growth, metabolism, and reproduction.' },
                { front: 'Lysosomes', back: 'Organelles containing digestive enzymes that break down waste materials, foreign particles, and worn-out cell parts.' }
            ]
        },
        {
            id: 'premade-cs',
            name: 'Computer Science: Core DS',
            cards: [
                { front: 'Stack', back: 'A linear data structure following the LIFO (Last In, First Out) principle. Operations: Push and Pop.' },
                { front: 'Queue', back: 'A linear data structure following the FIFO (First In, First Out) principle. Operations: Enqueue and Dequeue.' },
                { front: 'Binary Search Tree', back: 'A node-based binary tree structure where the left subtree contains values less than the parent node, and the right contains values greater.' },
                { front: 'Time Complexity of Binary Search', back: 'O(log n) in average and worst-case scenarios, since the search space is cut in half at each step.' },
                { front: 'Recursion', back: 'A programming technique where a function calls itself directly or indirectly to solve a problem by breaking it into smaller subproblems.' }
            ]
        }
    ];

    const PREPROGRAMMED_QUIZZES = {
        physics: [
            {
                q: "What is the force required to accelerate a 5kg mass at a rate of 4 m/s²?",
                o: ["1.25 N", "9 N", "20 N", "45 N"],
                a: 2,
                e: "According to Newton's Second Law, Force = mass × acceleration (F = ma). So, F = 5kg × 4 m/s² = 20 Newtons."
            },
            {
                q: "Which law states that energy cannot be created or destroyed, only transformed?",
                o: ["First Law of Thermodynamics", "Second Law of Thermodynamics", "Law of Universal Gravitation", "Hooke's Law"],
                a: 0,
                e: "The First Law of Thermodynamics is the version of the conservation of energy principle, stating that total energy in an isolated system remains constant."
            },
            {
                q: "What is the rate of acceleration due to gravity on Earth (approximate)?",
                o: ["9.8 m/s²", "1.6 m/s²", "3.14 m/s²", "98 m/s²"],
                a: 0,
                e: "The acceleration due to gravity (g) at Earth's surface is approximately 9.8 meters per second squared (9.8 m/s²)."
            },
            {
                q: "What does entropy measure in a thermodynamic system?",
                o: ["Total Heat Capacity", "Internal Kinetic Energy", "Disorder or Randomness", "Conservation of Mass"],
                a: 2,
                e: "Entropy is a thermodynamic property that measures the degree of disorder, randomness, or uncertainty in a system."
            },
            {
                q: "An object slides on a rough table and slows down. Which force is primarily responsible?",
                o: ["Centripetal Force", "Normal Force", "Gravitational Force", "Friction Force"],
                a: 3,
                e: "Friction is the resistive force that opposes the relative motion of two surfaces in contact, converting kinetic energy into thermal energy."
            }
        ],
        math: [
            {
                q: "What is the derivative of f(x) = x² + 3x - 5 with respect to x?",
                o: ["2x - 5", "2x + 3", "x + 3", "2x² + 3"],
                a: 1,
                e: "Using the power rule, the derivative of x² is 2x, the derivative of 3x is 3, and the derivative of the constant -5 is 0. Adding them gives 2x + 3."
            },
            {
                q: "What is the limit of (1/x) as x approaches infinity?",
                o: ["Infinity", "1", "Does not exist", "0"],
                a: 3,
                e: "As the denominator x grows infinitely large, the fraction (1/x) becomes infinitely small, approaching 0."
            },
            {
                q: "Solve for x in the equation: log₂(x) = 5.",
                o: ["10", "25", "32", "64"],
                a: 2,
                e: "Rewriting the logarithmic equation in exponential form gives: x = 2⁵. Calculating 2 × 2 × 2 × 2 × 2 yields 32."
            },
            {
                q: "What is the area of a circle with a radius of 7 units? (Use π ≈ 22/7)",
                o: ["44 sq units", "154 sq units", "49 sq units", "308 sq units"],
                a: 1,
                e: "Area = πr². Substituting the values: Area = (22/7) × 7 × 7 = 22 × 7 = 154 square units."
            },
            {
                q: "What is the slope of a line perpendicular to a line with slope 3/4?",
                o: ["-4/3", "4/3", "-3/4", "3/4"],
                a: 0,
                e: "Perpendicular lines have slopes that are negative reciprocals of each other. The negative reciprocal of 3/4 is -4/3."
            }
        ],
        biology: [
            {
                q: "Which organelle is responsible for synthesizing proteins in cells?",
                o: ["Mitochondria", "Ribosome", "Golgi Apparatus", "Lysosome"],
                a: 1,
                e: "Ribosomes translate genetic codes (mRNA) into amino acid chains, assembling them into proteins."
            },
            {
                q: "What pigment in plant cells absorbs solar light to drive photosynthesis?",
                o: ["Hemoglobin", "Carotene", "Chlorophyll", "Melanin"],
                a: 2,
                e: "Chlorophyll is the green pigment in chloroplasts that absorbs light energy (primarily blue and red wavelengths) for photosynthesis."
            },
            {
                q: "What is the primary energy currency molecule used by cells?",
                o: ["DNA", "Glucose", "RNA", "ATP"],
                a: 3,
                e: "Adenosine triphosphate (ATP) stores and transfers energy within cells for metabolism and mechanical work."
            },
            {
                q: "Which type of cell division results in four daughter cells with half the chromosome count?",
                o: ["Mitosis", "Binary Fission", "Meiosis", "Budding"],
                a: 2,
                e: "Meiosis is a specialized cell division that produces gametes (sperm/egg cells), halving the genetic material so fertilization restores the diploid state."
            },
            {
                q: "What is the primary function of lysosomes in eukaryotic cells?",
                o: ["Cellular Respiration", "Digestion and Waste Disposal", "Photosynthesis", "Lipid Synthesis"],
                a: 1,
                e: "Lysosomes contain acidic digestive enzymes that digest waste, cellular debris, and foreign objects."
            }
        ],
        history: [
            {
                q: "Which event is widely considered the trigger that started World War I in 1914?",
                o: ["The invasion of Poland", "The sinking of the Lusitania", "The assassination of Archduke Franz Ferdinand", "The signing of the Treaty of Versailles"],
                a: 2,
                e: "The assassination of Archduke Franz Ferdinand of Austria in Sarajevo on June 28, 1914, triggered a chain reaction of alliances that led to WWI."
            },
            {
                q: "What slogan was famously used during the French Revolution?",
                o: ["Give me liberty, or give me death", "Liberty, Equality, Fraternity", "No taxation without representation", "Blood and Iron"],
                a: 1,
                e: "Liberté, égalité, fraternité (Liberty, equality, fraternity) is the national motto of France and originated during the French Revolution."
            },
            {
                q: "In which year did Christopher Columbus cross the Atlantic and arrive in the Americas?",
                o: ["1215", "1492", "1517", "1776"],
                a: 1,
                e: "Columbus reached the Caribbean in 1492, initiating European exploration and colonization of the American continents."
            },
            {
                q: "Who was the primary author of the United States Declaration of Independence?",
                o: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
                a: 0,
                e: "Thomas Jefferson wrote the initial draft of the Declaration of Independence in June 1776, which was edited and adopted by the Continental Congress."
            },
            {
                q: "Which empire built the Machu Picchu citadel in the Andes mountains?",
                o: ["Aztec Empire", "Maya Empire", "Inca Empire", "Roman Empire"],
                a: 2,
                e: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru."
            }
        ],
        coding: [
            {
                q: "Which data structure operates on a First-In, First-Out (FIFO) access order?",
                o: ["Stack", "Queue", "Hash Table", "Binary Tree"],
                a: 1,
                e: "A Queue inserts elements at the back (enqueue) and removes from the front (dequeue), enforcing FIFO."
            },
            {
                q: "What is the average time complexity of searching in a balanced Binary Search Tree (BST)?",
                o: ["O(1)", "O(n)", "O(n log n)", "O(log n)"],
                a: 3,
                e: "A balanced BST halves the search space at each parent node, resulting in logarithmic lookup times O(log n)."
            },
            {
                q: "What does the term 'recursion' refer to in computer programming?",
                o: ["Looping a specific number of times", "A function calling itself to solve smaller subproblems", "Allocating dynamic memory space", "Inheriting class properties"],
                a: 1,
                e: "Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem. The function calls itself until reaching a base case."
            },
            {
                q: "Which of the following is NOT a relational database management system?",
                o: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
                a: 2,
                e: "MongoDB is a document-oriented, NoSQL database system, whereas PostgreSQL, MySQL, and SQLite store data in structured relational tables."
            },
            {
                q: "What is the main advantage of using a Hash Table data structure?",
                o: ["Maintains sorted order of elements", "Near constant-time O(1) average lookup and insertion", "Extremely low memory footprint", "Guarantees thread-safe operations"],
                a: 1,
                e: "By using a hash function to map keys to bucket indices, Hash Tables achieve average-case time complexities of O(1) for searches, inserts, and deletes."
            }
        ]
    };

    // Initialize Local Storage structures
    let appTasks = JSON.parse(localStorage.getItem('aura_study_tasks')) || [];
    let appNotes = JSON.parse(localStorage.getItem('aura_study_notes')) || [];
    let appDecks = JSON.parse(localStorage.getItem('aura_study_decks')) || DEFAULT_DECKS;
    let appQuizzes = JSON.parse(localStorage.getItem('aura_study_quizzes')) || [];
    let focusMinutes = parseInt(localStorage.getItem('aura_study_focus_mins')) || 0;
    let aiQueriesCount = parseInt(localStorage.getItem('aura_study_ai_queries')) || 0;
    
    let settings = JSON.parse(localStorage.getItem('aura_study_user_settings')) || {
        username: 'Scholar',
        apiKey: ''
    };

    // Save helpers
    function saveTasks() { localStorage.setItem('aura_study_tasks', JSON.stringify(appTasks)); updateDashboard(); }
    function saveNotes() { localStorage.setItem('aura_study_notes', JSON.stringify(appNotes)); updateDashboard(); }
    function saveDecks() { localStorage.setItem('aura_study_decks', JSON.stringify(appDecks)); }
    function saveQuizzes() { localStorage.setItem('aura_study_quizzes', JSON.stringify(appQuizzes)); updateDashboard(); }
    function saveSettings() { localStorage.setItem('aura_study_user_settings', JSON.stringify(settings)); updateApiWidget(); updateDashboard(); }

    // ==========================================
    // 2. SPA ROUTER & VIEWPORT TABS
    // ==========================================
    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');

    function navigateToView(targetId) {
        // Toggle view visibility
        viewSections.forEach(section => {
            if (section.id === `${targetId}-view`) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Toggle active navigation items
        navItems.forEach(item => {
            if (item.getAttribute('data-target') === targetId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Reset scroll position on nav
        document.querySelector('.main-content').scrollTop = 0;

        // Perform module-specific initializations
        if (targetId === 'kanban') {
            renderKanbanBoard();
        } else if (targetId === 'notes') {
            renderNotesLibrary();
        } else if (targetId === 'flashcards') {
            renderDecksList();
            updateQuizNotesDropdown();
        }
    }

    // Set routing based on click
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-target');
            window.location.hash = target;
        });
    });

    // Hash change handler
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1) || 'dashboard';
        // Verify valid view
        const validViews = ['dashboard', 'ai-chat', 'notes', 'flashcards', 'focus', 'kanban'];
        if (validViews.includes(hash)) {
            navigateToView(hash);
        }
    });

    // Initialize default routing
    const initialHash = window.location.hash.substring(1) || 'dashboard';
    navigateToView(initialHash);

    // Sidebar collapsible toggle
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        const icon = sidebarToggle.querySelector('i');
        if (sidebar.classList.contains('collapsed')) {
            icon.className = 'fa-solid fa-chevron-right';
        } else {
            icon.className = 'fa-solid fa-chevron-left';
        }
    });

    // ==========================================
    // 3. DASHBOARD CORE & WIDGETS
    // ==========================================
    const greetingText = document.getElementById('greetingText');
    const quoteText = document.getElementById('quoteText');
    const currentDateText = document.getElementById('currentDateText');

    const statsFocusTime = document.getElementById('statsFocusTime');
    const statsTasksDone = document.getElementById('statsTasksDone');
    const statsAiQueries = document.getElementById('statsAiQueries');
    const statsQuizAvg = document.getElementById('statsQuizAvg');
    const statsQuizCount = document.getElementById('statsQuizCount');
    
    const tasksDoneBar = document.getElementById('tasksDoneBar');
    const dashboardTaskList = document.getElementById('dashboardTaskList');
    const dashboardLibraryList = document.getElementById('dashboardLibraryList');
    
    const MOTIVATIONAL_QUOTES = [
        "\"The beautiful thing about learning is that no one can take it away from you.\" — B.B. King",
        "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" — Winston Churchill",
        "\"It always seems impossible until it's done.\" — Nelson Mandela",
        "\"Live as if you were to die tomorrow. Learn as if you were to live forever.\" — Mahatma Gandhi",
        "\"The mind is not a vessel to be filled, but a fire to be kindled.\" — Plutarch",
        "\"You don't have to be great to start, but you have to start to be great.\" — Zig Ziglar",
        "\"Focus is a muscle, and you build it through distraction-free intervals.\""
    ];

    function updateDashboard() {
        // Set Greeting based on time
        const hr = new Date().getHours();
        let timeGreeting = "Good morning";
        if (hr >= 12 && hr < 17) {
            timeGreeting = "Good afternoon";
        } else if (hr >= 17) {
            timeGreeting = "Good evening";
        }
        greetingText.textContent = `${timeGreeting}, ${settings.username || 'Scholar'}!`;

        // Update stats widgets
        statsFocusTime.textContent = `${focusMinutes} mins`;
        statsAiQueries.textContent = aiQueriesCount;

        // Tasks calculation
        const totalTasks = appTasks.length;
        const doneTasks = appTasks.filter(t => t.status === 'completed').length;
        statsTasksDone.textContent = `${doneTasks} / ${totalTasks}`;
        const taskPercent = totalTasks > 0 ? (doneTasks / totalTasks) * 100 : 0;
        tasksDoneBar.style.width = `${taskPercent}%`;

        // Quiz score calculations
        if (appQuizzes.length > 0) {
            const sumScore = appQuizzes.reduce((sum, q) => sum + (q.score / q.total), 0);
            const avg = Math.round((sumScore / appQuizzes.length) * 100);
            statsQuizAvg.textContent = `${avg}%`;
            statsQuizCount.textContent = `${appQuizzes.length} quiz${appQuizzes.length > 1 ? 'zes' : ''} completed`;
        } else {
            statsQuizAvg.textContent = '0%';
            statsQuizCount.textContent = 'No quizzes taken yet';
        }

        // Render urgent tasks list (Todo or In Progress, prioritised by high priority and date)
        const activeTasks = appTasks.filter(t => t.status !== 'completed');
        activeTasks.sort((a, b) => {
            const prioMap = { high: 3, medium: 2, low: 1 };
            if (prioMap[b.priority] !== prioMap[a.priority]) {
                return prioMap[b.priority] - prioMap[a.priority];
            }
            return new Date(a.deadline) - new Date(b.deadline);
        });

        if (activeTasks.length > 0) {
            dashboardTaskList.innerHTML = activeTasks.slice(0, 3).map(task => {
                const priorityClass = `priority-${task.priority}`;
                return `
                    <div class="sound-row-card glass-card" style="padding: 12px 16px;">
                        <div class="sound-meta">
                            <span class="column-dot ${task.status === 'progress' ? 'yellow' : 'red'}"></span>
                            <div>
                                <span class="sound-name">${task.title}</span>
                                <span class="priority-tag ${priorityClass}" style="display:inline-block; margin-top:4px;">${task.priority}</span>
                            </div>
                        </div>
                        <button class="btn btn-icon btn-outline btn-card-action" onclick="window.location.hash='#kanban'" title="Go to task">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                `;
            }).join('');
        } else {
            dashboardTaskList.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-clipboard-check text-muted"></i>
                    <p>No active study tasks. Enjoy your clean slate!</p>
                </div>
            `;
        }

        // Render saved library and custom decks list
        const totalItems = [];
        appNotes.forEach(n => totalItems.push({ title: n.title, type: `Note: ${n.type}`, route: '#notes' }));
        appDecks.filter(d => !d.id.startsWith('premade')).forEach(d => totalItems.push({ title: d.name, type: 'Flashcard Deck', route: '#flashcards' }));
        
        if (totalItems.length > 0) {
            dashboardLibraryList.innerHTML = totalItems.slice(0, 3).map(item => `
                <div class="sound-row-card glass-card" style="padding: 12px 16px;">
                    <div class="sound-meta">
                        <span class="sound-icon"><i class="fa-solid fa-bookmark text-purple"></i></span>
                        <div>
                            <span class="sound-name">${item.title}</span>
                            <span class="sound-type">${item.type}</span>
                        </div>
                    </div>
                    <button class="btn btn-icon btn-outline" onclick="window.location.hash='${item.route}'">
                        <i class="fa-solid fa-book-open"></i>
                    </button>
                </div>
            `).join('');
        } else {
            dashboardLibraryList.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-book-open text-muted"></i>
                    <p>Library is empty. Create summaries to populate details.</p>
                </div>
            `;
        }
    }

    // Set date and quotes on dashboard load
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    currentDateText.textContent = new Date().toLocaleDateString('en-US', dateOptions);
    quoteText.textContent = MOTIVATIONAL_QUOTES[new Date().getDay() % MOTIVATIONAL_QUOTES.length];

    // ==========================================
    // 4. SETTINGS & GEMINI CONFIGURATION
    // ==========================================
    const settingsModal = document.getElementById('settingsModal');
    const openSettingsBtn = document.getElementById('openSettingsBtn');
    const closeSettingsBtn = document.getElementById('closeSettingsBtn');
    const btnSaveSettings = document.getElementById('btnSaveSettings');
    const settingsUsername = document.getElementById('settingsUsername');
    const geminiApiKey = document.getElementById('geminiApiKey');
    const btnResetAllData = document.getElementById('btnResetAllData');
    const apiStatusWidget = document.getElementById('apiStatusWidget');
    const apiStatusText = document.getElementById('apiStatusText');
    const aiTutorModeStats = document.getElementById('aiTutorModeStats');

    function updateApiWidget() {
        const dot = apiStatusWidget.querySelector('.status-indicator-dot');
        if (settings.apiKey && settings.apiKey.trim() !== '') {
            dot.className = 'status-indicator-dot online';
            apiStatusText.textContent = 'API Key Connected';
            aiTutorModeStats.textContent = 'API Connection Active';
        } else {
            dot.className = 'status-indicator-dot offline';
            apiStatusText.textContent = 'Local Simulation Mode';
            aiTutorModeStats.textContent = 'Offline Mode';
        }
    }

    openSettingsBtn.addEventListener('click', () => {
        settingsUsername.value = settings.username || 'Scholar';
        geminiApiKey.value = settings.apiKey || '';
        settingsModal.classList.add('active');
    });

    closeSettingsBtn.addEventListener('click', () => {
        settingsModal.classList.remove('active');
    });

    btnSaveSettings.addEventListener('click', () => {
        settings.username = settingsUsername.value.trim() || 'Scholar';
        settings.apiKey = geminiApiKey.value.trim();
        saveSettings();
        settingsModal.classList.remove('active');
    });

    btnResetAllData.addEventListener('click', () => {
        if (confirm('Are you absolutely sure you want to clear all data? This deletes all custom flashcards, tasks, summaries, and stats.')) {
            localStorage.clear();
            appTasks = [];
            appNotes = [];
            appDecks = DEFAULT_DECKS;
            appQuizzes = [];
            focusMinutes = 0;
            aiQueriesCount = 0;
            settings = { username: 'Scholar', apiKey: '' };
            saveSettings();
            saveTasks();
            saveNotes();
            saveDecks();
            saveQuizzes();
            window.location.reload();
        }
    });

    // Theme Switch placeholder (pure dark mode aesthetic target)
    document.getElementById('themeSwitch').addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = document.getElementById('themeSwitch').querySelector('i');
        if (document.body.classList.contains('light-theme')) {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    });

    // ==========================================
    // 5. AI TUTOR CHAT & RESPONSE CONTROLLER
    // ==========================================
    const chatMessages = document.getElementById('chatMessages');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const clearChatBtn = document.getElementById('clearChatBtn');
    const aiModeChips = document.getElementById('aiModeChips');
    const promptPills = document.querySelectorAll('.prompt-pill');

    let activeExplainStyle = 'balanced';

    // Toggle Explain Style Chips
    aiModeChips.addEventListener('click', (e) => {
        if (e.target.classList.contains('chip')) {
            aiModeChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            activeExplainStyle = e.target.getAttribute('data-style');
        }
    });

    // Auto-growing textarea for chat input
    chatInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight - 6) + 'px';
    });

    // Clear chat handler
    clearChatBtn.addEventListener('click', () => {
        chatMessages.innerHTML = '';
        renderWelcomeMessage();
    });

    // Quick prompt pills
    promptPills.forEach(pill => {
        pill.addEventListener('click', () => {
            chatInput.value = pill.getAttribute('data-prompt');
            chatInput.style.height = 'auto';
            chatInput.style.height = (chatInput.scrollHeight - 6) + 'px';
            chatInput.focus();
        });
    });

    function appendMessage(sender, text, isMarkdown = true) {
        const bubbleRow = document.createElement('div');
        bubbleRow.className = `chat-bubble-row ${sender}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble glass-card';
        
        if (isMarkdown && sender === 'assistant') {
            bubble.innerHTML = formatMarkdownToHtml(text);
        } else {
            bubble.textContent = text;
        }
        
        bubbleRow.appendChild(bubble);
        chatMessages.appendChild(bubbleRow);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function formatMarkdownToHtml(text) {
        // Simple client-side regex markdown converter
        let html = text;
        
        // Escape HTML entities to avoid broken tags
        html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        // Code Blocks
        html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
        // Inline Code
        html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');
        // Bold
        html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        // Italic
        html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        
        // Headers (H4)
        html = html.replace(/^#### (.*?)$/gm, '<h4>$1</h4>');
        html = html.replace(/^### (.*?)$/gm, '<h4>$1</h4>');
        html = html.replace(/^## (.*?)$/gm, '<h4>$1</h4>');
        
        // List items
        html = html.replace(/^\s*-\s+(.*?)$/gm, '<li>$1</li>');
        html = html.replace(/^\s*\*\s+(.*?)$/gm, '<li>$1</li>');
        
        // Group list tags
        html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
        
        // Linebreaks
        html = html.replace(/\n/g, '<br>');
        // Clean double breaks around blocks
        html = html.replace(/<pre><code><br>/g, '<pre><code>');
        html = html.replace(/<\/code><\/pre><br>/g, '</code></pre>');
        html = html.replace(/<\/h4><br>/g, '</h4>');
        
        return html;
    }

    function renderWelcomeMessage() {
        const welcomText = `Hello! I'm your **Aura AI Study Coach**. 🤖
        
        I can help you review concept summaries, run custom test questions, explain advanced math/science concepts, or create study flashcard decks.
        
        **Select a custom study style** above to change how I explain concepts:
        - **Standard**: Crisp, logical textbook explanations.
        - **Explain Like I'm 5**: Uses ultra-simple words, child-like analogies, and short summaries.
        - **Analogy Master**: Anchors dense concepts to real-world objects.
        - **Socratic Method**: Guides you through questions rather than handing you the answers directly.
        - **Exam Prep**: Focuses on structured outlines, standard definitions, and key exam details.`;
        
        appendMessage('assistant', welcomText);
    }

    renderWelcomeMessage();

    // AI Query Handlers
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        appendMessage('user', text);
        chatInput.value = '';
        chatInput.style.height = 'auto';

        // Add loading typing indicator
        const indicator = document.createElement('div');
        indicator.className = 'chat-bubble-row assistant';
        indicator.id = 'typingIndicatorRow';
        indicator.innerHTML = `
            <div class="message-bubble glass-card typing-indicator">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;
        chatMessages.appendChild(indicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        aiQueriesCount++;
        localStorage.setItem('aura_study_ai_queries', aiQueriesCount);
        updateDashboard();

        try {
            let responseText = '';
            if (settings.apiKey && settings.apiKey.trim() !== '') {
                responseText = await fetchGeminiResponse(text, activeExplainStyle);
            } else {
                responseText = await getSimulatedResponse(text, activeExplainStyle);
            }
            
            // Remove indicator and append message
            const indRow = document.getElementById('typingIndicatorRow');
            if (indRow) indRow.remove();
            appendMessage('assistant', responseText);
        } catch (err) {
            console.error(err);
            const indRow = document.getElementById('typingIndicatorRow');
            if (indRow) indRow.remove();
            appendMessage('assistant', `⚠️ **Error matching prompt**: Could not resolve response. Details: ${err.message || 'Check network connection.'}`);
        }
    });

    // Call Real Google Gemini API client-side
    async function fetchGeminiResponse(prompt, style) {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${settings.apiKey}`;
        
        let systemContext = "You are Aura Study, a helpful, encouraging client-side AI academic tutor. Keep formatting concise, using clean markdown, lists, and headers.";
        
        if (style === 'eli5') {
            systemContext += " Respond to the user using the 'Explain Like I'm 5' technique: avoid jargon, use extremely simple language, paint vivid mental images, keep sentences short and clear.";
        } else if (style === 'analogy') {
            systemContext += " Structure your explanation by building one dominant, creative, real-world analogy. Break it down to explain the complex concepts.";
        } else if (style === 'socratic') {
            systemContext += " Do not give direct answers immediately. Act as a Socratic tutor: ask brief, leading questions, prompt the user's critical thinking, validate correct parts of their thoughts, and guide them to deduce the fact step-by-step.";
        } else if (style === 'exam') {
            systemContext += " Format your reply like a syllabus outline. Break topics down to core terms, bullet point definitions, list common trap questions, and write a quick 3-question summary test.";
        }

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: `${systemContext}\n\nUser Question: ${prompt}` }
                        ]
                    }
                ]
            })
        });

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't form a response.";
    }

    // Offline Local simulated dictionary responses
    function getSimulatedResponse(prompt, style) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const lower = prompt.toLowerCase();
                let topic = "general";
                
                // Categorize topic
                if (lower.includes('photo') || lower.includes('plant') || lower.includes('chlorophyll')) topic = "photosynthesis";
                else if (lower.includes('gravity') || lower.includes('newton') || lower.includes('force')) topic = "gravity";
                else if (lower.includes('deriv') || lower.includes('calculus') || lower.includes('slope')) topic = "derivatives";
                else if (lower.includes('french') || lower.includes('revolut') || lower.includes('bastille')) topic = "french_revolution";
                else if (lower.includes('database') || lower.includes('sql') || lower.includes('nosql')) topic = "databases";
                else if (lower.includes('recursion') || lower.includes('recursive')) topic = "recursion";
                else if (lower.includes('mitochondria') || lower.includes('cell')) topic = "mitochondria";
                
                // Templates
                const responses = {
                    photosynthesis: {
                        balanced: `#### Photosynthesis Overview 🌿
                        Photosynthesis is the cellular process used by plants, algae, and certain bacteria to convert light energy into chemical energy.
                        
                        **The Equation:**
                        \`6CO₂ + 6H₂O + light energy ➔ C₆H₁₂O₆ + 6O₂\`
                        
                        **Key Stages:**
                        - **Light-dependent Reactions**: Occurs in chloroplast thylakoids. Sunlight splitting water molecules creates ATP and NADPH, releasing oxygen.
                        - **Calvin Cycle (Light-independent)**: Occurs in the stroma. Uses ATP and NADPH to convert carbon dioxide into glucose.`,
                        eli5: `#### Let's talk about Photosynthesis! ☀️
                        Imagine you are a plant. You get hungry, but you don't have a kitchen or hands to make food.
                        
                        So, you use magic powers! You catch **sunlight rays** in your green leaves, drink **water** from your roots, and breathe in **air**.
                        
                        Using solar energy, you bake these ingredients together to make sweet **sugars** (glucose) to eat, and breathe out fresh **oxygen** for us to breathe!`,
                        analogy: `#### The Leaf Bakery Analogy 🍞
                        Photosynthesis works just like a bread bakery:
                        - **The Bakery**: The Chloroplast.
                        - **The Chef**: Chlorophyll, catching solar heat.
                        - **Ingredients**: Carbon dioxide (air) and water (liquid).
                        - **The Oven**: Sunlight energy.
                        - **The Bread**: Glucose (chemical energy stored for later).
                        - **Waste Scrap**: Oxygen (thrown out the vents).`,
                        socratic: `#### Let's explore plants! 🌿
                        Plants grow and multiply, requiring energy. Where do you think they get this energy from since they don't eat food like animals?
                        
                        If a plant is left in a pitch-black closet for a week, what do you predict happens to it, and what ingredient was it missing?`,
                        exam: `#### Exam Guide: Photosynthesis 📝
                        - **Location**: Chloroplast.
                        - **Pigment**: Chlorophyll (absorbs blue/red, reflects green).
                        - **Light Phase**: Splits H₂O ➔ releases O₂, makes ATP & NADPH.
                        - **Dark Phase (Calvin Cycle)**: Rubisco enzyme fixes CO₂ into glucose.
                        - **Common Trap**: Photosynthesis does NOT only happen in sunlight. The Calvin Cycle can run in the dark as long as ATP/NADPH are charged.`
                    },
                    gravity: {
                        balanced: `#### Gravitational Laws 🌌
                        Gravity is the attractive force between any two masses.
                        
                        **Newton's Law of Gravitation:**
                        \`F = G * (m₁ * m₂) / r²\`
                        
                        - **Earth's constant**: g ≈ 9.8 m/s² (acceleration due to gravity).
                        - **Relativity**: Einstein redefined gravity as the curvature of spacetime caused by mass.`,
                        eli5: `#### Gravity: The Universe's Hug! 🌎
                        Why doesn't your toy float away when you drop it? Because of **Gravity**!
                        
                        Everything with weight pulls on everything else. The Earth is super, super heavy, so it pulls hard on you, keeping your feet on the ground. Think of it as Earth hugging everything close!`,
                        analogy: `#### The Trampoline Analogy 🛏️
                        Imagine space is a giant, stretched trampoline.
                        - If you place a heavy **bowling ball** (the Sun) in the middle, the fabric curves down.
                        - If you roll a tiny **marble** (the Earth) near it, the marble circles around the dip.
                        - Gravity is not a pull string; it's mass bending the fabric of space!`,
                        socratic: `#### Gravity Questions 🌌
                        When you drop a heavy hammer and a light feather in a room filled with air, the hammer hits the ground first.
                        
                        If we sucked all the air out of the room to create a vacuum, what do you think would happen, and why?`,
                        exam: `#### Exam Guide: Gravity 📝
                        - **Formula**: F = G(m₁m₂)/r² (Inverse Square Law).
                        - **G vs g**: G is the Universal Gravitational Constant (\`6.674×10⁻¹¹\`); g is local acceleration (\`9.8 m/s²\`).
                        - **Trap**: Weight changes on different planets (mass × gravity), but your Mass remains identical.`
                    },
                    derivatives: {
                        balanced: `#### Derivatives in Calculus 📈
                        A derivative measures the instantaneous rate of change of a function with respect to a variable.
                        
                        **The Limit Definition:**
                        \`f'(x) = lim (h➔0) [f(x+h) - f(x)] / h\`
                        
                        Graphically, it represents the slope of the tangent line to the curve at any given coordinate.`,
                        eli5: `#### Derivatives: Speedometers! 🚗
                        If you drive a car, your **speedometer** tells you exactly how fast you are moving *right at this second*.
                        
                        If you look at the total distance traveled, that's regular math. But zooming in to find your exact speed at one tiny moment—that's a derivative!`,
                        analogy: `#### The Mountain Rollercoaster 🎢
                        Imagine riding a rollercoaster on a wavy track:
                        - At the very peak, the coaster is flat for a split second (slope = 0).
                        - As you plunge down, the coaster tilts down steeply (slope is negative).
                        - The **derivative** is like a laser pointer stuck to the bottom of the coaster, pointing along the track to show your exact direction of tilt at any instant.`,
                        socratic: `#### Calculus Explorations 📈
                        If a car travels 60 miles in 1 hour, its average speed is 60 mph.
                        
                        Does this mean the car was moving at exactly 60 mph for the entire trip? How could we find the speed at exactly 30 minutes in?`,
                        exam: `#### Exam Guide: Derivatives 📝
                        - **Power Rule**: d/dx(xⁿ) = n·xⁿ⁻¹.
                        - **Chain Rule**: d/dx(f(g(x))) = f'(g(x))·g'(x).
                        - **Visual Meaning**: Slope of the tangent line. If derivative = 0, the function is at a local maximum or minimum.`
                    },
                    general: {
                        balanced: `#### Concept Explainer 🧠
                        Here is a general summary of the concept you requested:
                        - **Core Idea**: Concepts are structured hierarchically for easier absorption.
                        - **Key Elements**: Focus on fundamental terms first, then build up to practical equations or events.
                        
                        *Tip: For authentic, customized tutoring, save a free Google Gemini API key in Settings (cog icon in bottom-left corner).*`,
                        eli5: `#### Let's keep it simple! ⭐
                        This concept is all about building blocks. We start with small parts, link them together, and make bigger shapes.
                        
                        Think of it like building with Lego blocks—one step at a time!`,
                        analogy: `#### The Library Analogy 📚
                        Understanding this concept is like organizing a library:
                        - You must label the boxes (definitions).
                        - You arrange books on shelves (structures).
                        - You read them to gain knowledge (applications).`,
                        socratic: `#### Let's think together! 💭
                        You've asked about an interesting topic.
                        
                        What do you already know about this area, and how do you think it relates to things you see around you every day?`,
                        exam: `#### Exam Guide Outline 📝
                        - **Fundamental Terms**: Define the core concepts.
                        - **Formulas/Mechanics**: Understand the active formulas.
                        - **Key Question**: Focus on how variables influence each other.`
                    }
                };

                resolve(responses[topic][style] || responses[topic]['balanced']);
            }, 600);
        });
    }

    // ==========================================
    // 6. SMART NOTE SUMMARY & PARSER ENGINE
    // ==========================================
    const noteInputText = document.getElementById('noteInputText');
    const clearNoteInputBtn = document.getElementById('clearNoteInputBtn');
    
    const btnSummarizeNote = document.getElementById('btnSummarizeNote');
    const btnExtractTerms = document.getElementById('btnExtractTerms');
    const btnMindMap = document.getElementById('btnMindMap');
    const btnGenCardsFromNote = document.getElementById('btnGenCardsFromNote');
    
    const noteOutputDisplay = document.getElementById('noteOutputDisplay');
    const outputActionButtons = document.getElementById('outputActionButtons');
    const copyOutputBtn = document.getElementById('copyOutputBtn');
    const saveNoteBtn = document.getElementById('saveNoteBtn');
    const libraryCardsList = document.getElementById('libraryCardsList');

    let currentGeneratedOutput = '';
    let currentOutputType = 'summary'; // summary, terms, mindmap
    let currentInputSubject = 'Pasted Notes';

    clearNoteInputBtn.addEventListener('click', () => {
        noteInputText.value = '';
    });

    copyOutputBtn.addEventListener('click', () => {
        if (!currentGeneratedOutput) return;
        navigator.clipboard.writeText(currentGeneratedOutput);
        alert('Output copied to clipboard!');
    });

    saveNoteBtn.addEventListener('click', () => {
        if (!currentGeneratedOutput) return;
        
        // Pick a title based on text
        let title = noteInputText.value.trim().split('\n')[0].replace(/[#*`]/g, '').slice(0, 30);
        if (!title || title.length < 5) title = `Summary: ${new Date().toLocaleDateString()}`;
        
        const newNote = {
            id: 'note-' + Date.now(),
            title: title,
            text: noteInputText.value,
            summary: currentGeneratedOutput,
            type: currentOutputType,
            date: new Date().toLocaleDateString()
        };

        appNotes.push(newNote);
        saveNotes();
        renderNotesLibrary();
        alert('Note saved to library!');
    });

    // Local extraction fallback parser
    function generateLocalSummary(text) {
        const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 10);
        if (sentences.length === 0) return "Please paste a longer text (at least 50 words) to summarize.";
        
        // Extract sentences containing key educational indicators
        const indicators = ['is', 'are', 'important', 'key', 'result', 'because', 'therefore', 'first', 'mechanism', 'focus'];
        let extracted = sentences.filter(s => {
            const words = s.toLowerCase().split(' ');
            return words.some(w => indicators.includes(w));
        });

        if (extracted.length === 0) extracted = sentences.slice(0, Math.min(sentences.length, 5));
        
        let markdown = `#### Summary Bullets 📋\n\n`;
        markdown += extracted.slice(0, 6).map(s => `- **Key Concept**: ${s}.`).join('\n\n');
        return markdown;
    }

    function generateLocalTerms(text) {
        const words = text.split(/\s+/).map(w => w.replace(/[^a-zA-Z]/g, ''));
        // Mock extract capitalised nouns
        const nouns = [...new Set(words.filter(w => w.length > 4 && w[0] === w[0].toUpperCase()))].slice(0, 5);
        
        let markdown = `#### Key Term Glossary 📖\n\n`;
        if (nouns.length === 0) {
            markdown += `- **Topic Core**: The primary subject discussed in the pasted material.\n\n`;
            markdown += `- **Key Mechanism**: The core active process defined inside the lectures.`;
        } else {
            markdown += nouns.map(n => `- **${n}**: Concept extracted from notes. Review terms in details.`).join('\n\n');
        }
        return markdown;
    }

    function generateLocalMindmap(text) {
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 5);
        let markdown = `#### Concept Map Hierarchy 🗺️\n\n`;
        markdown += `<div class="concept-node concept-node-root">
            <div class="node-title"><i class="fa-solid fa-folder-tree"></i> Central Subject: Study Material</div>`;
            
        lines.slice(0, 4).forEach((line, i) => {
            markdown += `
            <div class="concept-node">
                <div class="node-title"><i class="fa-solid fa-circle-dot"></i> Node ${i+1}: ${line.slice(0, 45)}...</div>
                <div class="concept-node">
                    <div class="node-title"><i class="fa-solid fa-turn-up" style="transform: rotate(90deg)"></i> Sub-concept details</div>
                </div>
            </div>`;
        });
        
        markdown += `</div>`;
        return markdown;
    }

    // Action handlers for summarizer
    async function triggerAnalysis(type) {
        const text = noteInputText.value.trim();
        if (text.length < 50) {
            alert('Please paste a substantial note (at least 50 words) for analysis.');
            return;
        }

        noteOutputDisplay.innerHTML = `
            <div class="empty-state-output">
                <i class="fa-solid fa-spinner fa-spin text-cyan" style="font-size: 40px;"></i>
                <h4>Analyzing Study Material...</h4>
                <p>Generating structured formatting using ${settings.apiKey ? 'Gemini API' : 'local extraction engine'}.</p>
            </div>
        `;
        outputActionButtons.style.display = 'none';

        try {
            let result = '';
            currentOutputType = type;
            
            if (settings.apiKey && settings.apiKey.trim() !== '') {
                let prompt = '';
                if (type === 'summary') prompt = `Summarize the following text in key, structured bullet points. Group by subheaders:\n\n${text}`;
                else if (type === 'terms') prompt = `Extract all key terminology, glossary terms, or formulas from this text, and provide precise, exam-focused definitions for each:\n\n${text}`;
                else if (type === 'mindmap') prompt = `Create a hierarchical nested list representing a concept mind map of the following text. Use nested dashes (- and   -) to represent subnodes:\n\n${text}`;
                
                result = await fetchGeminiResponse(prompt, 'balanced');
            } else {
                if (type === 'summary') result = generateLocalSummary(text);
                else if (type === 'terms') result = generateLocalTerms(text);
                else if (type === 'mindmap') result = generateLocalMindmap(text);
            }

            currentGeneratedOutput = result;
            noteOutputDisplay.innerHTML = formatMarkdownToHtml(result);
            outputActionButtons.style.display = 'flex';
        } catch (err) {
            console.error(err);
            noteOutputDisplay.innerHTML = `
                <div class="empty-state-output">
                    <i class="fa-solid fa-triangle-exclamation text-red"></i>
                    <h4>Analysis Failed</h4>
                    <p>${err.message || 'Check network or credentials.'}</p>
                </div>
            `;
        }
    }

    btnSummarizeNote.addEventListener('click', () => triggerAnalysis('summary'));
    btnExtractTerms.addEventListener('click', () => triggerAnalysis('terms'));
    btnMindMap.addEventListener('click', () => triggerAnalysis('mindmap'));

    // Auto flashcards creator from notes
    btnGenCardsFromNote.addEventListener('click', async () => {
        const text = noteInputText.value.trim();
        if (text.length < 50) {
            alert('Please paste text notes to extract cards from.');
            return;
        }

        noteOutputDisplay.innerHTML = `
            <div class="empty-state-output">
                <i class="fa-solid fa-wand-magic-sparkles fa-spin text-purple" style="font-size: 40px;"></i>
                <h4>Extracting Flashcards...</h4>
                <p>Parsing sentences to formulate Q&A study decks.</p>
            </div>
        `;

        try {
            let cards = [];
            if (settings.apiKey && settings.apiKey.trim() !== '') {
                const prompt = `Generate exactly 5 key flashcards from this text in the format 'Q: [question] | A: [answer]'. Output only the cards, one per line, separated by '|':\n\n${text}`;
                const raw = await fetchGeminiResponse(prompt, 'balanced');
                const lines = raw.split('\n').filter(l => l.includes('|'));
                lines.forEach(l => {
                    const parts = l.split('|');
                    const q = parts[0].replace('Q:', '').trim();
                    const a = parts[1].replace('A:', '').trim();
                    if (q && a) cards.push({ front: q, back: a });
                });
            } else {
                // Fallback local split sentences
                const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 15);
                sentences.slice(0, 5).forEach((s, idx) => {
                    cards.push({
                        front: `Identify the context of fact #${idx+1} from notes:`,
                        back: s
                    });
                });
            }

            if (cards.length > 0) {
                const newDeck = {
                    id: 'custom-' + Date.now(),
                    name: 'Extracted: ' + (text.split('\n')[0].slice(0, 20) || 'Lecture Notes'),
                    cards: cards
                };
                appDecks.push(newDeck);
                saveDecks();
                
                noteOutputDisplay.innerHTML = `
                    <div class="empty-state-output text-emerald">
                        <i class="fa-solid fa-circle-check" style="font-size: 38px;"></i>
                        <h4>Flashcard Deck Generated!</h4>
                        <p>A new deck with ${cards.length} cards has been saved successfully. Head to the 'Cards & Quizzes' section to review it.</p>
                        <button class="btn btn-secondary" onclick="window.location.hash='#flashcards'">Go Study Decks</button>
                    </div>
                `;
            } else {
                throw new Error("No cards could be formatted from the output.");
            }
        } catch (err) {
            console.error(err);
            noteOutputDisplay.innerHTML = `
                <div class="empty-state-output">
                    <i class="fa-solid fa-triangle-exclamation text-red"></i>
                    <h4>Extraction Failed</h4>
                    <p>Make sure the input contains structured facts.</p>
                </div>
            `;
        }
    });

    // Render Saved notes library
    function renderNotesLibrary() {
        if (appNotes.length === 0) {
            libraryCardsList.innerHTML = `<p class="small-text text-muted" style="padding: 10px;">Your summary library is empty.</p>`;
            return;
        }

        libraryCardsList.innerHTML = appNotes.map((note) => {
            let badgeClass = 'lib-type-summary';
            if (note.type === 'terms') badgeClass = 'lib-type-terms';
            if (note.type === 'mindmap') badgeClass = 'lib-type-mindmap';
            
            return `
                <div class="library-card glass-card" data-id="${note.id}">
                    <span class="lib-card-type ${badgeClass}">${note.type}</span>
                    <h4 class="lib-card-title">${note.title}</h4>
                    <p class="lib-card-preview">${note.summary.replace(/[#*`]/g, '').slice(0, 60)}...</p>
                    <div class="lib-card-footer">
                        <span>${note.date}</span>
                        <button class="btn-delete-lib" data-id="${note.id}" title="Delete Saved Note">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        // Card click handler to load back to preview
        libraryCardsList.querySelectorAll('.library-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Ignore if clicked delete
                if (e.target.closest('.btn-delete-lib')) return;
                
                const id = card.getAttribute('data-id');
                const note = appNotes.find(n => n.id === id);
                if (note) {
                    noteInputText.value = note.text;
                    currentGeneratedOutput = note.summary;
                    currentOutputType = note.type;
                    noteOutputDisplay.innerHTML = formatMarkdownToHtml(note.summary);
                    outputActionButtons.style.display = 'flex';
                }
            });
        });

        // Delete notes click
        libraryCardsList.querySelectorAll('.btn-delete-lib').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                appNotes = appNotes.filter(n => n.id !== id);
                saveNotes();
                renderNotesLibrary();
            });
        });
    }

    // ==========================================
    // 7. TAB HANDLERS (QUIZZES / FLASHCARDS)
    // ==========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // ==========================================
    // 8. INTERACTIVE QUIZ CONTROLLER
    // ==========================================
    const quizTopicSelect = document.getElementById('quizTopicSelect');
    const customNotesOption = document.getElementById('customNotesOption');
    const btnStartNewQuiz = document.getElementById('btnStartNewQuiz');
    
    const quizPlayerPanel = document.getElementById('quizPlayerPanel');
    const quizInactiveState = document.getElementById('quizInactiveState');
    const quizActiveState = document.getElementById('quizActiveState');
    const quizCompleteState = document.getElementById('quizCompleteState');

    const quizQuestionCountText = document.getElementById('quizQuestionCountText');
    const quizTimerText = document.getElementById('quizTimerText');
    const quizProgressBarFill = document.getElementById('quizProgressBarFill');
    const quizQuestionText = document.getElementById('quizQuestionText');
    const quizOptionsContainer = document.getElementById('quizOptionsContainer');
    const quizExplanationBox = document.getElementById('quizExplanationBox');
    
    const quizSubmitBtn = document.getElementById('quizSubmitBtn');
    const quizNextBtn = document.getElementById('quizNextBtn');

    const quizResultScore = document.getElementById('quizResultScore');
    const quizResultPercent = document.getElementById('quizResultPercent');
    const quizCongratsText = document.getElementById('quizCongratsText');
    
    const btnRestartQuiz = document.getElementById('btnRestartQuiz');
    const quizHistoryCount = document.getElementById('quizHistoryCount');
    const quizHistoryAccuracy = document.getElementById('quizHistoryAccuracy');
    const quizHistoryList = document.getElementById('quizHistoryList');

    let activeQuestions = [];
    let currentQuestionIdx = 0;
    let quizScore = 0;
    let quizSeconds = 0;
    let quizTimerInterval = null;
    let quizSelectedAnswerIdx = null;
    let quizAnswerChecked = false;

    function updateQuizNotesDropdown() {
        if (appNotes.length > 0) {
            customNotesOption.disabled = false;
            customNotesOption.textContent = "From Saved Study Notes";
        } else {
            customNotesOption.disabled = true;
            customNotesOption.textContent = "From Saved Notes (No notes saved yet)";
        }
    }

    btnStartNewQuiz.addEventListener('click', async () => {
        const topic = quizTopicSelect.value;
        const sizeInput = document.querySelector('input[name="quizLength"]:checked');
        const size = parseInt(sizeInput ? sizeInput.value : '5');

        quizInactiveState.style.display = 'none';
        quizCompleteState.style.display = 'none';
        quizActiveState.style.display = 'block';

        // Fetch questions
        if (topic === 'custom') {
            activeQuestions = await generateCustomQuizFromNotes(size);
        } else {
            // Load premade questions and slice/shuffle
            const pool = PREPROGRAMMED_QUIZZES[topic] || PREPROGRAMMED_QUIZZES['physics'];
            activeQuestions = shuffleArray([...pool]).slice(0, size);
        }

        // Initialize quiz parameters
        currentQuestionIdx = 0;
        quizScore = 0;
        quizSeconds = 0;
        quizAnswerChecked = false;
        quizSelectedAnswerIdx = null;

        // Run timer
        clearInterval(quizTimerInterval);
        quizTimerInterval = setInterval(() => {
            quizSeconds++;
            const mins = Math.floor(quizSeconds / 60).toString().padStart(2, '0');
            const secs = (quizSeconds % 60).toString().padStart(2, '0');
            quizTimerText.textContent = `${mins}:${secs}`;
        }, 1000);

        loadQuizQuestion();
        renderQuizHistory();
    });

    async function generateCustomQuizFromNotes(size) {
        // Collect all texts from notes
        const combinedNotes = appNotes.map(n => n.text).join('\n\n');
        const questions = [];

        if (settings.apiKey && settings.apiKey.trim() !== '') {
            try {
                const prompt = `Generate exactly ${size} multiple-choice questions from this text. Respond ONLY in valid JSON structure matching this schema: [{"q": "Question Text", "o": ["Opt1", "Opt2", "Opt3", "Opt4"], "a": 0, "e": "Explanation Text"}] where "a" is the 0-indexed correct answer. Text:\n\n${combinedNotes}`;
                const raw = await fetchGeminiResponse(prompt, 'balanced');
                // parse json clean
                const cleanedJson = raw.replace(/```json/g, '').replace(/```/g, '').trim();
                const parsed = JSON.parse(cleanedJson);
                if (Array.isArray(parsed)) return parsed.slice(0, size);
            } catch (err) {
                console.error("Failed generating real AI quiz, falling back to local extractor", err);
            }
        }

        // Local parser generator (simple fill-in-the-blank style from notes)
        const sentences = combinedNotes.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 25);
        const shuffled = shuffleArray(sentences);

        shuffled.slice(0, size).forEach(sentence => {
            const words = sentence.split(/\s+/);
            // find a key noun to blank out
            const candidates = words.filter(w => w.length > 5 && !['should', 'would', 'could', 'because', 'through'].includes(w.toLowerCase()));
            const blankWord = candidates[Math.floor(Math.random() * candidates.length)] || 'concept';
            
            const cleanBlank = blankWord.replace(/[^a-zA-Z]/g, '');
            const questionText = sentence.replace(cleanBlank, '________');

            // Formulate wrong answers
            const wrongOptions = ['Mechanism', 'Evaluation', 'Hypothesis', 'Phenomenon', 'Synthesis', 'Definition'].filter(w => w.toLowerCase() !== cleanBlank.toLowerCase());
            const options = shuffleArray([cleanBlank, wrongOptions[0], wrongOptions[1], wrongOptions[2]]);
            const correctIndex = options.indexOf(cleanBlank);

            questions.push({
                q: questionText + "?",
                o: options,
                a: correctIndex,
                e: `The missing term was '${cleanBlank}', defining this fact from your saved summaries.`
            });
        });

        return questions.length > 0 ? questions : PREPROGRAMMED_QUIZZES['physics'].slice(0, size);
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function loadQuizQuestion() {
        quizAnswerChecked = false;
        quizSelectedAnswerIdx = null;
        
        quizSubmitBtn.style.display = 'block';
        quizNextBtn.style.display = 'none';
        quizExplanationBox.style.display = 'none';

        const q = activeQuestions[currentQuestionIdx];
        quizQuestionCountText.textContent = `Question ${currentQuestionIdx + 1} of ${activeQuestions.length}`;
        quizQuestionText.textContent = q.q;

        const progressPercent = ((currentQuestionIdx + 1) / activeQuestions.length) * 100;
        quizProgressBarFill.style.width = `${progressPercent}%`;

        // Render option buttons
        quizOptionsContainer.innerHTML = q.o.map((opt, idx) => `
            <button class="quiz-option-btn" data-index="${idx}">${opt}</button>
        `).join('');

        // Option click handlers
        quizOptionsContainer.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (quizAnswerChecked) return;
                
                quizOptionsContainer.querySelectorAll('.quiz-option-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                quizSelectedAnswerIdx = parseInt(btn.getAttribute('data-index'));
            });
        });
    }

    quizSubmitBtn.addEventListener('click', () => {
        if (quizSelectedAnswerIdx === null) {
            alert('Please select an option first.');
            return;
        }

        quizAnswerChecked = true;
        quizSubmitBtn.style.display = 'none';
        quizNextBtn.style.display = 'block';

        const q = activeQuestions[currentQuestionIdx];
        const options = quizOptionsContainer.querySelectorAll('.quiz-option-btn');

        // Check correctness
        options.forEach((optBtn, idx) => {
            optBtn.classList.remove('selected');
            if (idx === q.a) {
                optBtn.classList.add('correct');
            } else if (idx === quizSelectedAnswerIdx) {
                optBtn.classList.add('incorrect');
            }
        });

        // Show explanations
        quizExplanationBox.style.display = 'block';
        const explTitle = document.getElementById('quizExplanationTitle');
        const explText = document.getElementById('quizExplanationText');

        if (quizSelectedAnswerIdx === q.a) {
            quizScore++;
            quizExplanationBox.className = 'quiz-explanation-box glass-card correct-style';
            explTitle.textContent = "Correct! ✨";
        } else {
            quizExplanationBox.className = 'quiz-explanation-box glass-card incorrect-style';
            explTitle.textContent = "Incorrect";
        }
        explText.textContent = q.e;
    });

    quizNextBtn.addEventListener('click', () => {
        if (currentQuestionIdx < activeQuestions.length - 1) {
            currentQuestionIdx++;
            loadQuizQuestion();
        } else {
            completeQuiz();
        }
    });

    function completeQuiz() {
        clearInterval(quizTimerInterval);
        quizActiveState.style.display = 'none';
        quizCompleteState.style.display = 'block';

        const accuracy = Math.round((quizScore / activeQuestions.length) * 100);
        quizResultScore.textContent = `${quizScore} / ${activeQuestions.length}`;
        quizResultPercent.textContent = `${accuracy}%`;

        if (accuracy >= 80) {
            quizCongratsText.textContent = "Spectacular score! You have thoroughly mastered this topic.";
        } else if (accuracy >= 50) {
            quizCongratsText.textContent = "Good attempt! Review the flashcards to strengthen your weak spots.";
        } else {
            quizCongratsText.textContent = "Keep practicing! Review your textbook notes and launch another quiz.";
        }

        // Save record
        appQuizzes.push({
            id: 'quiz-' + Date.now(),
            topic: quizTopicSelect.options[quizTopicSelect.selectedIndex].text.split(':')[0],
            score: quizScore,
            total: activeQuestions.length,
            date: new Date().toLocaleDateString()
        });
        saveQuizzes();
        renderQuizHistory();
    }

    btnRestartQuiz.addEventListener('click', () => {
        quizCompleteState.style.display = 'none';
        quizInactiveState.style.display = 'flex';
    });

    function renderQuizHistory() {
        quizHistoryCount.textContent = appQuizzes.length;
        
        if (appQuizzes.length > 0) {
            const sumScore = appQuizzes.reduce((sum, q) => sum + (q.score / q.total), 0);
            const avg = Math.round((sumScore / appQuizzes.length) * 100);
            quizHistoryAccuracy.textContent = `${avg}%`;

            quizHistoryList.innerHTML = appQuizzes.slice().reverse().map(record => `
                <div class="history-item-row">
                    <span>${record.topic}</span>
                    <strong class="${(record.score/record.total) >= 0.7 ? 'text-emerald' : 'text-yellow'}">${record.score}/${record.total}</strong>
                </div>
            `).join('');
        } else {
            quizHistoryAccuracy.textContent = '0%';
            quizHistoryList.innerHTML = `<p class="small-text text-muted">No quiz history recorded yet.</p>`;
        }
    }

    // ==========================================
    // 9. FLASHCARD ENGINE DECK REVIEWER
    // ==========================================
    const decksListContainer = document.getElementById('decksListContainer');
    const newDeckName = document.getElementById('newDeckName');
    const btnAddCardInputRow = document.getElementById('btnAddCardInputRow');
    const btnSaveNewDeck = document.getElementById('btnSaveNewDeck');
    const deckCreatorCardsRow = document.getElementById('deckCreatorCardsRow');

    const flashcardPlayerPanel = document.getElementById('flashcardPlayerPanel');
    const deckInactiveState = document.getElementById('deckInactiveState');
    const deckActiveState = document.getElementById('deckActiveState');
    const deckCompleteState = document.getElementById('deckCompleteState');

    const activeDeckTitle = document.getElementById('activeDeckTitle');
    const activeCardIndexText = document.getElementById('activeCardIndexText');
    const deckProgressBarFill = document.getElementById('deckProgressBarFill');
    const flashcard3D = document.getElementById('flashcard3D');
    const cardFrontText = document.getElementById('cardFrontText');
    const cardBackText = document.getElementById('cardBackText');

    const btnCardForgot = document.getElementById('btnCardForgot');
    const btnCardKnow = document.getElementById('btnCardKnow');
    const btnPrevCard = document.getElementById('btnPrevCard');
    const btnNextCard = document.getElementById('btnNextCard');
    const btnRestartDeck = document.getElementById('btnRestartDeck');
    const deckMasteredCount = document.getElementById('deckMasteredCount');

    let activeDeck = null;
    let cardPlayIdx = 0;
    let cardMasteryRecord = []; // array of booleans indicating known state

    // Multi-row creator setup
    btnAddCardInputRow.addEventListener('click', () => {
        const row = document.createElement('div');
        row.className = 'deck-card-inputs-row';
        row.innerHTML = `
            <input type="text" class="form-control card-front-input" placeholder="Front side (Question)">
            <input type="text" class="form-control card-back-input" placeholder="Back side (Answer)">
        `;
        deckCreatorCardsRow.appendChild(row);
    });

    btnSaveNewDeck.addEventListener('click', () => {
        const name = newDeckName.value.trim();
        if (!name) {
            alert('Please specify a deck name.');
            return;
        }

        const fronts = deckCreatorCardsRow.querySelectorAll('.card-front-input');
        const backs = deckCreatorCardsRow.querySelectorAll('.card-back-input');
        const cards = [];

        fronts.forEach((inp, idx) => {
            const fText = inp.value.trim();
            const bText = backs[idx] ? backs[idx].value.trim() : '';
            if (fText && bText) {
                cards.push({ front: fText, back: bText });
            }
        });

        if (cards.length === 0) {
            alert('Please add at least one complete card (with front & back).');
            return;
        }

        const newDeck = {
            id: 'custom-' + Date.now(),
            name: name,
            cards: cards
        };

        appDecks.push(newDeck);
        saveDecks();
        renderDecksList();

        // Clear form
        newDeckName.value = '';
        deckCreatorCardsRow.innerHTML = `
            <div class="deck-card-inputs-row">
                <input type="text" class="form-control card-front-input" placeholder="Front side (Question)">
                <input type="text" class="form-control card-back-input" placeholder="Back side (Answer)">
            </div>
        `;
        alert('Deck saved successfully!');
    });

    function renderDecksList() {
        decksListContainer.innerHTML = appDecks.map(deck => {
            const isPremade = deck.id.startsWith('premade');
            return `
                <div class="deck-item-card" data-id="${deck.id}">
                    <div class="deck-meta">
                        <span class="deck-title">${deck.name}</span>
                        <span class="deck-count-label">${deck.cards.length} cards ${isPremade ? '// Premade' : ''}</span>
                    </div>
                    ${!isPremade ? `
                        <button class="btn-delete-deck" data-id="${deck.id}" title="Delete Custom Deck">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    ` : ''}
                </div>
            `;
        }).join('');

        // Click deck select handler
        decksListContainer.querySelectorAll('.deck-item-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.btn-delete-deck')) return;
                
                const id = card.getAttribute('data-id');
                const deck = appDecks.find(d => d.id === id);
                if (deck) {
                    decksListContainer.querySelectorAll('.deck-item-card').forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                    startReviewingDeck(deck);
                }
            });
        });

        // Delete custom decks
        decksListContainer.querySelectorAll('.btn-delete-deck').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                appDecks = appDecks.filter(d => d.id !== id);
                saveDecks();
                renderDecksList();
                
                // If active deck is deleted, clear deck review states
                if (activeDeck && activeDeck.id === id) {
                    activeDeck = null;
                    deckActiveState.style.display = 'none';
                    deckCompleteState.style.display = 'none';
                    deckInactiveState.style.display = 'flex';
                }
            });
        });
    }

    function startReviewingDeck(deck) {
        activeDeck = deck;
        cardPlayIdx = 0;
        cardMasteryRecord = new Array(deck.cards.length).fill(false);

        deckInactiveState.style.display = 'none';
        deckCompleteState.style.display = 'none';
        deckActiveState.style.display = 'block';

        activeDeckTitle.textContent = deck.name;
        loadFlashcard();
    }

    function loadFlashcard() {
        // Reset flip state
        flashcard3D.classList.remove('flipped');
        
        const card = activeDeck.cards[cardPlayIdx];
        activeCardIndexText.textContent = `Card ${cardPlayIdx + 1} of ${activeDeck.cards.length}`;
        
        cardFrontText.textContent = card.front;
        cardBackText.textContent = card.back;

        // Progress bar
        const progress = ((cardPlayIdx + 1) / activeDeck.cards.length) * 100;
        deckProgressBarFill.style.width = `${progress}%`;

        // Active selection glow on buttons based on record
        btnCardKnow.className = cardMasteryRecord[cardPlayIdx] ? "btn btn-success btn-icon-text" : "btn btn-outline btn-icon-text text-emerald";
        btnCardForgot.className = (!cardMasteryRecord[cardPlayIdx] && cardMasteryRecord[cardPlayIdx] !== undefined) ? "btn btn-danger btn-icon-text" : "btn btn-outline btn-icon-text text-red";
    }

    // Toggle Flip card click
    flashcard3D.addEventListener('click', () => {
        flashcard3D.classList.toggle('flipped');
    });

    btnCardKnow.addEventListener('click', () => {
        cardMasteryRecord[cardPlayIdx] = true;
        advanceCardReview();
    });

    btnCardForgot.addEventListener('click', () => {
        cardMasteryRecord[cardPlayIdx] = false;
        advanceCardReview();
    });

    function advanceCardReview() {
        if (cardPlayIdx < activeDeck.cards.length - 1) {
            cardPlayIdx++;
            loadFlashcard();
        } else {
            completeDeck();
        }
    }

    btnPrevCard.addEventListener('click', () => {
        if (cardPlayIdx > 0) {
            cardPlayIdx--;
            loadFlashcard();
        }
    });

    btnNextCard.addEventListener('click', () => {
        if (cardPlayIdx < activeDeck.cards.length - 1) {
            cardPlayIdx++;
            loadFlashcard();
        }
    });

    function completeDeck() {
        deckActiveState.style.display = 'none';
        deckCompleteState.style.display = 'block';

        const mastered = cardMasteryRecord.filter(Boolean).length;
        deckMasteredCount.textContent = `${mastered} / ${activeDeck.cards.length}`;

        // Save statistic metrics
        focusMinutes += 5; // award focus reward points
        localStorage.setItem('aura_study_focus_mins', focusMinutes);
        updateDashboard();
    }

    btnRestartDeck.addEventListener('click', () => {
        if (activeDeck) {
            startReviewingDeck(activeDeck);
        }
    });

    // ==========================================
    // 10. POMODORO FOCUS TIMER
    // ==========================================
    const timerProgressCircle = document.getElementById('timerProgressCircle');
    const timerCountdown = document.getElementById('timerCountdown');
    const timerActiveModeLabel = document.getElementById('timerActiveModeLabel');
    const btnPlayPauseTimer = document.getElementById('btnPlayPauseTimer');
    const btnResetTimer = document.getElementById('btnResetTimer');
    const btnSkipTimer = document.getElementById('btnSkipTimer');
    const timerModeRow = document.getElementById('timerModeRow');
    const timerBadge = document.getElementById('timerBadge');

    let timerInterval = null;
    let timerTotalSeconds = 25 * 60;
    let timerSecondsRemaining = 25 * 60;
    let isTimerRunning = false;
    let activeTimerMode = 'work'; // work, short, long

    // SVGRing math
    const radius = 130;
    const circumference = radius * 2 * Math.PI; // ≈ 816.81
    timerProgressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    timerProgressCircle.style.strokeDashoffset = 0;

    function setProgressBarOffset(percent) {
        const offset = circumference - (percent / 100) * circumference;
        timerProgressCircle.style.strokeDashoffset = offset;
    }

    function updateTimerUI() {
        const mins = Math.floor(timerSecondsRemaining / 60).toString().padStart(2, '0');
        const secs = (timerSecondsRemaining % 60).toString().padStart(2, '0');
        const formatted = `${mins}:${secs}`;
        
        timerCountdown.textContent = formatted;
        timerBadge.textContent = formatted;

        const percent = (timerSecondsRemaining / timerTotalSeconds) * 100;
        setProgressBarOffset(percent);
    }

    function toggleTimer() {
        if (isTimerRunning) {
            clearInterval(timerInterval);
            isTimerRunning = false;
            btnPlayPauseTimer.innerHTML = '<i class="fa-solid fa-play"></i>';
            timerProgressCircle.style.animation = 'none';
        } else {
            isTimerRunning = true;
            btnPlayPauseTimer.innerHTML = '<i class="fa-solid fa-pause"></i>';
            
            timerInterval = setInterval(() => {
                if (timerSecondsRemaining > 0) {
                    timerSecondsRemaining--;
                    updateTimerUI();
                } else {
                    completeTimerPeriod();
                }
            }, 1000);
        }
    }

    function resetTimer() {
        clearInterval(timerInterval);
        isTimerRunning = false;
        btnPlayPauseTimer.innerHTML = '<i class="fa-solid fa-play"></i>';
        timerSecondsRemaining = timerTotalSeconds;
        updateTimerUI();
    }

    function completeTimerPeriod() {
        clearInterval(timerInterval);
        isTimerRunning = false;
        btnPlayPauseTimer.innerHTML = '<i class="fa-solid fa-play"></i>';
        
        // Award focus minutes if work completed
        if (activeTimerMode === 'work') {
            const minsAwarded = Math.round(timerTotalSeconds / 60);
            focusMinutes += minsAwarded;
            localStorage.setItem('aura_study_focus_mins', focusMinutes);
            updateDashboard();
            triggerAudioBeep();
            alert('Great focus! Take a well-deserved break.');
        } else {
            triggerAudioBeep();
            alert('Break over! Ready to focus?');
        }

        // Auto skip to next logical period
        skipTimerPeriod();
    }

    function skipTimerPeriod() {
        if (activeTimerMode === 'work') {
            switchTimerMode('short', 5);
        } else {
            switchTimerMode('work', 25);
        }
    }

    function switchTimerMode(mode, minutes) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        btnPlayPauseTimer.innerHTML = '<i class="fa-solid fa-play"></i>';
        
        activeTimerMode = mode;
        timerTotalSeconds = minutes * 60;
        timerSecondsRemaining = timerTotalSeconds;
        
        // Update active classes on buttons
        timerModeRow.querySelectorAll('.btn-timer-mode').forEach(btn => {
            if (btn.getAttribute('data-mode') === mode) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Set Label name
        const labels = { work: 'STUDY FOCUS', short: 'SHORT BREAK', long: 'LONG BREAK' };
        timerActiveModeLabel.textContent = labels[mode];

        // Set color rings
        const colors = { work: '#ab70ff', short: '#00f0ff', long: '#10b981' };
        timerProgressCircle.style.stroke = colors[mode];

        updateTimerUI();
    }

    btnPlayPauseTimer.addEventListener('click', toggleTimer);
    btnResetTimer.addEventListener('click', resetTimer);
    btnSkipTimer.addEventListener('click', skipTimerPeriod);

    timerModeRow.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-timer-mode')) {
            const minutes = parseInt(e.target.getAttribute('data-duration'));
            const mode = e.target.getAttribute('data-mode');
            switchTimerMode(mode, minutes);
        }
    });

    // Synthesize simple audio beep alert using Web Audio API
    function triggerAudioBeep() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            osc.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            osc.frequency.value = 520;
            gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
            
            osc.start();
            osc.stop(ctx.currentTime + 0.5);
        } catch (e) {
            console.error('AudioContext beep failed: ', e);
        }
    }

    // ==========================================
    // 11. AUDIO SYNTH SOUNDSCAPE STATION
    // ==========================================
    const soundToggleBtns = document.querySelectorAll('.btn-sound-toggle');
    const ambientVolume = document.getElementById('ambientVolume');
    
    let audioCtx = null;
    let activeSynths = {
        'white-noise': { active: false, node: null },
        'rain': { active: false, node: null },
        'drone': { active: false, node: null }
    };
    let soundVolumeNode = null;

    function initAudioContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            soundVolumeNode = audioCtx.createGain();
            soundVolumeNode.gain.value = ambientVolume.value;
            soundVolumeNode.connect(audioCtx.destination);
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    // A. Pink Focus Noise Generator (filtered buffer)
    function createWhiteNoiseNode() {
        const bufferSize = 2 * audioCtx.sampleRate;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        let b0, b1, b2, b3, b4, b5, b6;
        b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
        
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            // Pink noise filter approximation
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            output[i] *= 0.11; // normalise volume
            b6 = white * 0.115926;
        }

        const sourceNode = audioCtx.createBufferSource();
        sourceNode.buffer = noiseBuffer;
        sourceNode.loop = true;
        
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1000;

        sourceNode.connect(filter);
        filter.connect(soundVolumeNode);
        
        return sourceNode;
    }

    // B. Rain Shower Generator (white noise + crackle impulses)
    function createRainNode() {
        const bufferSize = audioCtx.sampleRate * 2;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const noiseFilter = audioCtx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.value = 800;

        // Modulator for rain wave amplitude
        const osc = audioCtx.createOscillator();
        osc.frequency.value = 0.2; // slow waves
        const oscGain = audioCtx.createGain();
        oscGain.gain.value = 0.25;

        const noiseGain = audioCtx.createGain();
        noiseGain.gain.value = 0.4;

        osc.connect(oscGain);
        oscGain.connect(noiseGain.gain); // modulate gain
        
        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(soundVolumeNode);
        
        osc.start();
        return {
            start: () => { noise.start(); },
            stop: () => {
                try { noise.stop(); osc.stop(); } catch(e){}
            }
        };
    }

    // C. Deep Focus Drone Synthesizer (low-frequency triad chords)
    function createDroneNode() {
        const oscillators = [];
        const baseFrequencies = [55, 82.41, 110]; // A, E, A chord
        
        const nodeGroup = audioCtx.createGain();
        nodeGroup.gain.value = 0.35;

        // Low-pass to keep it dark and bassy
        const lowpass = audioCtx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.value = 220;
        
        baseFrequencies.forEach(freq => {
            const osc = audioCtx.createOscillator();
            osc.type = 'sawtooth';
            osc.frequency.value = freq;
            
            // Slow LFO volume modulator per oscillator to make it organic
            const lfo = audioCtx.createOscillator();
            lfo.frequency.value = 0.1 + Math.random() * 0.08;
            const lfoGain = audioCtx.createGain();
            lfoGain.gain.value = 0.15;
            
            const oscGain = audioCtx.createGain();
            oscGain.gain.value = 0.25;

            lfo.connect(lfoGain);
            lfoGain.connect(oscGain.gain);
            
            osc.connect(oscGain);
            oscGain.connect(nodeGroup);
            
            lfo.start();
            osc.start();
            oscillators.push(osc, lfo);
        });

        nodeGroup.connect(lowpass);
        lowpass.connect(soundVolumeNode);

        return {
            start: () => {},
            stop: () => {
                oscillators.forEach(osc => { try { osc.stop(); } catch(e){} });
            }
        };
    }

    // Sound toggle clicks
    soundToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            initAudioContext();
            
            const synthType = btn.getAttribute('data-synth');
            const card = btn.closest('.sound-row-card');
            const icon = btn.querySelector('i');

            if (activeSynths[synthType].active) {
                // STOP SOUND
                activeSynths[synthType].active = false;
                activeSynths[synthType].node.stop();
                activeSynths[synthType].node = null;
                card.classList.remove('playing');
                icon.className = 'fa-solid fa-play';
            } else {
                // START SOUND
                activeSynths[synthType].active = true;
                
                if (synthType === 'white-noise') {
                    activeSynths[synthType].node = createWhiteNoiseNode();
                    activeSynths[synthType].node.start();
                } else if (synthType === 'rain') {
                    activeSynths[synthType].node = createRainNode();
                    activeSynths[synthType].node.start();
                } else if (synthType === 'drone') {
                    activeSynths[synthType].node = createDroneNode();
                    activeSynths[synthType].node.start();
                }

                card.classList.add('playing');
                icon.className = 'fa-solid fa-pause';
            }
        });
    });

    // Volume adjuster
    ambientVolume.addEventListener('input', () => {
        if (soundVolumeNode) {
            soundVolumeNode.gain.value = ambientVolume.value;
        }
    });

    // ==========================================
    // 12. STUDY PLANNER TASK MANAGER (KANBAN)
    // ==========================================
    const btnOpenNewTaskModal = document.getElementById('btnOpenNewTaskModal');
    const closeTaskModalBtn = document.getElementById('closeTaskModalBtn');
    const btnCancelTaskBtn = document.getElementById('btnCancelTaskBtn');
    const btnSaveTask = document.getElementById('btnSaveTask');
    const taskModal = document.getElementById('taskModal');

    const taskTitle = document.getElementById('taskTitle');
    const taskPriority = document.getElementById('taskPriority');
    const taskPomodoros = document.getElementById('taskPomodoros');
    const taskDeadline = document.getElementById('taskDeadline');

    // Set default deadline date in creator to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    taskDeadline.value = tomorrow.toISOString().substring(0, 10);

    btnOpenNewTaskModal.addEventListener('click', () => {
        taskModal.classList.add('active');
    });

    function closeTaskModal() {
        taskModal.classList.remove('active');
        taskTitle.value = '';
        taskPriority.value = 'medium';
        taskPomodoros.value = 2;
    }

    closeTaskModalBtn.addEventListener('click', closeTaskModal);
    btnCancelTaskBtn.addEventListener('click', closeTaskModal);

    btnSaveTask.addEventListener('click', () => {
        const title = taskTitle.value.trim();
        if (!title) {
            alert('Please specify a task name.');
            return;
        }

        const newTask = {
            id: 'task-' + Date.now(),
            title: title,
            priority: taskPriority.value,
            poms: parseInt(taskPomodoros.value) || 2,
            deadline: taskDeadline.value,
            status: 'todo' // todo, progress, completed
        };

        appTasks.push(newTask);
        saveTasks();
        renderKanbanBoard();
        closeTaskModal();
    });

    function renderKanbanBoard() {
        const columns = {
            todo: document.getElementById('cards-todo'),
            progress: document.getElementById('cards-progress'),
            completed: document.getElementById('cards-completed')
        };

        // Reset columns
        Object.values(columns).forEach(c => c.innerHTML = '');

        // Tally sizes
        const countTodo = document.getElementById('count-todo');
        const countProgress = document.getElementById('count-progress');
        const countCompleted = document.getElementById('count-completed');

        let sizes = { todo: 0, progress: 0, completed: 0 };

        appTasks.forEach(task => {
            sizes[task.status]++;
            const prioClass = `priority-${task.priority}`;
            
            const card = document.createElement('div');
            card.className = 'kanban-task-card glass-card';
            card.setAttribute('draggable', 'true');
            card.setAttribute('data-id', task.id);
            
            card.innerHTML = `
                <div class="task-card-header">
                    <span class="task-card-title">${task.title}</span>
                    <span class="priority-tag ${prioClass}">${task.priority}</span>
                </div>
                <div class="task-card-meta">
                    <span class="task-card-poms"><i class="fa-solid fa-hourglass-half"></i> ${task.poms} poms</span>
                    <span class="task-card-date"><i class="fa-regular fa-calendar-check"></i> ${task.deadline}</span>
                </div>
                <div class="task-card-footer">
                    <div class="task-card-actions">
                        ${task.status !== 'completed' ? `
                            <button class="btn-card-action btn-card-advance" data-id="${task.id}" title="Advance status">
                                <i class="fa-solid fa-circle-arrow-right"></i>
                            </button>
                        ` : ''}
                        <button class="btn-card-action btn-card-delete" data-id="${task.id}" title="Delete task">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            `;

            columns[task.status].appendChild(card);
        });

        // Set counts
        countTodo.textContent = sizes.todo;
        countProgress.textContent = sizes.progress;
        countCompleted.textContent = sizes.completed;

        // Drag and Drop implementation
        setupDragAndDrop();

        // Button clicks inside cards
        document.querySelectorAll('.btn-card-advance').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const task = appTasks.find(t => t.id === id);
                if (task) {
                    if (task.status === 'todo') task.status = 'progress';
                    else if (task.status === 'progress') task.status = 'completed';
                    saveTasks();
                    renderKanbanBoard();
                }
            });
        });

        document.querySelectorAll('.btn-card-delete').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                appTasks = appTasks.filter(t => t.id !== id);
                saveTasks();
                renderKanbanBoard();
            });
        });
    }

    function setupDragAndDrop() {
        const cards = document.querySelectorAll('.kanban-task-card');
        const boardColumns = document.querySelectorAll('.kanban-column');

        cards.forEach(card => {
            card.addEventListener('dragstart', () => {
                card.classList.add('dragging');
            });
            card.addEventListener('dragend', () => {
                card.classList.remove('dragging');
            });
        });

        boardColumns.forEach(column => {
            column.addEventListener('dragover', (e) => {
                e.preventDefault();
                const draggingCard = document.querySelector('.dragging');
                const container = column.querySelector('.column-cards-container');
                container.appendChild(draggingCard);
            });

            column.addEventListener('drop', () => {
                const draggingCard = document.querySelector('.dragging');
                if (draggingCard) {
                    const id = draggingCard.getAttribute('data-id');
                    const newStatus = column.getAttribute('data-status');
                    const task = appTasks.find(t => t.id === id);
                    
                    if (task && task.status !== newStatus) {
                        task.status = newStatus;
                        saveTasks();
                        renderKanbanBoard();
                    }
                }
            });
        });
    }

    // ==========================================
    // 13. BOOTSTRAP INITIALIZATION
    // ==========================================
    updateDashboard();
    updateApiWidget();
    renderNotesLibrary();
    renderDecksList();
    renderQuizHistory();
});
