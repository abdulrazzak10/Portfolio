document.addEventListener("DOMContentLoaded", function () {
    mapTechData();
});

function mapTechData() {
    let tech = [
        {
            "name": "Flutter",
            "icon": "images/tech/flutter.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Dart",
            "icon": "images/tech/dart.svg",
            "type": "mobile-tech"
        },
        {
            "name": "HTML 5",
            "icon": "images/tech/html.svg",
            "type": "web-tech"
        },
        {
            "name": "CSS 3",
            "icon": "images/tech/css.svg",
            "type": "web-tech"
        },
        {
            "name": "Bootstrap",
            "icon": "images/tech/bootstrap.svg",
            "type": "web-tech"
        },
        {
            "name": "Javascript",
            "icon": "images/tech/js.svg",
            "type": "web-tech"
        },
        {
            "name": "Kali Linux",
            "icon": "images/tech/kali.svg",
            "type": "server-tech"
        },
        {
            "name": "Wireshark",
            "icon": "images/tech/wireshark.svg",
            "type": "server-tech"
        },
        {
            "name": "Nmap",
            "icon": "images/tech/nmap.svg",
            "type": "server-tech"
        },
        {
            "name": "Burp Suite",
            "icon": "images/tech/burp.svg",
            "type": "server-tech"
        },
        {
            "name": "Metasploit",
            "icon": "images/tech/metasploit.svg",
            "type": "server-tech"
        },
        {
            "name": "Firebase",
            "icon": "images/tech/firebase.svg",
            "type": "database-tech"
        },
        {
            "name": "Postgres SQL",
            "icon": "images/tech/sql.svg",
            "type": "database-tech"
        },
        {
            "name": "GitHub",
            "icon": "images/tech/github.svg",
            "type": "vc-tech"
        },
        {
            "name": "Notion",
            "icon": "images/tech/notion.svg",
            "type": "vc-tech"
        },
        {
            "name": "Figma",
            "icon": "images/tech/figma.svg",
            "type": "design-tech"
        },
    ];

    for (var i = 0; i < tech.length; i++) {
        // div
        var techDiv = document.createElement("div");
        techDiv.className = "tech";

        // icon
        var techIconImg = document.createElement("img");
        techIconImg.className = "tech-icon";
        if (tech[i]["name"] == "Node.js" || tech[i]["name"] == "Dart Frog") {
            techIconImg.style.height = "25px";
        }

        // tech name
        var techName = document.createElement("span");
        techName.className = "tech-label";

        techIconImg.src = tech[i]["icon"];
        techIconImg.alt = tech[i]["name"];

        techName.innerHTML = tech[i]["name"];

        var relatedDiv = document.getElementById(tech[i]["type"]);

        techDiv.appendChild(techIconImg);
        techDiv.appendChild(techName);
        relatedDiv.appendChild(techDiv);
    }
}
