import mongoose from 'mongoose';

const dbConnection = async() =>{
    try {
        await  mongoose.connect(process.env.MONGODB_CNN,{
            useCreateIndex:true,
            useFindAndModify:false,
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Data Base online');
    } catch (error) {
        console.log(error);
        throw Error('Failed to connect database.')
    }
};

module.exports={
    dbConnection
};