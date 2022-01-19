import { EventEmitter } from "@angular/core";
import { UserModel } from "../services/auth.service";

export class Auth {
    static userEmitter = new EventEmitter<UserModel>();
}