
# 📊 **DatadashAI**

DatadashAI is a data visualization and analysis web application built using **React** and **Redux** for state management. It offers users a seamless way to analyze and visualize their data. The UI is styled using **Tailwind CSS**, providing a modern and responsive design.
it is a submission to growthgears challenge 2025

---

## 🚀 **Features**
- Responsive, elegant UI with **Tailwind CSS**
- State management using **Redux Toolkit**
- Data fetching using **Axios**
- Routing using **React Router**
- Interactive charts using **Recharts**
- Clean component-based architecture

---

## 🛠️ **Tech Stack**
- **Frontend:** React 19, React Router, Tailwind CSS
- **State Management:** Redux Toolkit, React-Redux
- **Data Visualization:** Recharts
- **HTTP Requests:** Axios
- **Build Tool:** Vite

---

## ⚙️ **Getting Started**

Follow these steps to set up the project locally.

### **Prerequisites**
Ensure you have the following installed:
- Node.js (v18+)
- npm or yarn
- Git

---

### **Installation**

1. **Clone the repository**  
```bash
git clone https://github.com/your-repo/datadashai.git
cd datadashai
```

2. **Install dependencies**  
```bash
npm install
```

3. **Configure Tailwind CSS**  
Ensure the Tailwind CSS config is set up correctly by checking the `tailwind.config.js` file.

4. **Run the application**  
```bash
npm run dev
```
- The app will be available at `http://localhost:5173`

---

## 🗂️ **Project Structure**
```bash
DatadashAI
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── QueryInput.jsx
│   │   ├── QueryResult.jsx
│   │   └── SearchHistory.jsx
│   ├── store
│   │   ├── store.js
│   │   ├── slices
│   │   │   └── querySlice.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 📦 **Scripts**
- `npm run dev` — Start the development server
- `npm run build` — Build the app for production
- `npm run preview` — Preview the built app
- `npm run lint` — Lint the code using ESLint

---

## 🔎 **Environment Variables**
Create a `.env` file in the root directory and add the required environment variables:
```env
VITE_API_URL=http://localhost:3000
```

---

## 🧑‍💻 **Contributing**
Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📄 **License**
This project is licensed under the MIT License.

---

Feel free to customize this further if you'd like! 😊