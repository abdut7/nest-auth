import {Document} from 'mongoose'
 
export interface User extends Document{
    toObject: any;
    username:string,
    readonly password:string,
    created: Date;
}