const students = [
    {
        name: "Chris Miller",
        course: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        course: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        course: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        course: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        course: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        course: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        course: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        course: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        course: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        course: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        course: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        course: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]



const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}

const section = (title, style) => {
    return `<section class="${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

const studentp = function(name, course, info) {
       return `<div id="student">
        ${h1(name, "xx-large passing")}
        ${section(course, "bordered dashed section--padded")}
        ${aside(info, "pushRight")}
    </div>`
    
  }
const studentf = function(name, course, info) {
   return `<div id="student">
        ${h1(name, "xx-large failing")}
        ${section(course, "section--padded")}
        ${aside(info, "pushRight")}
    </div>`
   }

 let container = document.querySelector("#container");

students.forEach(function(student) {
    let studentComponent = "";
    if (student.score >= 60) {
      studentComponent = studentp(student.name, student.course, student.info);
      container.innerHTML = studentComponent;

      const newdiv = document.createElement('div');
      newdiv.innerHTML = studentComponent;
      document.querySelector('body').appendChild(newdiv);
      
      console.log(studentComponent)
    } else {
        studentComponent = studentf(student.name, student.course, student.info);
        container.innerHTML = studentComponent;

        const newdiv = document.createElement('div');
        newdiv.innerHTML = studentComponent;
        document.querySelector('body').appendChild(newdiv);

        console.log(studentComponent)
    }
});
