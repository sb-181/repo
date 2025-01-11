(function() {
    const confettiStyles = `
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: ${getRandomColor()};
            opacity: 1;
            pointer-events: none;
            animation: fall 2s forwards;
        }
        
        @keyframes fall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(1000px) rotate(360deg);
                opacity: 0;
            }
        }
    `;

    // Function to generate a random color
    function getRandomColor() {
        const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33FF", "#FF5733", "#33D4FF"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Create and inject CSS for confetti animation
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = confettiStyles;
    document.head.appendChild(styleSheet);

    // Function to generate multiple confetti pieces
    function triggerConfetti() {
        const confettiContainer = document.getElementById("confetti");

        // Number of confetti pieces to generate
        const numConfetti = 100;

        for (let i = 0; i < numConfetti; i++) {
            const confettiElement = document.createElement("div");
            confettiElement.classList.add("confetti");

            // Set random horizontal position and size for each confetti piece
            const randomX = Math.random() * window.innerWidth;  // Random X position
            const randomSpeed = Math.random() * 2 + 1;  // Random falling speed (1 to 3 seconds)
            const randomSize = Math.random() * 5 + 5;  // Random size (5px to 10px)

            confettiElement.style.left = `${randomX}px`;
            confettiElement.style.width = `${randomSize}px`;
            confettiElement.style.height = `${randomSize}px`;

            // Random color for each piece
            confettiElement.style.backgroundColor = getRandomColor();

            // Append confetti element to the container
            confettiContainer.appendChild(confettiElement);

            // Add animation (vary speed and spread)
            confettiElement.style.animationDuration = `${randomSpeed}s`;  // Set random speed for each piece
            confettiElement.style.animationTimingFunction = `ease-out`;

            // Set random horizontal movement and fall direction
            const randomDirection = Math.random() * 100 - 50;  // Random horizontal direction
            const randomRotation = Math.random() * 360;  // Random rotation for each piece

            // Animate the confetti pieces
            setTimeout(() => {
                confettiElement.style.transform = `translateY(${Math.random() * 1000}px) translateX(${randomDirection}px) rotate(${randomRotation}deg)`;
                confettiElement.style.opacity = 0;
            }, 100);
        }
    }

    // Event listeners for checkboxes
    document.getElementById("yesCheckbox1").addEventListener("change", function () {
        if (this.checked) {
            triggerConfetti();
        }
    });

    document.getElementById("yesCheckbox2").addEventListener("change", function () {
        if (this.checked) {
            triggerConfetti();
        }
    });
})();
