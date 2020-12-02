import { uuid } from "uuidv4";

export class Movie {
    public readonly id: String;

    public name: string;
    public image: string;
    public description: string;
    public category: string;
    public producer: string;
    public duration: string;

    constructor(props: Omit<Movie, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}