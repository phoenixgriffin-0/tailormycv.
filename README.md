# TailorMyCV 📄✨

A full-stack, AI-powered platform designed to eliminate the modern job application grind. TailorMyCV takes a base PDF resume and a target job description, extracting the text and automatically rewriting the CV to highlight the most relevant skills and experience for Applicant Tracking Systems (ATS).

## 🚀 The Problem It Solves
Job seekers spend hours manually retailoring their resumes for every single application. TailorMyCV reduces this process to a seamless drag-and-drop workflow, ensuring high-quality, targeted applications in seconds.
helps in aki g everything less stressful and time consuming


## 💻 Tech Stack
* **Frontend:** React, TypeScript, Vite, Tailwind CSS
* **Backend:** Python, FastAPI
* **Document Processing:** PDFPlumber (Extraction)
* **AI Engine:** Generative AI (LLM) integration *(In Progress)*
* **Document Generation:** PDF rendering *(In Progress)*

## ⚙️ How to Run Locally

### 1. Start the Backend
```bash
cd backend
# Activate the virtual environment
.\venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux

# Install dependencies
pip install fastapi uvicorn python-multipart pdfplumber python-dotenv

# Run the API
uvicorn main:app --reload
