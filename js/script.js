
let selectedJob = "";

function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const target = document.getElementById(sectionId);

    if (target) {
        target.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

function selectJob(button, jobName) {
    const jobCards = document.querySelectorAll(".job-card");

    jobCards.forEach(card => {
        card.classList.remove("selected");
    });

    button.classList.add("selected");

    selectedJob = jobName;

    document.getElementById("job-feedback").textContent =
        `Du hast ${jobName} ausgewählt.`;
    
    document.getElementById("selected-job").textContent = jobName;
}
