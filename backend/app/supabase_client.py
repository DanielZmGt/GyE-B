import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

url: str = os.getenv("SUPABASE_URL", "")
key: str = os.getenv("SUPABASE_ANON_KEY", "")

if not url or not key:
    # We'll log a warning or just let it fail at runtime if the app is misconfigured
    pass

supabase: Client = create_client(url, key)
