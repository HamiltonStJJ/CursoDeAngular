export interface IDog {
  breed: string;
  sub_breed?: string;
  image_url: string;
  full_breed_name: string;
}

export interface DogBreedsResponse {
  message: { [breed: string]: string[] };
  status: string;
}

export interface DogImageResponse {
  message: string;
  status: string;
}