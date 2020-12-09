export interface ICreateRentalRequestDTO {
    id?: string;
    idMovie: string;
    email: string;
    idStatus: number;
    dateStart: string;
    dateEnd: string;
}