import { Project } from "../../domain/entities/Project.js";
import { User } from "../../domain/entities/User.js";
import { UserInput } from "../../infrastructure/GraphQL/TypeDefs/inputs/UserInputs.js";

export interface UserServiceInterface {
    getAllUsers(): Promise<User[]>;
    getUserByID(id: number): Promise<User | null>;
    createUser(user: User): Promise<User>;
    updateUser(user: User): Promise<User | null>;
    deleteUser(id: number): Promise<void>;
    getUsersProjects(id: number): Promise<Project[]>;
}