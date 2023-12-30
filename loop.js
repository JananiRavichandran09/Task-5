/* Question 1:
     
    1. For the given JSON iterate over all for loops.
    (for, for...in, for...of, forEach loops).
*/ 


let resume = {
    Personal_information: {
        name: "JANANI R",
        email: "jananiravichandran20012gmail.com",
        phoneNo: 9042235777,
        address: {

            street: "Lakshmi Nagar",
            road: "50 feet road",
            district: "Tiruppur",
            state: "TamilNadu",
            country: "India",
        },
    },
    Education_info: [{
        nameofcollege: "Karpagam Academy of Higher Education",
        degree: "MCA",
        cgpa: 8.7,
        yearofpassing: 2024,
    },
        {
            nameofcollege: "Kongu Arts and Science College",
            degree: "B.Sc.Mathematics",
            cgpa: 7.8,
            yearofpassing: 2021,
        },
        {
            nameofschool: "Sri Sai Matric Hr. Sec. School",
            board: "State Board",
            grade: "HSC",
            nameofeducation: "Bio,Maths",
            cgpa: 6.9,
        },
        {
            nameofschool: "Sri Sai Matric Hr. Sec. School",
            board: "State Board",
            grade: "SSLC",
            cgpa: 8.9,
        },
    ],
    Experience: {
        company_name: "Focus Edumatics Private Limited",
        job_title: "Senior Online Tutor",
        start_date: "04/10/2021",
        end_date: "07/07/2023",
    },
    Skills: ["HTML", "CSS", "JAVASCRIPT", "C"],
    Language: ["English", "Tamil"],
    Interest: "Developer",
    Hobbies: "Drawing, Paintings",
}


  // for...in looping 
for (let key in resume.Experience) {
  if (resume.Experience.hasOwnProperty(key)) {
    console.log(key + '===>', resume.Experience[key]);
  }
}  


// for...of looping

for (let result of Object.keys(resume.Education_info)) {
  console.log(result, '===>', resume.Education_info[result]);
}

//  forEach looping

resume.Skills.forEach(Skills => { console.log(Skills); });


//for loop

let keys = Object.keys(resume)

for (let i = 0; i < keys.length; i++){
  console.log(keys[i], '===>', resume[keys[i]]);
}


