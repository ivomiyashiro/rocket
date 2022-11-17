import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI as string;

export const dbConnection = async () => {

  try {
    await mongoose.connect(DB_URI);
    console.log('DB Online');
    
  } catch (error) {
    console.log(error);
    throw new Error('Database error.');
  }
};
