from pydantic import BaseModel

class ProjectBase(BaseModel):
    title: str
    description: str
    github: str | None = None
    live_url: str | None = None
    image_url: str | None = None

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int

    class Config:
        orm_mode = True
