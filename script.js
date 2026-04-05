document.addEventListener("DOMContentLoaded", () => {
  const subjectInput = document.getElementById("subject-name");
  const attendenceInput = document.getElementById("att-per");
  let addBtn = document.getElementById("add");
  let divBody = document.getElementById("divB");
  let subjects = JSON.parse(localStorage.getItem("subjects")) || [];
  renderSubjects();
  addBtn.addEventListener("click", () => {
    let subjectT = subjectInput.value;
    if (subjectT.trim() === "") {
      alert("Enter a subject");
      return;
    }
    let attendencePer = parseInt(attendenceInput.value);
    if (attendencePer <= 0 || isNaN(attendencePer)) {
      alert("Enter the Number of persentage require");
      return;
    }
    let newSubject = {
      name: subjectT,
      present: 0,
      absent: 0,
      percentageNeeded: attendencePer,
    };
    subjects.push(newSubject);
    renderSubjects();
    saveLocal();
    subjectInput.value = "";
    attendenceInput.value = "";
  });
  divBody.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let action = e.target.dataset.action;
      if (action === "present") {
        let sub = e.target.dataset.subject;
        subjects.forEach((subject) => {
          if (sub === subject.name) {
            subject.present += 1;
          }
        });
        renderSubjects();
        saveLocal();
      }
      if (action === "absent") {
        let sub = e.target.dataset.subject;
        subjects.forEach((subject) => {
          if (sub === subject.name) {
            subject.absent += 1;
          }
        });
        renderSubjects();
        saveLocal();
      }
    }
  });
  function renderSubjects() {
    divBody.innerHTML = ""; // clear existing cards
    subjects.forEach((subject) => {
      let total = subject.present + subject.absent;
      let percentage = total === 0 ? 0 : (subject.present / total) * 100;
      let subjectDiv = document.createElement("div");
      subjectDiv.classList.add("info-div");
      subjectDiv.innerHTML = `
      <p>${subject.name}</p>
      <p>Present: ${subject.present} | Absent: ${subject.absent}</p>
      <p>Attendance: ${percentage.toFixed(1)}%</p>
      <button data-action="present" data-subject="${subject.name}">Present</button>
      <button data-action="absent" data-subject="${subject.name}">Absent</button>
      `;
      let warning = subject.percentageNeeded;
      if (percentage < warning) {
        subjectDiv.style.setProperty(
          "background-color",
          "#ffe5e5",
          "important",
        );
      } else if (percentage === warning) {
        subjectDiv.style.setProperty(
          "background-color",
          "#fff4e5",
          "important",
        );
      } else {
        subjectDiv.style.setProperty(
          "background-color",
          "#e5ffed",
          "important",
        );
      }
      divBody.appendChild(subjectDiv);
    });
  }

  //
  function saveLocal() {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }
});
