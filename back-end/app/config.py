from pydantic import BaseSettings
import os
from main import load_dotenv 

load_dotenv()

class Settings(BaseSettings):
    DATABASE_URL = os.getenv("DATABASE_URL")  # Usa una URL de conexión a PostgreSQL para producción
    SECRET_KEY = os.getenv("SECRET_KEY")  # Usa una clave más segura en producción
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

settings = Settings()
