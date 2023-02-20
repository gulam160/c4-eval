import { User } from "./types";

export async function fetchUsers(limit: number): Promise<User[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?limit=${limit}`
  );
  const data = await res.json();
  return data;
}

export const fetchTodos = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/todos`
  );
  const posts = await response.json();
  return posts;
};
