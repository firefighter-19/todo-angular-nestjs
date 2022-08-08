export interface CreateCategoryDto {
  title: string;
  text: string[];
}

export interface UpdateCategoryDto {
  categoryId: string;
  title: string;
}

export interface DeleteCategoryDto {
  id: string;
}
