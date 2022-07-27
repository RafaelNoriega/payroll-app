import {RequestHandler} from 'express';
import User from '../classes/users';
import { NewUserRequest} from '../classes/requests/new_user_request';


export const userRegister: RequestHandler = (req, res, next) => {
   try {
        const body: NewUserRequest = req.body;
        const {firstName, lastName, email, password} = body;
        const newUser = new User(firstName, lastName, email, password);

        res.send(newUser);
   } catch (error) {
        console.log(error);
   }

};
