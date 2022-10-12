import mongoose from 'mongoose';

const Articles = mongoose.model('Articles', {
  title: String,
  publishedAt: { type: Date, default: Date.now }
})

export default Articles
