from sqlalchemy import Column, Integer, String
from db import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    github = Column(String)
    live_url = Column(String)
    image_url = Column(String)
