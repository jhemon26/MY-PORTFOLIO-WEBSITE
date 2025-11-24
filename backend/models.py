from sqlalchemy import Column, Integer, String, Text
from backend.db import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    github = Column(String(500), nullable=True)
    live_url = Column(String(500), nullable=True)
    image_url = Column(String(500), nullable=True)
