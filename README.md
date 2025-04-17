
# Book Review Platform

**Book Review** is a full-stack web application that allows users to explore, review, and manage books in an organized and interactive way. Designed with a sleek interface and built using modern technologies, it provides a smooth experience for readers to share opinions and discover new reads.

## Demo Video

Watch the full demo here: [YouTube - Book Review Platform](https://www.youtube.com/watch?v=brM0JnzIRl0)


## Key Features

- **Post & View Book Reviews**  
  Users can post their own reviews and read what others think about different books.

- **Search & Filter Books**  
  Quickly find books by title, author, or category.

- **User Authentication**  
  Secure login and registration using JWT-based authentication.

- **Rating System**  
  Give ratings to books and view average scores from all users.

- **Responsive UI**  
  Clean and mobile-friendly interface with Tailwind CSS and DaisyUI.

- **CRUD Support**  
  Users can create, read, update, and delete their own book reviews.


## Tech Stack

### Frontend
- **React**
- **Tailwind CSS**
- **Axios**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **Bcrypt**

## 📂 Folder Structure (Overview)

```bash
bookReview/
│
├── client/               # React frontend
│   ├── src/
│   └── ...
│
├── server/               # Node.js + Express backend
│   ├── routes/
│   ├── controllers/
│   └── ...
|
└── README.md
```

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/ashwinn-si/bookReview.git
cd bookReview
```

2. **Setup Backend**
```bash
cd server
npm install
npm run dev
```

3. **Setup Frontend**
```bash
cd ../client
npm install
npm run dev
```

4. **Configure `.env` files** in both frontend and backend folders for API endpoints, MongoDB URI.

5. **Create A Admin Using  `POSTMAN`**
```bash
http://localhost:5000/auth/addAdmin

{
    "username" : "admin",
    "password": "admin"
}
```
