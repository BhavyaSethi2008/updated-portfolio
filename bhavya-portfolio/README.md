# Bhavya Sethi — Personal Portfolio 🚀

> Modern personal portfolio website for Bhavya Sethi, 1st Year B.Tech Electronics & Communication Engineering (ECE) student at JECRC University, Jaipur.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## 🌟 Highlights

- **⚡ Blazing Fast**: Built with React 19 and Vite 8 for instant load times and HMR.
- **🎨 Modern Dark UI**: Sleek glassmorphism aesthetic, subtle ambient glow, and high-contrast typography using *Plus Jakarta Sans*.
- **📱 Fully Responsive**: Mobile-first design with smooth hamburger drawer navigation and seamless section scrolling.
- **🛠️ Extensible**: All profile details, projects, skills, and certifications are centralized in a single configuration file (`src/data/portfolioData.js`).
- **🚀 1-Click Deploy**: Structured to deploy directly onto Vercel with zero configuration changes.

---

## 📂 Project Structure

```text
bhavya-portfolio/
├── public/                 # Static assets & favicon
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx      # Sticky blur header with mobile hamburger menu
│   │   ├── Hero.jsx        # Hero banner with call-to-actions
│   │   ├── About.jsx       # Student story and engineering pillars
│   │   ├── Education.jsx   # JECRC University coursework breakdown
│   │   ├── Skills.jsx      # Categorized skill cards (Programming, AI, ECE)
│   │   ├── Projects.jsx    # Project grid with starter placeholders
│   │   ├── Achievements.jsx# Milestones & extensible certification cards
│   │   ├── Contact.jsx     # Direct email with 1-click copy & social links
│   │   ├── Footer.jsx      # Copyright & quick scroll-to-top
│   │   └── Icons.jsx       # Scalable SVG brand icons
│   ├── data/
│   │   └── portfolioData.js# 💡 Centralized content data (Edit everything here!)
│   ├── App.jsx             # Main single-page application layout
│   ├── index.css           # Tailwind CSS imports & global styles
│   └── main.jsx            # React root mount
├── index.html              # HTML shell with meta tags & Google Fonts
├── package.json            # Project dependencies & scripts
├── vite.config.js          # Vite + Tailwind build configuration
└── README.md
```

---

## 💻 Local Setup & Development

### 1. Clone or download the repository
```bash
git clone https://github.com/BhavyaSethi2008/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

---

## ✏️ How to Customize Your Details

You don't need to dig into complex JSX code to update your info! Simply edit:

👉 **`src/data/portfolioData.js`**

- **Personal Info**: Update name, bio, social links, or location.
- **Projects**: Replace the placeholder cards with your real projects, live demo links, and GitHub repositories.
- **Achievements**: Add certifications, hackathons, and awards as you earn them.
- **Skills**: Add new technologies or adjust your proficiency level.

---

## 🚀 How to Deploy to Vercel (Free)

1. Push this project to your GitHub account (`https://github.com/BhavyaSethi2008`).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New..."** → **"Project"**.
4. Import your portfolio repository.
5. Keep default settings:
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**. Your portfolio will be live worldwide with a free `.vercel.app` URL and automatic HTTPS!

---

## 👤 Author

**Bhavya Sethi**
- 🎓 1st Year B.Tech ECE, JECRC University, Jaipur
- 💼 LinkedIn: [bhavya-sethi-967221430](https://www.linkedin.com/in/bhavya-sethi-967221430)
- 🐙 GitHub: [@BhavyaSethi2008](https://github.com/BhavyaSethi2008)
- ✉️ Email: bhavya2008sethi@gmail.com
