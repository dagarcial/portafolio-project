[![CI Status](https://github.com/dagarcial/portafolio-project/actions/workflows/deploy.yml/badge.svg)](https://github.com/dagarcial/portafolio-project/actions/workflows/deploy.yml)

# Portfolio Project

Welcome to my portfolio! This project showcases my work and experience. 
It will include personal projects.

## 🚀 Technologies Used

* **Next.js** (App Router)
* **React**
* **styled-components**
* **JavaScript**
* **GitHub** for version control and deployment (via Github actions)

## 📁 Project Structure

```
/portfolio-project
│
├── .gitignore
├── jsconfig.json           # Module path aliases configuration
├── next.config.js          # Next.js configuration
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
│
├── public/                 # Public assets and static files
│   └── favicon.ico         # Site icon
│
├── src/                    # Main application code
│   ├── components/         # All reusable components
│   │   ├── common/
│   │   │   ├── BackgroundShapes.js
│   │   │   ├── BottomBar.js
│   │   │   ├── LogoIcon.js
│   │   │   ├── Preloader.js
│   │   │   └── topBar/
│   │   │       ├── GitHubButton.js
│   │   │       ├── NavigationButton.js
│   │   │       ├── NavigationMenuCollapsible.js
│   │   │       └── NavigationMenuHorizontal.js
│   │   └── TopBar.js
│   │
│   │   └── tabs/
│   │       ├── home/
│   │       │   ├── Footer.js
│   │       │   ├── MainSection.js
│   │       │   ├── ScrambleFunctions.js
│   │       │   └── ToolsTech.js
│   │       ├── Home.js
│   │       └── project/
│   │           ├── ProjectBox.js
│   │           └── UnderConstruction.js
│   │       └── Projects.js
│   │       └── TabsContent.js
│
│   ├── pages/              # Next.js pages (entry points)
│   │   ├── index.js
│   │   ├── _app.js
│   │   └── _document.js
│
│   └── styles/             # Styling with styled-components
│       ├── GlobalStyle.js
│       └── themes.js
```

## 🧩 Features

* **Modular Component Design**: Components are split logically for scalability and reuse.
* **Responsive UI**: Designed for both desktop and mobile experiences.
* **Theming and Styling**: Uses `styled-components` for dynamic theming.
* **Smooth Navigation**: Top bar includes responsive navigation with both horizontal and collapsible menus.
* **Project Tabs**: Dedicated sections for Home, Projects, and Under Construction content.

## 📜 License

All rights reserved. This project is shared for personal and portfolio purposes only.  
No reuse, distribution, or modification is allowed without explicit permission.

---

Thanks for visiting my portfolio!
