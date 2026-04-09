# 📅 Attendance Tracker

A smart web application designed to help students and professionals track their subject-wise attendance. No more manual counting—know exactly where you stand with your percentages!

## 🔗 Live Demo

Check out the app live here: [Attendance Tracker](https://syeon-protocol.github.io/Student-Attendance-Tracker/)

---

## 🚀 Features

* **Dynamic Subject Tracking**: Add as many subjects as you need with custom target percentages.
* **Real-time Calculations**: Automatically updates your attendance percentage as you mark yourself present or absent.
* **Data Persistence**: Uses `localStorage` to save your data, so your attendance history remains even if you close the browser or refresh the page.
* **Visual Status Alerts**: Cards change color based on your performance:
    * 🟢 **Green**: Above your required percentage.
    * 🟡 **Yellow**: Exactly on the required percentage.
    * 🔴 **Red**: Below the required threshold.
* **Interactive UI**: Simple "Present" and "Absent" buttons for quick logging.

---

## 🛠️ Technology Stack

* **HTML5**: Structure for input forms and display containers.
* **CSS3**: Custom styling including flexbox layouts and dynamic state-based background colors.
* **JavaScript (ES6)**: 
    * Event Delegation for handling button clicks.
    * JSON parsing and stringifying for LocalStorage.
    * DOM manipulation to render subject cards dynamically.

---

## 📖 How to Use

1.  **Add a Subject**: Enter the name of the subject and the minimum percentage required by your institution.
2.  **Click Add**: A new card will appear in your dashboard.
3.  **Update Attendance**: Click "Present" or "Absent" after every class.
4.  **Monitor Status**: Keep an eye on the card color to ensure you stay above your target!

---

## 🧮 Logic & Math

The application calculates your standing using the standard attendance formula:

$$\text{Attendance \%} = \left( \frac{\text{Classes Present}}{\text{Total Classes}} \right) \times 100$$

The result is fixed to one decimal place to provide a precise view of your status.

---

## 📂 Project Structure

```text
├── index.html   # Main dashboard and input interface
├── style.css    # Responsive grid and color-coding styles
└── script.js    # Logic for storage, math, and UI rendering
