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
  
  if (!content.includes('project-page-wrapper')) {
    content = content.replace(/<div\s/, '<div className="project-page-wrapper" ');
    fs.writeFileSync(path, content);
    console.log("Added wrapper to " + file);
  }
});
