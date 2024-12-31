import { JwtPayload } from "./jwt-payload";
import { User } from "../entities/user.entity";

export interface RegisterResponse{
    user: User;
    token: string;
    //Just a comment
}