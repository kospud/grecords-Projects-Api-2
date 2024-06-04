import { User } from "../../domain/entities/User.js";

export interface UserServiceInterface {
    getAllUsers(): Promise<User[]>;
    getUserByID(id: number): Promise<User | null>;
    createUser(user: User): Promise<User>;
    updateUser(user: User): Promise<User>;
    deleteUser(id: number): Promise<void>;
}