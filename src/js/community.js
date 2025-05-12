document.addEventListener("DOMContentLoaded", function () {
    mapCommunityData();
});

function mapCommunityData() {
    let communities = [
        {
            "name": "SMIT Karachi",
            "role": "Flutter Developer",
            "session": "September 2024 - January 2025",
            "logo": "images/community/smit.png",
            // "link": "https://meetup.com/flutter-islamabad",
            "details": "Completed a Flutter bootcamp focused on app development using Dart. Built mobile apps with API integration, state management, and responsive UI/UX."
        },
        {
            "name": "Sir Adamjee Institute of Technology",
            "role": "Frontend Web Developer",
            "session": "June 2023 - October 2023",
            "logo": "images/community/sai.png",
            "details": "Trained in HTML, CSS, JavaScript, and basic React. Created responsive websites and improved skills in debugging, layout, and user interface design."
        },
        {
            "name": "IBM Coursera",
            "role": "Computer Networks and Network Security",
            "session": "February 2025 - March 2025",
            "logo": "images/community/ibm.png",
            // "link": "https://ibm.pk/",
            "details": "Covered networking fundamentals like TCP/IP, DNS, and VPNs. Gained basic knowledge of encryption, cyber threats, and secure communication."
        }
    ];

    for (var i = 0; i < communities.length; i++) {
        var com = communities[i];
        var name = com.name;
        var role = com.role;
        var session = com.session;
        var logo = com.logo;
        var details = com.details;

        // Create a container div instead of an anchor tag
        var card = document.createElement("div");
        card.className = "community-card";

        var image = document.createElement('img');
        image.className = "community-logo";
        image.src = logo;
        image.alt = name;

        var info = document.createElement("div");
        info.className = "community-info";

        var cName = document.createElement("p");
        cName.className = "body1 c-title";
        cName.textContent = name;

        var cRole = document.createElement("span");
        cRole.className = "body2 c-position";
        cRole.innerHTML = role;

        var cSession = document.createElement("p");
        cSession.className = "label c-session";
        cSession.textContent = session;

        info.appendChild(cName);
        info.appendChild(cRole);
        info.appendChild(cSession);

        card.appendChild(image);
        card.appendChild(info);

        var communitiesDiv = document.getElementById("communities");
        communitiesDiv.append(card);

        var point = document.createElement("li");
        point.className = "body2 cw-point";
        point.innerHTML = details;

        var points = document.getElementById("cw-points");
        points.appendChild(point);
    }
}
