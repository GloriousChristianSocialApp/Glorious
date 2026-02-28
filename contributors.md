## 📂 Project Structure

The project is divided into two main folders:

* **`/frontend`**: The user interface built with Flutter. Its branch is frontend 
* **`/server`**: The backend API built with Python Flask. Its branch is server

---

## 📱 Frontend (Flutter)

The frontend is developed using the **Flutter** framework, allowing for a beautiful, high-performance UI.

### Current Status: Progressive Web App (PWA)
Currently, Glorious is distributed as a **PWA**. This allows users to:
* **Mobile:** Install the app directly from the browser using "Add to Home Screen."
* **Desktop:** Use the app as a standalone windowed experience via Chrome or Edge.

### Future Roadmap
While we are currently leveraging PWA technology for rapid deployment, we are moving toward:
* **Standalone Native Apps:** Future releases will include native binaries for iOS, Android, macOS, and Windows and hopefully linux.

### Quick Start
1.  Navigate to the directory: ```bash cd frontend ```
2.  Get dependencies: ``` bash flutter pub get```
3.  Run the app: ```bash flutter run -d chrome ```

---

## ⚙️ Server (Python Flask)

The backend is a robust RESTful API that handles data persistence, user authentication, and core business logic.

### Technical Stack
* **Language:** Python 3.12.8
* **Framework:** Flask
* **Environment:** Virtualenv (recommended)

### Quick Start
1.  Navigate to the directory: `cd server`
2.  Create a virtual environment:
    ```bash
    python -m venv .venv
    .venv/Scripts/activate  # Windows: venv\Scripts\activate
    ```
3.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4.  Launch the server:
    ```bash
    python app.py
    ```

---