/* Question 2:
         2. To create  Own Resume Data in JSON format.
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
const output = JSON.stringify(resume, null, 2);

console.log(output)

