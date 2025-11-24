from sqlalchemy.orm import Session
from backend import models, schemas

def get_projects(db: Session):
    return db.query(models.Project).all()

def create_project(db: Session, project: schemas.ProjectCreate):
    db_project = models.Project(
        title=project.title,
        description=project.description,
        github=project.github,
        live_url=project.live_url,
        image_url=project.image_url
    )
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project
