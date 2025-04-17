// Git Commands Data
const gitCommands = [
    {
        command: 'git init',
        description: 'Initialize a new Git repository',
        category: 'basics'
    },
    {
        command: 'git clone',
        description: 'Create a copy of a remote repository',
        category: 'basics'
    },
    {
        command: 'git add',
        description: 'Add files to the staging area',
        category: 'basics'
    },
    {
        command: 'git commit',
        description: 'Record changes to the repository',
        category: 'basics'
    },
    {
        command: 'git push',
        description: 'Upload local repository content to remote repository',
        category: 'basics'
    },
    {
        command: 'git pull',
        description: 'Fetch and download content from remote repository',
        category: 'basics'
    },
    {
        command: 'git status',
        description: 'Show the working tree status and changes to be committed',
        category: 'basics'
    },
    {
        command: 'git log',
        description: 'Show commit logs with author information and timestamps',
        category: 'basics'
    },
    {
        command: 'git checkout',
        description: 'Switch branches or restore working tree files',
        category: 'basics'
    }
];

// Quiz Questions Data
const quizQuestions = [
    {
        question: 'What command is used to initialize a new Git repository?',
        options: ['git start', 'git init', 'git begin', 'git create'],
        correct: 1
    },
    {
        question: 'Which command is used to download a repository from GitHub?',
        options: ['git download', 'git pull', 'git clone', 'git fetch'],
        correct: 2
    },
    {
        question: 'How do you stage changes for commit?',
        options: ['git stage', 'git commit', 'git add', 'git push'],
        correct: 2
    },
    {
        question: 'What command creates a new branch?',
        options: ['git branch', 'git checkout', 'git create', 'git new'],
        correct: 0
    },
    {
        question: 'How do you switch to another branch?',
        options: ['git switch', 'git move', 'git branch', 'git checkout'],
        correct: 3
    },
    {
        question: 'What does "git status" do?',
        options: ['Shows the current branch', 'Shows staged changes', 'Shows modified files and staged changes', 'Shows commit history'],
        correct: 2
    },
    {
        question: 'What is a pull request in GitHub?',
        options: ['Another name for git pull', 'Request to download code', 'Request to merge changes from one branch to another', 'Request repository access'],
        correct: 2
    },
    {
        question: 'What command shows the commit history?',
        options: ['git history', 'git log', 'git show', 'git commits'],
        correct: 1
    },
    {
        question: 'How do you discard changes in a file?',
        options: ['git discard', 'git remove', 'git reset', 'git checkout -- [file]'],
        correct: 3
    },
    {
        question: 'What does "git fetch" do?',
        options: ['Downloads objects and refs from repository', 'Uploads local changes', 'Combines remote and local changes', 'Creates a new repository'],
        correct: 0
    },
    {
        question: 'What is a "fork" in GitHub?',
        options: ['A branch', 'A personal copy of someone else\'s repository', 'A commit', 'A merge conflict'],
        correct: 1
    },
    {
        question: 'What command is used to rename a branch?',
        options: ['git branch rename', 'git rename', 'git branch -m', 'git -m branch'],
        correct: 2
    },
    {
        question: 'What does "git stash" do?',
        options: ['Permanently deletes changes', 'Saves changes temporarily', 'Uploads changes to GitHub', 'Backs up the repository'],
        correct: 1
    },
    {
        question: 'What is a "merge conflict"?',
        options: ['When two branches can\'t be merged', 'When changes overlap in the same file', 'When a branch is deleted', 'When GitHub is down'],
        correct: 1
    },
    {
        question: 'How do you create and switch to a new branch in one command?',
        options: ['git branch -create', 'git new-branch', 'git branch && git checkout', 'git checkout -b'],
        correct: 3
    }
];

// Populate Commands Section
function populateCommands() {
    // This function is not needed anymore since we're using static HTML for commands
}

// Quiz Implementation
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('quiz-question');
    const optionsContainer = document.getElementById('quiz-options');
    const currentQ = quizQuestions[currentQuestion];

    questionContainer.textContent = currentQ.question;
    optionsContainer.innerHTML = '';

    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQ = quizQuestions[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');

    options.forEach(option => option.disabled = true);
    
    if (selectedIndex === currentQ.correct) {
        options[selectedIndex].classList.add('correct');
        score++;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[currentQ.correct].classList.add('correct');
    }
    
    // Enable the next question button
    document.getElementById('next-question').style.display = 'flex';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
        // Hide the next question button again
        document.getElementById('next-question').style.display = 'none';
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
        <h3>Quiz Complete!</h3>
        <p>Your score: ${score}/${quizQuestions.length}</p>
        <button class="btn primary" onclick="resetQuiz()">Try Again</button>
    `;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    document.getElementById('next-question').style.display = 'none';
}

// Terminal Simulator
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

function createOutputElement(content, isCommand = false) {
    const div = document.createElement('div');
    div.className = isCommand ? 'terminal-command' : 'terminal-response';
    div.innerHTML = content;
    return div;
}

function processCommand(command) {
    const cmd = command.toLowerCase().trim();
    const matchingCommand = gitCommands.find(c => cmd.startsWith(c.command.toLowerCase()));
    
    if (matchingCommand) {
        // Generate example based on command
        let example = '';
        switch(matchingCommand.command) {
            case 'git init':
                example = '<span class="highlight">Example:</span> git init';
                break;
            case 'git clone':
                example = '<span class="highlight">Example:</span> git clone https://github.com/username/repo.git';
                break;
            case 'git add':
                example = '<span class="highlight">Example:</span> git add . <span class="highlight">or</span> git add filename.txt';
                break;
            case 'git commit':
                example = '<span class="highlight">Example:</span> git commit -m "Add new feature"';
                break;
            case 'git push':
                example = '<span class="highlight">Example:</span> git push origin main';
                break;
            case 'git pull':
                example = '<span class="highlight">Example:</span> git pull origin main';
                break;
            case 'git status':
                example = '<span class="highlight">Example:</span> git status';
                break;
            case 'git log':
                example = '<span class="highlight">Example:</span> git log <span class="highlight">or</span> git log --oneline';
                break;
            case 'git checkout':
                example = '<span class="highlight">Example:</span> git checkout branch-name <span class="highlight">or</span> git checkout -b new-branch';
                break;
            default:
                example = '';
        }
        
        return `<div class="command-explanation">
            <span class="highlight">${matchingCommand.command}:</span>
            ${matchingCommand.description}<br>
            ${example}
        </div>`;
    }
    
    return 'Command not found. Type a Git command to learn more about it.';
}

terminalInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim()) {
        const command = this.value;
        
        // Add command to output
        terminalOutput.appendChild(createOutputElement(`$ ${command}`, true));
        
        // Process and show response
        const response = processCommand(command);
        terminalOutput.appendChild(createOutputElement(response));
        
        // Clear input and scroll to bottom
        this.value = '';
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});

// Make command highlights clickable in the terminal intro
document.addEventListener('DOMContentLoaded', () => {
    // Remove the populateCommands call since we're using static HTML
    // populateCommands();
    loadQuestion();
    
    // Hide the next question button initially
    document.getElementById('next-question').style.display = 'none';
    
    // Add click handler for next question button
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Make command highlights clickable
    document.querySelectorAll('.command-highlight').forEach(cmd => {
        cmd.addEventListener('click', function() {
            terminalInput.value = this.textContent;
            terminalInput.focus();
        });
    });

    // Animate sections on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.section').forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });
}); 