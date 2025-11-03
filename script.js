// Sample course data
const courses = [
  {
    id: 1,
    title: "Introduction to HTML",
    description: "Learn the basics of web structure and HTML tags.",
    lessons: ["HTML Basics", "Headings & Paragraphs", "Links & Images"],
    completed: false
  },
  {
    id: 2,
    title: "CSS for Beginners",
    description: "Style your web pages beautifully using CSS.",
    lessons: ["Selectors", "Box Model", "Flexbox & Grid"],
    completed: false
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Make your website interactive with JavaScript fundamentals.",
    lessons: ["Variables", "Functions", "DOM Manipulation"],
    completed: false
  }
];

const courseList = document.getElementById("course-list");
const courseDetail = document.getElementById("course-detail");
const coursesSection = document.getElementById("courses-section");

const titleEl = document.getElementById("course-title");
const descEl = document.getElementById("course-description");
const lessonList = document.getElementById("lesson-list");
const progressEl = document.getElementById("progress-status");

const backBtn = document.getElementById("back-btn");
const completeBtn = document.getElementById("complete-btn");

// Display course cards
function renderCourses() {
  courseList.innerHTML = "";
  courses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <p><strong>Status:</strong> ${course.completed ? "✅ Completed" : "In Progress"}</p>
    `;
    card.onclick = () => viewCourse(course.id);
    courseList.appendChild(card);
  });
}

// View course details
function viewCourse(id) {
  const course = courses.find(c => c.id === id);
  coursesSection.classList.add("hidden");
  courseDetail.classList.remove("hidden");

  titleEl.textContent = course.title;
  descEl.textContent = course.description;
  lessonList.innerHTML = course.lessons.map(lesson => `<li>${lesson}</li>`).join("");
  progressEl.textContent = course.completed ? "You’ve completed this course!" : "Course in progress.";
  
  completeBtn.onclick = () => markAsCompleted(course.id);
}

// Mark course as completed
function markAsCompleted(id) {
  const course = courses.find(c => c.id === id);
  course.completed = true;
  alert(`You have completed "${course.title}"!`);
  renderCourses();
  viewCourse(id);
}

// Back button
backBtn.onclick = () => {
  coursesSection.classList.remove("hidden");
  courseDetail.classList.add("hidden");
};

// Initialize page
renderCourses();
