import { IEntity } from "./";

export interface IUser extends IEntity {
    name: string;
    email: string;
}
