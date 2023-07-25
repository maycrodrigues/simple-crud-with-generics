import { IEntity } from "./";

interface IRepository<T extends IEntity> {
    create(entity: T): T;
    read(id: number): T | undefined;
    update(entity: T): void;
    delete(id: number): void;
    exists(id: number): boolean;
}