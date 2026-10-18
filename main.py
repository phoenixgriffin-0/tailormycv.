from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="TailorMyCV API")

# This allows your React app (port 5173) to send data here
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "TailorMyCV Backend is running!"}

@app.post("/api/tailor")
async def tailor_cv(job_description: str = Form(...), file: UploadFile = File(...)):
    return {
        "message": "File and description received successfully!",
        "filename": file.filename, 
        "job_description_length": len(job_description)
    }