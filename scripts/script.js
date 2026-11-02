
import { courses } from "./courses.js";
const lastModified = document.querySelector("#lastModified");
const coursesContainer = document.querySelector(".courses-list");
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");
const wddButton = document.querySelector("#card-wdd");
const cseButton = document.querySelector("#card-cse");
const allButton = document.querySelector("#card-all");
const wddCourses = courses.filter(course => course.subject === "WDD");
const cseCourses = courses.filter(course => course.subject === "CSE");
const allCourses = courses
const credits = document.querySelector("#credits");

let creditsTotal = 0;
function displayCourses(courseList) {

    coursesContainer.innerHTML = courseList.map(course => `
        <div class="course ${course.completed ? "completed" : ""}">
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
        </div>
    `).join("");

    const creditsTotal = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    credits.textContent = creditsTotal;
}

displayCourses(allCourses)

wddButton.addEventListener("click", () => {
    displayCourses(wddCourses)
    
});

cseButton.addEventListener("click", () => {
     displayCourses(cseCourses)
    
});

allButton.addEventListener("click", () => {
      displayCourses(allCourses)
});


if (lastModified) {

    lastModified.textContent = document.lastModified;
}


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

});


