type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type UserPromise<T> = () => Promise<T>;

type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

type SearchResult = {
  query?: {
    pages?: Result[];
  };
};

type BlogPost = {
  id: string;
  title: string;
  date: string;
};

type Todo = {
  name: string;
  description: string;
  completed?: boolean;
  id: string;
  title?: string
};

export type { User, Post, UserPromise, SearchResult, Result, BlogPost, Todo };
