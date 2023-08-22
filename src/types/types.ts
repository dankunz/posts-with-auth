export type Post = {
  id: string;
  authorId: string;
  content: string;
  createdAt: Date;
  published: boolean;
  title: string;
  updatedAt: Date;
};

export type RegisterUser = {
  email: string;
  lastname: string;
  firstname: string;
  password: string;
  confirmPassword?: string;
};

export type PostFilters = {
  query: string;
  userId: string;
};
