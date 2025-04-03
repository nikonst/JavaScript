const courses = [
    "* Αρχαία Ελληνική Γλώσσα και Γραμματεία",
    "* Νέα Ελληνική Γλώσσα και Λογοτεχνία",
    "* Άλγεβρα",
    "* Γεωμετρία",
    "* Βιολογία",
    "* Φυσική",
    "* Χημεία",
    "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ",
    "Ιστορία",
    "Φιλοσοφία",
    "Θρησκευτικά",
    "Αγγλικά",
    "2η Ξένη Γλωσσα (Γερμανικά ή Γαλλικά)",
    "Φυσική Αγωγή",
    "Φυσική (ΠΡΣ) ή Αρχαία (ΠΡΣ)",
    "Μαθηματικά (ΠΡΣ) ή Λατινικά (ΠΡΣ)",
]

let calculations = []

const courseTable = document.getElementById("courseTable");

courses.forEach((course, index) => {
    const row = document.createElement("tr");

    const cellLabel = document.createElement("td");
    cellLabel.textContent = course;

    const cellInput1 = document.createElement("td");
    const input1 = document.createElement("input");
    input1.type = "text";
    input1.name = `courseA_${index}`;

    const cellInput2 = document.createElement("td");
    const input2 = document.createElement("input");
    input2.type = "text";
    input2.name = `courseB_${index}`;
    
    cellInput1.appendChild(input1);
    cellInput2.appendChild(input2);
    row.appendChild(cellLabel);
    row.appendChild(cellInput1);
    row.appendChild(cellInput2);
    courseTable.appendChild(row);
});

function getInputValues() {
    const inputs1 = document.querySelectorAll('[name^="courseA"]');
    console.log(inputs1)
    const values1 = Array.from(inputs1).map(input => input.value);

    const inputs2 = document.querySelectorAll('[name^="courseB"]');
    const values2 = Array.from(inputs2).map(input => input.value);
    
    console.log(values1); // Display in console (or do something with the array)
    console.log(values2); // Display in console (or do something with the array)

    alert("Input values collected: " + values1.join(", "));
}
