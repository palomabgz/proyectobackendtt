import { randomUUID } from "crypto";

export class User {
    constructor(user) {
        this.id = randomUUID();
        this.user = user;
    }
}