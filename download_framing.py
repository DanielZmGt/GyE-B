import os
import requests
import pickle
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

# --- NUCLEAR FIX: DELETE OLD TOKEN AUTOMATICALLY ---
if os.path.exists('token.pickle'):
    print("🗑️ Deleting old permission file to force new login...")
    os.remove('token.pickle')
# ---------------------------------------------------

# Setup - asking for FULL READ access (Note: Google API changes restrict this to app-created data only)
SCOPES = ['https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata']
CREDENTIALS_FILE = 'credentials.json'
DOWNLOAD_FOLDER = 'Framing_Portfolio_2015_2018'

def authenticate():
    creds = None
    # (The token loading logic is removed here because we deleted it above)
            
    # Always log in fresh
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CREDENTIALS_FILE, SCOPES)
            creds = flow.run_local_server(port=0, prompt='consent')
        # Save the NEW token
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)
    return creds

def download_photos():
    creds = authenticate()
    service = build('photoslibrary', 'v1', credentials=creds, static_discovery=False)

    print("🔍 Searching for photos from 2015-2018...")

    search_body = {
        "pageSize": 50,
        "filters": {
            "dateFilter": {
                "ranges": [
                    {
                        "startDate": {"year": 2015, "month": 1, "day": 1},
                        "endDate": {"year": 2018, "month": 12, "day": 31}
                    }
                ]
            }
        }
    }

    if not os.path.exists(DOWNLOAD_FOLDER):
        os.makedirs(DOWNLOAD_FOLDER)

    count = 0
    next_page_token = None
    
    while True:
        if next_page_token:
            search_body['pageToken'] = next_page_token
            
        results = service.mediaItems().search(body=search_body).execute()
        items = results.get('mediaItems', [])
        
        if not items and count == 0:
            print("No photos found in that date range.")
            break

        for item in items:
            if item['mimeType'].startswith('image'):
                filename = item['filename']
                download_url = item['baseUrl'] + "=d"
                
                print(f"Downloading: {filename}")
                response = requests.get(download_url)
                
                with open(os.path.join(DOWNLOAD_FOLDER, filename), 'wb') as f:
                    f.write(response.content)
                count += 1
                
                if count >= 50: 
                    print("\n✅ Downloaded 50 photos. Stopping for safety.")
                    return

        next_page_token = results.get('nextPageToken')
        if not next_page_token:
            break

    print(f"\n✨ Done! Downloaded {count} photos to '{DOWNLOAD_FOLDER}'")

if __name__ == '__main__':
    download_photos()