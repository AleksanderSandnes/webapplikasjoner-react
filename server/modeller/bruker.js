import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';

const { Schema } = mongoose;

const brukerSkjema = new Schema (
    {
        email: {
            type: String,
            required: [true, 'Du må skrive inn epost'],
            unique: true,
            validate: [validator.isEmail, 'Eposten er ugyldig'],
        },
        passord: {
            type: String,
            required: [true, 'Du må skrive inn passord'],
            minlength: [6, 'Passordet må bestå av minst 6 verdier'],
            select: false,
        },
        rolle: {
            type: String,
            enum: {
                values: ['bruker', 'administrator'],
                message: 'Rolle er ikke utfylt',
            },
            default: 'bruker',
        },
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }}
);

brukerSkjema.pre('lagre', async function (next) {
    this.passord = await argon2.hash(this.passord);
    next();
});

brukerSkjema.virtual('valget', {
    ref: 'Valg',
    localField: '_id',
    foreignField: 'bruker',
    justOne: false,
});

const Bruker = mongoose.model('Bruker', brukerSkjema);

export default Bruker;