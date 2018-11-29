const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

const student = function(name, class, info) {
    return `<div id="student">
        ${h1(name, "xx-large")}
        ${section(class "section--padded")}
        ${aside(info, "pushRight")}
    </div>`
}

for (student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = ...
    } else {
        studentComponent = ...
    }
}
 

// containerRef.innerHTML += student(students[i].name,
//     students[i].class, students[i].info);

{
    // If a student is passing, then the structure should look like the following
    // adding class .passing (green) to header or .failing (orange)
    // Classes 1.section--padded class and 2.bordered and 3.dashed in section

 /* <div class="student">
    <h1 class="xx-large green">Student Name</h1>
    <section class="bordered dashed section--padded">Student class</section>
    <aside class="pushRight">Additional information</aside>
</div> */}