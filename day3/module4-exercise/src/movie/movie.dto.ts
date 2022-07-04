export class MovieDto {
  title: string;
  director?: {
    id?: number;
    firstName?: string;
    lastName?: string;
  };
}
