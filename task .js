const Name = prompt("enter your name: ");
const role = prompt ("enter rolr faculty/HOD/Student: ");
console.log("Name:",Name);
console.log("Role:",role);


const patentype=prompt("enter patent type granted/published: ");
const inter= prompt("Is international ?..t/f: ");
let marks=0;
if (patentype==="published"){
    marks=10
}
else if (patentype==="granted"){
    marks=20
}
if (inter==="t"){
    marks+=5
}
console.log("total marks:",marks);


let fname=["Abc","Ds","SVG","sas"]
for (let i=0;i<fname.length;i++){
    console.log(fname[i])
}


const p=prompt("enter patent type granted/published");
const i= prompt("Is international ?..t/f ");
function calculatemarks(a,b){
    let marks=0;
    if (a==="published"){
        marks=10
    }
    else if (a==="granted"){
        marks=20
    }
    if (b==="t"){
        marks+=5
    }
    return marks;
}
console.log("Marks:",calculatemarks(p,i));



const faculty = [{
    name: "abc",
    department: "CSE",
    numberOfPatents: 5
},
{
    name: "Dbm",
    department: "CSE",
    numberOfPatents: 6
}];
console.log(faculty );



let fileName = "assignment_submission.pdf";
const file = fileName.toLowerCase
if (file.endsWith(".pdf")) {
    console.log("Valid PDF");
} else {
    console.log("Invalid file");
}



let status = "HOD_APPROVED"; 

switch (status) {
    case "DRAFT":
        console.log("Next status: SUBMITTED");
        break;
    case "SUBMITTED":
        console.log("Next status: HOD_APPROVED");
        break;
    case "HOD_APPROVED":
        console.log("Workflow Complete: Already at final stage.");
        break;
    default:
        console.log("Unknown status.");
}
