const fs = require('fs');
const files = [
  'Atelier.jsx', 'Bidmesh.jsx', 'FaceSync.jsx', 'GardenCleaningTracker.jsx',
  'Internify.jsx', 'Lolz.jsx', 'LorrySwap.jsx', 'MoveMate.jsx', 
  'MythicEcology.jsx', 'PopcornPick.jsx', 'WeatherWhisper.jsx'
];

files.forEach(file => {
  const path = 'src/components/' + file;
  if (!fs.existsSync(path)) return;
  
  let content = fs.readFileSync(path, 'utf8');
  let changed = false;

  // Find divs that contain section headers
  // For example: <div style={{ fontSize: "1.5rem", ... }}> Technology Stack </div>
  // We can just add className="project-text-content" to any <div style={{...}}> that has 'fontSize: "1.5rem"' and 'Cinzel Decorative'
  // Actually, I can just replace all <span style= and <div style= that have 'Cinzel Decorative' or 'fontSize: "1.5rem"' or 'fontWeight: "bold"' with the class.
  // Let's just use regex to find all divs and spans that are just text containers.

  // Let's inject a generic class to all <span and <div inside the Card
  // Instead of complex regex, let's just find "We Offer", "Technology Stack", "Sensors Used", "Problem Addressed", "Platform"
  const headers = ["We Offer", "Technology Stack", "Sensors Used", "Problem Addressed", "Platform", "Database", "Backend", "Frontend", "APIs"];
  
  headers.forEach(h => {
    // Find <div ... > h </div>
    // This is hard to regex safely.
  });

});
