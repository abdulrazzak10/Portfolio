document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
        {
            "org": "internee.pk",
            "position": "Flutter Intern",
            "duration": "April 2025 - Present",
            "technologies": [
                "Flutter",
                "Dart",
                "GitHub Actions",
                "Firebase",
                "Dart package"
            ],
            "details": [
                "Built responsive and dynamic UIs using Flutter widgets and followed Material Design principles.",
                "Gained hands-on experience with state management using setState and Provider",
                "Integrated Firebase Authentication and Firestore for real-time data handling and user auth flows.",
                "Worked with REST APIs and parsed JSON to display dynamic content in apps.",
                "Learned GitHub actions for CI/CD",
                "Developed real-world features like login/signup, CRUD operations, and user dashboards.",
                "Used tools like Git, GitHub, VS Code, Flutter DevTools, and Firebase Console for development and debugging.",
                "Integration of REST APIs, Firebase and local cached concepts for better user experience",
            ]
        },
        {
            "org": "NextGen | Dev",
            "position": "Web Developer Intern",
            "duration": "june 2024 - july 2024",
            "technologies": [
                "UI/UX Design",
                "Web development",
                "React.js",
                "Tailwind CSS",
                "Firebase Hosting",
                "Project Management",
            ],
            "details": [
    "Built responsive web interfaces using React.js and modern JavaScript (ES6+).",
    "Integrated Firebase Authentication and Firestore for real-time data handling.",
    "Used React Router for navigation and managed state with hooks and context.",
    "Applied component-based architecture and reusable UI patterns.",
    "Worked with REST APIs and handled data using Axios or Fetch.",
    "Styled web apps using HTML, CSS, and optionally Tailwind CSS.",
    "Used Git and GitHub for version control and collaboration.",
    "Followed Agile methodology and contributed to sprint-based development."
]
        },
    ];

    for (var i = 0; i < exp.length; i++) {
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var session = document.createElement("p");
        session.className = "body2 exp-session";
        session.innerHTML = exp[i]["duration"];

        var technologiesHeading = document.createElement("span");
        technologiesHeading.className = "body2 exp-tech";
        if (orgName.innerHTML == "Dexplat | PK") {
            technologiesHeading.innerHTML = "Services";
        } else {
            technologiesHeading.innerHTML = "Technologies";
        }

        var technologiesList = document.createElement("ul");
        technologiesList.className = "exp-tech-list";

        for (var k = 0; k < exp[i]["technologies"].length; k++) {
            var techName = document.createElement("li");
            techName.className = "body2 exp-tech-item";
            techName.innerHTML = exp[i]["technologies"][k];
            technologiesList.appendChild(techName);
        }
        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(session);
        expMetaDiv.appendChild(technologiesHeading);
        expMetaDiv.appendChild(technologiesList);
        expCard.appendChild(expMetaDiv);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }

        expCard.appendChild(detailsList);

        var experiences = document.getElementById("exp");
        experiences.appendChild(expCard);
    }
}