// Initial standings data - this would ideally come from an API
let originalStandings = [
    { team: "Västerås IK", gp: 52, w: 32, otw: 3, otl: 4, l: 13, gf: 175, ga: 126, points: 106 },
    { team: "Timrå IK", gp: 52, w: 29, otw: 4, otl: 5, l: 14, gf: 178, ga: 142, points: 100 },
    { team: "Almtuna IS", gp: 52, w: 28, otw: 5, otl: 2, l: 17, gf: 164, ga: 131, points: 96 },
    { team: "BIK Karlskoga", gp: 52, w: 27, otw: 4, otl: 4, l: 17, gf: 157, ga: 137, points: 93 },
    { team: "Mora IK", gp: 52, w: 26, otw: 6, otl: 2, l: 18, gf: 162, ga: 146, points: 92 },
    { team: "Södertälje SK", gp: 52, w: 25, otw: 5, otl: 6, l: 16, gf: 161, ga: 139, points: 91 },
    { team: "AIK", gp: 52, w: 24, otw: 6, otl: 4, l: 18, gf: 155, ga: 138, points: 88 },
    { team: "Kristianstads IK", gp: 52, w: 24, otw: 4, otl: 6, l: 18, gf: 161, ga: 146, points: 86 },
    { team: "Djurgårdens IF", gp: 52, w: 23, otw: 5, otl: 5, l: 19, gf: 148, ga: 143, points: 84 },
    { team: "Tingsryds AIF", gp: 52, w: 21, otw: 5, otl: 5, l: 21, gf: 145, ga: 150, points: 78 },
    { team: "Kalmar HC", gp: 52, w: 19, otw: 7, otl: 4, l: 22, gf: 140, ga: 154, points: 75 },
    { team: "Nybro Vikings IF", gp: 52, w: 20, otw: 4, otl: 5, l: 23, gf: 141, ga: 156, points: 73 },
    { team: "Vimmerby HC", gp: 52, w: 16, otw: 4, otl: 6, l: 26, gf: 133, ga: 168, points: 62 },
    { team: "Västerviks IK", gp: 52, w: 10, otw: 3, otl: 7, l: 32, gf: 112, ga: 192, points: 43 }
];

let currentStandings = [];

// Initialize the app
function init() {
    currentStandings = JSON.parse(JSON.stringify(originalStandings));
    renderTable();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('resetBtn').addEventListener('click', resetTable);
    document.getElementById('fetchBtn').addEventListener('click', fetchStandings);
}

// Render the standings table
function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    // Sort by points (desc), then goal difference (desc), then goals for (desc)
    currentStandings.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        const diffA = a.gf - a.ga;
        const diffB = b.gf - b.ga;
        if (diffB !== diffA) return diffB - diffA;
        return b.gf - a.gf;
    });

    currentStandings.forEach((team, index) => {
        const row = document.createElement('tr');
        const goalDiff = team.gf - team.ga;
        
        // Check if this team's points have been modified
        const originalTeam = originalStandings.find(t => t.team === team.team);
        const isChanged = originalTeam && originalTeam.points !== team.points;
        
        if (isChanged) {
            row.classList.add('changed');
        }

        row.innerHTML = `
            <td class="position">${index + 1}</td>
            <td class="team-name">${team.team}</td>
            <td>${team.gp}</td>
            <td>${team.w}</td>
            <td>${team.otw}</td>
            <td>${team.otl}</td>
            <td>${team.l}</td>
            <td>${team.gf}</td>
            <td>${team.ga}</td>
            <td>${goalDiff > 0 ? '+' : ''}${goalDiff}</td>
            <td class="points">${team.points}</td>
            <td>
                <div class="point-controls">
                    <button class="point-btn minus" onclick="adjustPoints('${team.team}', -1)">-1</button>
                    <button class="point-btn" onclick="adjustPoints('${team.team}', 1)">+1</button>
                </div>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Adjust points for a team
function adjustPoints(teamName, delta) {
    const team = currentStandings.find(t => t.team === teamName);
    if (team) {
        // Don't allow negative points
        if (team.points + delta >= 0) {
            team.points += delta;
            renderTable();
        }
    }
}

// Reset table to original data
function resetTable() {
    currentStandings = JSON.parse(JSON.stringify(originalStandings));
    renderTable();
}

// Fetch current standings from API (placeholder for now)
async function fetchStandings() {
    // In a real implementation, this would fetch from an API
    // For now, we'll just show an alert
    alert('API-integration kommer snart! För närvarande används exempeldata från säsongen 2023/24.');
    
    // Example of how it could work with a real API:
    /*
    try {
        const response = await fetch('https://api.hockeyallsvenskan.se/standings');
        const data = await response.json();
        originalStandings = data;
        resetTable();
    } catch (error) {
        console.error('Fel vid hämtning av data:', error);
        alert('Kunde inte hämta aktuell tabelldata');
    }
    */
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
