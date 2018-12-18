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


// const h1 = (title, style) => {
//     return `<h1 class="${style}">${title}</h1>`
// }

// CHALLENGE: Use Rest Operator
// 1. Pass multiple arguments into component building function
// without having to define each one in the argument list

const h1 = (...props) => {
    return `<h1 class="${props[1]}">${props[0]}</h1>`
    }

// const section = (title, style) => {
//     return `<section class="${style}">${title}</section>`
// }
const section = (...props) => {
    return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}

// const aside = (title, style) => {
//     return `<aside class="${style}">${title}</aside>`
// }
const aside = (...props) => {
    return `<aside class="${props[1]}">${props[0]}</aside>`
}

// const studentp = function(name, course, info) {
//        return `<article id="student">
//         ${h1(name, "xx-large passing")}
//         ${section(course, "bordered dashed section--padded")}
//         ${aside(info, "pushRight")}
//     </article>` 
//   }

// CHALLENGE: Generic HTML Function
// 1. Created a more generic function that takes the element
// argument as well as the style and content arguments.

const studentp = (...props) => {
    return `<article id="student">
     ${h1(props[0], "xx-large passing")}
     ${section(props[1], "bordered dashed section--padded")}
     ${aside(props[2], "pushRight")}
 </article>` 
};

const studentf = function(name, course, info) {
   return `<article id="student">
        ${h1(name, "xx-large failing")}
        ${section(course, "section--padded")}
        ${aside(info, "pushRight")}
    </article>`
   }

const container = document.querySelector("#container");

students.forEach(function(student) {
    let studentComponent = "";
    
    if (student.score >= 60) {
      studentComponent = studentp(student.name, student.course, student.info);
      let newarticle = document.createElement('article');
      newarticle.innerHTML = studentComponent;
      document.querySelector('div').appendChild(newarticle);
      
    } else {
        studentComponent = studentf(student.name, student.course, student.info);
        let newarticle = document.createElement('article');
        newarticle.innerHTML = studentComponent;
        document.querySelector('div').appendChild(newarticle);

    }
    console.log(studentComponent)
});

// Here the first two arguments go into variables and the
// rest go into titles array:

// function showName(firstName, lastName, ...titles) {
//     alert( firstName + ' ' + lastName ); // Julius Caesar

//     // the rest go into titles array
//     // i.e. titles = ["Consul", "Imperator"]
//     alert( titles[0] ); // Consul
//     alert( titles[1] ); // Imperator
//     alert( titles.length ); // 2
// }
// showName("Julius", "Caesar", "Consul", "Imperator");


// Advanced Challenge: Using createElement for Components
const messageArticle = document.querySelector("#messages");

let messageSection = document.createElement("section");
messageSection.textContent = "Are we doing fireworks this year?";
messageArticle.appendChild(messageSection);
console.log(messageSection)

messageSection = document.createElement("section");
messageSection.textContent = `After last year's "tree incident", should we?`;
messageArticle.appendChild(messageSection);
console.log(messageSection)

messageSection = document.createElement("section");
messageSection.textContent = "The fire fighters put it out in like a minute. Wasn't even a real fire.";
messageArticle.appendChild(messageSection);
console.log(messageSection)

messageSection = document.createElement("section");
messageSection.textContent = "We can set them off in the street.";
messageArticle.appendChild(messageSection);
console.log(messageSection)

messageSection = document.createElement("section");
messageSection.textContent = "Our neighbors' houses are flammable, too";
messageArticle.appendChild(messageSection);
console.log(messageSection)

// Advanced Challenge: DOM Fragments
const fragment = document.createDocumentFragment();

const message1 = document.createElement("section");
message1.textContent = "Are we doing fireworks this year?";
fragment.appendChild(message1);

const message2 = document.createElement("section");
message2.textContent = `After last year's "tree incident", should we?`;
fragment.appendChild(message2);

const message3 = document.createElement("section");
message3.textContent = "The fire fighters put it out in like a minute. Wasn't even a real fire.";
fragment.appendChild(message3);

const message4 = document.createElement("section");
message4.textContent = "We can set them off in the street.";
fragment.appendChild(message4);

const message5 = document.createElement("section");
message5.textContent = "Our neighbors' houses are flammable, too";
fragment.appendChild(message5);

document.querySelector("#messages").appendChild(fragment);