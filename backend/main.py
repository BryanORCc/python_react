from typing import List
from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI()

class Person(BaseModel):
    id: int
    name: str
    age: int

DB: List[Person] = [
    Person(id=1, name="Luke Skywallker", age=30),
    Person(id=2, name="Jack Sparrow", age=38),
]

@app.get("/api")
def read_root():
    return DB
