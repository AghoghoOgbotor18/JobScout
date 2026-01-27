# JobScout

**JobScout** is a modern job listing platform built with **React**, **Vite**, and **Tailwind CSS**.  
It allows job seekers in Nigeria to **do live job searching**, **save favorite jobs**, and **view saved jobs** in a smooth, responsive interface.  
The project demonstrates **state management**, **API integration**, **debounced search**, **toast notifications**, and **responsive UI design**.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Challenges & Solutions](#challenges--solutions)
- [Components](#components)
- [Context & State Management](#context--state-management)
- [API Integration](#api-integration)
- [Future Improvements](#future-improvements)

---

## Features

- Search jobs by **title**, **company**, or **keyword**
- Search is triggered only when the **“Find Jobs” button** is clicked in the **CTA Section**
- Debounced search using a **custom `useDebounce` hook** to reduce API calls
- Pagination with smooth scroll to the **job section** on page change
- Save jobs to **localStorage** and remove them later
- **Saved Jobs page** displays saved jobs and supports filtering
- Toast notifications for job save/remove actions
- Responsive design for **mobile, tablet, and desktop**
- Country filter using **react-country-region-selector**
- Preloaded and optimized images for faster loading

---

---

## Project Structure

JobScout/
│
├─ public/
│ ├─ images/
│ │ ├─ heroImage.webp
│ │ └─ sadface.webp
│ └─ index.html
│
├─ src/
│ ├─ Components/
│ │ ├─ Hero.jsx
│ │ ├─ CTASection.jsx
│ │ ├─ Popular.jsx
│ │ ├─ Jobs.jsx
│ │ ├─ ScrollToTop.jsx
| | ├─ Footer.jsx
│ │ └─ Navbar.jsx
│ │
│ ├─ Context/
│ │ └─ SavedJobsContext.jsx
│ │
│ ├─ Hooks/
│ │ ├─ useJobs.js
│ │ └─ useDebounce.js
│ │
│ ├─ Layout/
│ │ └─ Layout.jsx
│ │
│ ├─ Pages/
│ │ ├─ Home.jsx
│ │ └─ SavedJobs.jsx
│ │
│ └─ main.jsx
│
└─ package.json

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/aghoghoogbotor18/jobscout.git
cd jobscout
Install dependencies:

npm install
Run the development server:

npm run dev
Open your browser at http://localhost:5173.
```

---

## Usage

### NavBar

- Enter a job title in the search bar on the "NavBar"
- usedebounce hook to reduce Api call

### Home Page

- Enter a job title, company, or keyword in the **CTA section input**
- Select a country from the dropdown
- Click **“Find Jobs”** to trigger the search
- Browse job listings, save favorite jobs, and navigate pages using **pagination**

### Saved Jobs Page

- View jobs saved to **localStorage**
- Search and filter saved jobs by **title** or **company**
- Remove jobs using the **Remove** button
- **Toast notifications** display when a job is removed

---

## Challenges & Solutions

### Navbar input search updating on every keystroke
- **Problem:** Search triggered on every input change
- **Solution:** Use debounced hook to reduce API call by making it have a delay of 800ms before searching

### Navbar search affecting Saved Jobs page incorrectly
- **Problem:** Global navbar search filtered saved jobs unintentionally  
- **Solution:** Managed search state separately for `Home` and `SavedJobs` pages. Navbar only updates search for the current page

### Toast notifications not showing
- **Problem:** Toast failed due to incorrect `show` and `toast` state handling  
- **Solution:** Updated click handlers to correctly set `toast` object and `show` state with a `setTimeout` to hide after 3 seconds

### SavedJobs page showing duplicate entries
- **Problem:** Full array and filtered array were rendered simultaneously  
- **Solution:** Conditionally render `filteredJobs` if a search exists, otherwise render all saved jobs

### Hero image not displaying
- **Problem:** `src` pointed to a PNG while the file was WebP in `public/images`  
- **Solution:** Updated `src` to the correct file format and path

### CTA Section input updating on every keystroke
- **Problem:** Search triggered on every input change  
- **Solution:** Used a local state (`localSearch`) and updated global `search` only on button click

### SavedJobsContext infinite loop
- **Problem:** Provider rendered itself instead of `SavedJobsContext.Provider`  
- **Solution:** Corrected provider:

```jsx
<SavedJobsContext.Provider value={{ savedJobs, saveJob, removeJob, isSaved }}>
  {children}
</SavedJobsContext.Provider>
```

## Pagination Scroll Not Working
**Problem:** `window.scrollTo` did not scroll to the jobs section  
**Solution:** Used `useRef` on job container and `scrollIntoView` on page change  

## React Query Provider Placement
**Problem:** `QueryClientProvider` inside `Routes` caused hook errors  
**Solution:** Moved `QueryClientProvider` to `main.jsx`  


## WebP Images Not Loading Correctly
**Problem:** Hero image `src` did not match WebP format  
**Solution:** Ensured `<img>` `src` matches WebP and placed images in `public/images`  

---

## Components

- **Hero.jsx:** Headline and hero image  
- **CTASection.jsx:** Search input, country filter, and Find Jobs button  
- **Popular.jsx:** Popular job categories section  
- **Jobs.jsx:** Job listings with save/remove functionality and pagination  
- **SavedJobs.jsx:** Displays saved jobs and filtered results  
- **Navbar.jsx:** Global navigation with responsive mobile menu and search input  
- **ScrollToTop.jsx:** Scrolls page to top on page change  

---

## Context & State Management

### SavedJobsContext.jsx

- Stores saved jobs in **localStorage**  
- Provides `saveJob`, `removeJob`, and `isSaved` functions  
- Shared across `Jobs` and `SavedJobs` components  

---

## API Integration

### useJobs Hook

- Fetches jobs from a backend API(remotive.com API)  
- Handles **loading** and **error** states  
- Works with **debounced search** to minimize API calls  

---

## Future Improvements

- Add **user authentication** for personal saved jobs  
- Implement **server-side pagination** for large datasets  
- Improve **toast notifications** with multiple action options  
- Country-specific job filtering with API support  
- Add **advanced filters** like salary, job type, and remote options  
- Optimize images further using `<picture>` element with multiple formats

---
