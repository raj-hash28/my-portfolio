import os
import smtplib
from email.mime.text import MIMEText
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

# Load the secret passwords from the .env file
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    message: str


# --- THE NEW EMAIL LOGIC ---
def send_email(name, user_email, message):
    my_email = os.getenv("EMAIL_ADDRESS")
    my_password = os.getenv("EMAIL_PASSWORD")

    # Create the email content
    msg = MIMEText(f"Name: {name}\nEmail: {user_email}\n\nMessage:\n{message}")
    msg['Subject'] = f"New Portfolio Message from {name}"
    msg['From'] = my_email
    msg['To'] = my_email # You are sending the email to yourself!

    try:
        # Connect to Gmail's server and send
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(my_email, my_password)
        server.send_message(msg)
        server.quit()
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

# --- ROUTES ---
@app.post("/api/contact")
def receive_contact(form_data: ContactForm):
    print(f"Received message from: {form_data.name}")
    
    # Try to send the email
    success = send_email(form_data.name, form_data.email, form_data.message)
    
    if success:
        return {"message": "Success! Email sent."}
    else:
        return {"message": "Error sending email."}

