export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface ICategory {
  id: string;
  title: string;
  todo: ITodo[];
}

export interface IProjects {
  projects: ICategory[];
}
