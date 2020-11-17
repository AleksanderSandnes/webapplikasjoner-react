import mongoose from 'mongoose';

const {Schema} = mongoose;

const ValgSkjema = new Schema(
    {
        sporsmal: {
            type: String,
            required: true,
            trim: true,
            min: ['15', 'Spørsmålet må bestå av mer enn 15 tegn'],
            max: ['250', 'Spørsmålet må ha mindre enn 250 tegn'],
        },
        svar: [
            {
                answer: String,
                votes: {
                    type: Number,
                    default: 0
                }
            }
        ]
    },
    {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}}
);

const Valg = mongoose.model('Valg', ValgSkjema);

export default Valg;