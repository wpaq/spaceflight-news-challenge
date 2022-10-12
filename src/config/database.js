import mongoose from 'mongoose';

const mongoURI = 'mongodb://root:admin88@localhost/spaceflight-news-challenge?authSource=admin';

mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Database!')
    })
  .catch((err) => console.log(err));
