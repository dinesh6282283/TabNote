# **TabNote – Chrome Extension**

A lightweight Chrome extension that lets you **save tabs, store notes, and keep useful links** — all inside a clean and fast popup interface. Perfect for productivity, research, and bookmarking without clutter.

---

## 🔥 **Features**

- ⭐ **Save Current Tab**
  Capture the URL of the active browser tab instantly using the Chrome Tabs API.

- 📝 **Add Custom Notes / Links**
  Type any URL or text into the input box and save it manually.

- 💾 **Persistent Storage**
  Your saved items remain even after closing the browser using `localStorage`.

- 🧹 **Clear All Saves**
  Delete all stored tabs/notes with a single click (with clean UI rendering).

- 📄 **Clickable Links**
  All saved URLs are automatically converted into clickable links that open in a new tab.

---

## 📦 **Tech Stack**

- **JavaScript (ES6+)**
- **Chrome Extensions API**
- **HTML5**
- **CSS3**
- **LocalStorage**
- **Manifest v3**

---

## 🧠 **What I Learned**

This project helped strengthen practical knowledge of:

- DOM manipulation and event-driven UI updates
- Working with browser APIs like `chrome.tabs.query()`
- Managing extension permissions via `manifest.json`
- Building modular UI logic with pure JS (no frameworks)
- JSON serialization (`JSON.stringify`, `JSON.parse`)
- Persistent data handling using `localStorage`
- Rendering dynamic lists and updating the DOM efficiently
- Designing a clean popup UI for better user experience

---

## 🚀 **How to Install (Developer Mode)**

1. Download or clone the repository
2. Open Chrome and go to:

   ```
   chrome://extensions/
   ```

3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked**
5. Select the folder containing your extension files
6. The extension will appear in your Chrome toolbar ✔️

---

## 🗂️ **Project Structure**

```
TabNote/
│── manifest.json
│── index.html
│── index.js
│── style.css
│── icon.png
```

---

## 🧩 **manifest.json**

```json
{
  "manifest_version": 3,
  "version": "1.0",
  "name": "TabNote",
  "action": {
    "default_popup": "index.html",
    "default_icon": "icon.png"
  },
  "permissions": ["tabs"]
}
```

---

## 📸 **UI Preview**

_(You can add screenshots here)_
`![TabNote Screenshot](screenshot.png)`

---

## 🤝 **Contributions**

Pull requests and suggestions are welcome! Feel free to open an issue or fork the project.

---
