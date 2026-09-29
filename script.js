/* =========================================
   No.sメ GAMING MODE
   Main JavaScript Controller
   ========================================= */


/* ---------- PAGE NAVIGATION ---------- */

const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetPage = button.dataset.page;

        // Remove active state
        navButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        pages.forEach(page => {
            page.classList.remove("active");
        });

        // Activate selected page
        button.classList.add("active");

        const page = document.getElementById(targetPage);

        if (page) {
            page.classList.add("active");
        }

    });

});


/* ---------- GAMING MODE ---------- */

function activateBoost() {

    const score = document.getElementById("score");
    const button = document.querySelector(".boost-btn");

    if (!score || !button) return;

    button.disabled = true;
    button.textContent = "⚡ OPTIMIZING...";

    let currentScore = 82;

    const animation = setInterval(() => {

        currentScore++;

        score.textContent = currentScore;

        if (currentScore >= 92) {

            clearInterval(animation);

            button.textContent =
                "✓ GAMING MODE ACTIVE";

            button.style.background =
                "linear-gradient(135deg,#008f5c,#00d084)";

            button.disabled = false;

        }

    }, 70);

}


/* ---------- SENSITIVITY ---------- */

function updateSense(id, value) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
    }

}


/* ---------- PERFORMANCE TEST ---------- */

function runTest() {

    const scoreElement =
        document.getElementById("testScore");

    const message =
        document.getElementById("testMessage");

    if (!scoreElement || !message) return;

    scoreElement.textContent = "...";

    message.textContent =
        "Running lightweight browser responsiveness test...";

    setTimeout(() => {

        const start = performance.now();

        let result = 0;

        /*
         * Lightweight CPU/browser workload.
         * This DOES NOT modify the phone,
         * GPU, RAM or Free Fire.
         */

        for (let i = 0; i < 5000000; i++) {
            result += Math.sqrt(i);
        }

        const elapsed =
            performance.now() - start;

        let score =
            Math.round(1000 / elapsed * 10);

        score = Math.max(20, Math.min(99, score));

        scoreElement.textContent = score;

        message.textContent =
            "Test completed. This score measures browser responsiveness only.";

    }, 100);

}


/* ---------- LOGOUT ---------- */

function logout() {

    window.location.href = "index.html";

}


/* ---------- DEVICE PROFILE ---------- */

function getDeviceProfile() {

    const memory =
        navigator.deviceMemory || "Unknown";

    const cores =
        navigator.hardwareConcurrency || "Unknown";

    const screenWidth =
        window.screen.width;

    const screenHeight =
        window.screen.height;

    return {
        ram: memory,
        cpuCores: cores,
        resolution:
            screenWidth + " × " + screenHeight
    };

}


/* ---------- CONSOLE INFORMATION ---------- */

console.log(
    "No.sメ Gaming Mode initialized."
);

console.log(
    "Device profile:",
    getDeviceProfile()
);
