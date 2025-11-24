from sqlalchemy import Column, Integer, String
from backend import db, models, crud, schemas


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    github = Column(String)
    live_url = Column(String)
    image_url = Column(String)
