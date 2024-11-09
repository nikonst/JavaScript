const fs = require('fs');
const path = require('path');
const { ObjectId } = require('mongodb'); 

// Read JSON file
const readJsonFile = (filePath) => {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

// Write JSON file
const writeJsonFile = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// JSON files
const templateFilePath = path.join(__dirname, '/templates/templateFormioSubmission.json');
const sourceFilePath = path.join(__dirname, '/sourceData/municipalities.json');

// Read the JSON files
const templateData = readJsonFile(templateFilePath);
const sourceData = readJsonFile(sourceFilePath);

// Create an array of updated objects based on the template
const updatedData = sourceData.map(sourceItem => {
    const updatedItem = JSON.parse(JSON.stringify(templateData)); // Deep copy of template
    //console.log("updatedItem", updatedItem)
    //console.log("sourceItem", sourceItem)
	let objectId = new ObjectId();
    updatedItem._id.$oid = objectId;
    updatedItem.data.prefectureref = sourceItem.prefectureref || updatedItem.data.prefectureref;
    //updatedItem.date = new Date().toISOString(); // Update date to current date
    updatedItem.data.municipalitie = sourceItem.municipalitie || updatedItem.data.municipalitie;
    updatedItem.created.$date = new Date().toISOString();
    updatedItem.modified.$date = new Date().toISOString();

    return updatedItem;
});

// Path to the new JSON file
const outputFilePath = path.join(__dirname, '/output/insertMinicipalities.json');

// Write the updated array to a new JSON file
writeJsonFile(outputFilePath, updatedData);

console.log('JSON file has been successfully updated and saved.');
