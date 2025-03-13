// Registration function (Save user details in local storage)
function register(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("reg-email").value;
    let password = document.getElementById("reg-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // Email validation (only @srkrec.ac.in allowed)
    let emailPattern = /^[a-zA-Z0-9._%+-]+@srkrec\.ac\.in$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid SRKREC email (@srkrec.ac.in)");
        return;
    }

    // Password matching check
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let fullName = `${firstName} ${lastName}`;
    localStorage.setItem("username", username);  // Store username separately
    localStorage.setItem("fullName", fullName);  // Store full name separately
    alert("Registration successful! Redirecting to main page.");
    window.location.href = "index.html";  // Redirect to homepage
}

// Function to display user name in navbar
function updateProfileName() {
    let usernameDisplay = document.getElementById("username-display");
    let storedUsername = localStorage.getItem("username") || "Guest"; // Default to "Guest"

    if (usernameDisplay) {
        usernameDisplay.textContent = storedUsername;
    }
}

// Logout functionality
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("fullName"); 
    window.location.reload(); // Reload page to reset "Guest" text
}

// Ensure the DOM is fully loaded before executing functions
document.addEventListener("DOMContentLoaded", function () {
    updateProfileName(); // Update navbar username

    let logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    }
    // Define an object with invention details
const inventions = {
    NurseCallingSystem: {
        title: "Nurse Calling System",
        image: "images/nurse_calling_system.jpg",
        description: "An advanced patient assistance solution designed to enhance hospital efficiency and patient care.",
        youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },
    IOTServiceRobot: {
        title: "IoT Based Service Robot",
        image: "images/iot_based_robots_2.jpg",
        description: "An intelligent, autonomous robot designed to enhance efficiency in various service industries.",
        youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },
    LaserEngravingMachine: {
        title: "Laser Engraving & Cutting Machine",
        image: "images/laser_engraving.jpg",
        description: "A high-precision machine that uses laser technology for efficient engraving and cutting on various materials.",
        youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },
    CottonGinningMachine: {
        title: "Portable Cotton Ginning Machine",
        image: "images/cotton_portable.jpg",
        description: "A compact, high-efficiency machine for seamless cotton ginning on the go!",
        youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },
    SentinelStrike: {
        title: "Sentinel Strike",
        image: "images/gun_shooter.jpg",
        description: "AI-Powered Threat Detection & Response System.",
        youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },
    MediBotExpress: {
        title: "MediBot Express",
        image: "images/medibot.jpg",
        description: "Autonomous tablet delivery van ensuring fast, secure, and contactless medication transport.",
        youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },
    SmartSwayCradle: {
        title: "Smart Sway Cradle",
        image: "images/swaagy_machine.jpg",
        description: "An automatic rocking cradle designed to comfort babies with gentle, rhythmic motion.",
        youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },
    TomatoHarvestingRobot: {
        title: "Automatic Tomato Harvesting Robot",
        image: "images/tomato_harvesting_machine.jpg",
        description: "A smart, automated machine that efficiently harvests tomatoes with precision and minimal human effort.",
        youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },
    SmartWheelchair: {
        title: "Smart Wheelchair",
        image: "images/smart_wheel_chair.jpg",
        description: "An intelligent wheelchair with automated navigation and assistive features for enhanced mobility and independence.",
        youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },
    PCBPrototypingMachine: {
        title: "PCB Prototyping Machine",
        image: "images/pcb_machine.jpg",
        description: "A high-precision machine for rapid and efficient PCB prototyping, enabling quick circuit design testing and production.",
        youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },
    SmartRestrooms: {
        title: "Smart Restrooms",
        image: "images/smart wheel new.jpg",
        description: "A high-tech, self-cleaning, and water-efficient system designed for maximum hygiene and convenience.",
        youtubeUrl: "https://www.youtube.com/embed/eySTo2GgvoY?si=tRVT3XySrs2VAkMi"
    },
    DPrinter: {
        title: "3D Printer",
        image: "images/medibot.jpg",
        description: "he Advanced 3D Printing Machine is a cutting-edge device that revolutionizes the manufacturing process through additive manufacturing technology. This innovative machine creates complex three-dimensional objects from digital models with high-resolution printing capabilities, multi-material support, and automated calibration and leveling. With advanced temperature control and integrated slicing software, it enables users to produce intricate designs, prototypes, and production-ready parts with unparalleled precision and speed. Its compact design and user-friendly interface make it an ideal solution for various industries, including aerospace, automotive, healthcare, and education.",
        youtubeUrl: "https://youtu.be/9cLFAI1_fmU?si=UxxXvyCJ95Ll2Xdv"
    }
};

// Function to get URL parameter (ID of the invention)
function getInventionId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id") || "invention1"; // Default to first invention
}

// Function to update the page with invention details
function loadInventionDetails() {
    const inventionId = getInventionId();
    const invention = inventions[inventionId];

    if (invention) {
        document.getElementById("invention-title").innerText = invention.title;
        document.getElementById("invention-image").src = invention.image;
        document.getElementById("invention-description").innerText = invention.description;
        document.getElementById("invention-video").src = invention.youtubeUrl;
    } else {
        document.getElementById("invention-details").innerHTML = "<h2>Invention not found</h2>";
    }
}

// Load invention details on page load
document.addEventListener("DOMContentLoaded", loadInventionDetails);
});
