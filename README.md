# Anilist Clone

This application was built using React and an express server and is a recreation of the popular anime searching website Anilist. Users can browse anime and manga, make accounts, store their favorite anime along with relevant information such as its score, status, and when you started and finished. Users can also updated these fields or delete them and post status messages on their profile page.

Website URL: https://aniclone.netlify.app/

## Tech Stack

**Client:** React, Redux Toolkit, RTK Query, React Router, Chakra UI, React Hook Form

**Server:** Node, Express

## Screenshots

![App Screenshot](https://res.cloudinary.com/di4rxo1gs/image/upload/v1639679504/anilist-home_k4crbu.png)

![App Screenshot](https://res.cloudinary.com/di4rxo1gs/image/upload/v1639686825/anilist-profile_pnor8n.png)

## Issues

Data fetching is limited to 2 requests per second so getting rate limited is common when filtering and searching

## Installation

1. Run the server found [here](https://github.com/Harimz/anilist-clone-server)

2. Create a .env

   Should look like this

   REACT_APP_BACKEND_API=http://localhost:5000

3. Install dependancies

4. npm start

5. App should be running in http://localhost:3000
