import { Image } from './image';

export interface PixabayResponse {
    total: number;
    totalHits: number;
    hits: Image[];
}
  