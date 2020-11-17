import mongoose from 'mongoose';

const databaseTilkobling = async () => {
    let dbConnect;
    try {
        dbConnect = await mongoose.connect(process.env.DATABASE_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
    } catch (error) {
        console.log(error.message);
    }

    console.log('Koblet til mongodb ${dbConnect.conection.host}. Melding fra server/konfigurasjon/databasen.js')
};

export default databaseTilkobling;