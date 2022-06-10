import mongoose from 'mongoose';

const dbConnection = async() =>{
    try {
        await  mongoose.connect(process.env.MONGODB_CNN || '')
        console.log('Data Base online'.bgGreen);
    } catch (error) {
        console.log(error);
        throw Error('Failed to connect database.'.red)
    }
};

export{
    dbConnection
};