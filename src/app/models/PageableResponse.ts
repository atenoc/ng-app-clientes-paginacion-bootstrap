export interface PageableResponse<T> {
    content: T;
    pageable: any;
    totalPages: number;
    totalElements: number;
    last: boolean;
  }