import mongoose from 'mongoose';

// Database Connection
mongoose
  .connect(
    'mongodb://localhost:27017/spaceflight-news-challenge',
  )
  .then(() => {
    console.log('Connected to Database!')
  })
  .catch((err) => console.log(err))
