# 📧 Email Campaign Scheduler

A full-stack email campaign scheduler built using **Node.js**, **Express**, **MongoDB**, and **Express-Handlebars**.  
Users can schedule email campaigns to be sent at a future time to multiple recipients, with individual email status tracking.

---

## 🚀 Features

- ✅ Create and schedule email campaigns
- 🕐 Emails are sent automatically at the scheduled time
- 📨 Track delivery status per recipient (`pending`, `sent`, `failed`)
- 📋 View a list of all campaigns and their current statuses
- 🌐 Simple frontend using Express-Handlebars for form and campaign listing

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Nodemailer (Gmail SMTP)
- Express-Handlebars (template engine)

---

## ⚙️ Setup Instructions
### 1. Clone the repository
git clone https://github.com/Ayush78588/Email-Campaign-Scheduler.git
cd email-campaign-scheduler

### 2. Install dependencies
npm install

### 3. Create a .env file (you can copy the sample)
cp .env.sample .env

### 4. Open the .env file in editor and fill:
 PORT=5000
 EMAIL_ID=youremail@gmail.com
 PASSWORD=your-app-password
 MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db

 5. Start the application
node server.js

### 6. Visit the app
 Open http://localhost:5000 in your browser


