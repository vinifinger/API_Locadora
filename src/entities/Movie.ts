import { uuid } from "uuidv4";

export class Movie {
    public readonly id?: String;

    public title?: string;
    public director?: string;    
    public image?: string;
    public description?: string;
    public idStatus?: number;
    public category?: string;
    public producer?: string;
    public duration?: string;

    constructor(props: Omit<Movie, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}