interface IUserService<T> {
    createUser(user: T): T;
    getUser(id: number): T | undefined;
    updateUser(user: T): void;
    deleteUser(id: number): void;
}