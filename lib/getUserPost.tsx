const getUserPost = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${userId}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return undefined;
  return res.json();
};

export default getUserPost;
