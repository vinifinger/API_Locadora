export interface ICreateRentalRequestDTO {
    id?: string;
    idMovie: string;
    emailUser: string;
    idStatus: number;
    dateStart: string;
    dateEnd: string;
}