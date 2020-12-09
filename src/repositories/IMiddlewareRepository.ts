import { Hash } from "../entities/Hash";

export interface IMiddlewareRepository {
    verifyHash(hash: Hash): Promise<Number>;
}