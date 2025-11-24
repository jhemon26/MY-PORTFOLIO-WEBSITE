from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from backend import db, models, crud, schemas


models.Base.metadata.create_all(bind=db.engine)

app = FastAPI()

def get_db():
    database = db.SessionLocal()
    try:
        yield database
    finally:
        database.close()

@app.get("/")
def root():
    return {"message": "Backend is running!"}

@app.get("/projects", response_model=list[schemas.ProjectResponse])
def get_all_projects(database: Session = Depends(get_db)):
    return crud.get_projects(database)

@app.post("/projects", response_model=schemas.ProjectResponse)
def add_project(project: schemas.ProjectCreate, database: Session = Depends(get_db)):
    return crud.create_project(database, project)
