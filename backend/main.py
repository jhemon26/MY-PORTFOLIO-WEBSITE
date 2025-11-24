from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from backend import db, models, crud, schemas

# Create database tables
models.Base.metadata.create_all(bind=db.engine)

app = FastAPI()

# CORS for Netlify Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change "*" to your Netlify domain for higher security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend is running"}

@app.get("/projects", response_model=list[schemas.ProjectResponse])
def get_projects(database: Session = Depends(db.get_db)):
    return crud.get_projects(database)

@app.post("/projects", response_model=schemas.ProjectResponse)
def create_project(project: schemas.ProjectCreate, database: Session = Depends(db.get_db)):
    return crud.create_project(database, project)
