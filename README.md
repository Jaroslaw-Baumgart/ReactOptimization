# 🎯 Falling Triangles Animation

An interactive **React + TypeScript** application that renders
dynamically generated falling triangles.\
This project was created as a **learning exercise** to explore and
practice **React performance optimization** techniques.

------------------------------------------------------------------------

## ✨ Key Features

✅ Dynamic triangle generation with random size, color, rotation, and
speed\
✅ Real-time control panel to adjust animation parameters\
✅ Adjustable spawn rate (from 10 ms to 1000 ms)\
✅ Play / Pause system for full animation control\
✅ Smooth animations with gradient background\
✅ Responsive design that works on all screen sizes\
✅ Full type safety thanks to **TypeScript**

------------------------------------------------------------------------

## 🛠️ Technologies Used

-   **React 18.2** -- component-based UI library\
-   **TypeScript 5.0** -- static type checking\
-   **Vite 4.4** -- fast development bundler\
-   **CSS / Tailwind (optional)** -- styling and responsive layout

------------------------------------------------------------------------

## 🧱 Project Structure

├── node_modules/ 
├── public/
│   └── react.svg     
├── screenshots/
│   └── main.jpg     
├── src/
│   ├── components/  
│   │   ├── ControlPanel.tsx  
│   │   ├── FallingTriangles.tsx 
│   │   ├── styles.css       
│   │   ├── Triangle.tsx   
│   │   └── types.ts      
│   ├── hooks/       
│   │   ├── useTriangleAnimation.ts 
│   │   └── useTriangleGenerator.ts 
│   ├── utils/
│   │   └── triangleUtils.ts   
│   ├── App.css                
│   ├── App.tsx                 
│   ├── main.tsx                  
│   └── vite-env.d.ts            
├── .gitignore               
├── eslint.config.js           
├── index.html                
├── package.json                
├── package-lock.json           
├── README.md                      
├── tsconfig.app.json            
├── tsconfig.json        
├── tsconfig.node.json
└── vite.config.ts


------------------------------------------------------------------------

## 🚀 How to Run Locally

1.  **Clone the repository**

``` bash
git clone https://github.com/Jaroslaw-Baumgart/ReactOptimization
cd falling-triangles
```

2.  **Install dependencies**

``` bash
npm install
```

3.  **Start the development server**

``` bash
npm run dev
```

4.  **Open in your browser**

```
http://localhost:5173
```
    

------------------------------------------------------------------------

## 📸 Screenshots

### 🎬 Demo Preview

![Falling Triangles](screenshots/main.jpg)

------------------------------------------------------------------------

## 🔍 Learning Objectives

This project was built to strengthen React skills:

-   **Custom Hooks Pattern** -- separation of concerns\
-   **Performance Optimization** -- efficient rendering with
    `requestAnimationFrame`\
-   **Memory Management** -- cleanup of event listeners and animation
    frames\
-   **State Management** -- optimized state updates and rendering\
-   **Component Structure** -- modular, reusable components

------------------------------------------------------------------------

## ✅ TODO

-   [ ] Add unit tests for custom hooks\
-   [ ] Add option to change triangle shapes (e.g. squares, circles)\
-   [ ] Export animations as GIF or video\
-   [ ] Dark/Light theme toggle

------------------------------------------------------------------------

## 👨‍💻 Author

Created by **Jarosław Baumgart**

------------------------------------------------------------------------

## 📜 License

Released under the **MIT License**

------------------------------------------------------------------------

## 📬 Contact

-   **GitHub:**
    [Jaroslaw-Baumgart](https://github.com/Jaroslaw-Baumgart)
-   **Email:** <jaroslawbaumgart@gmail.com>
