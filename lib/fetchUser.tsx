const fetchUser = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => res);
};

export { fetchUser };
