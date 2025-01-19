import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import Config from "../../Config";
import bcrypt from 'bcrypt'

const userSchema = new Schema<TUser>({
    id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    needsPasswordChnage: {
        type: Boolean,
        default: true,

    },

    role: {
        type: String,
        enum: ['admin', 'faculty', 'student'],

    },
    ststus: {
        type: String,
        enum: ['in-progress', 'blocked'],
        default: 'in-progress'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    });




userSchema.pre('save', async function (next) {
    // console.log(this, 'pree hook: we save the data');

    // hasing password and save into DB:
    const user = this; //this= currently processing document ke refer kore.
    user.password = await bcrypt.hash(user.password, Number(Config.bcrypt_salt_rounds));
    next();
});


// post save middleware/hooks:
userSchema.post('save', function (doc, next) {
    doc.password = ''
    next();
})

// set ' string after save password
export const User = model<TUser>('User', userSchema)