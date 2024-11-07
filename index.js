const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    username: "octocat",
    name: "The Octocat",
    repoCount: 8,
    location: "San Francisco",
  },
  {
    id: 2,
    username: "torvalds",
    name: "Linus Torvalds",
    repoCount: 25,
    location: "Portland",
  },
  {
    id: 3,
    username: "gaearon",
    name: "Dan Abramov",
    repoCount: 50,
    location: "London",
  },
  {
    id: 4,
    username: "addyosmani",
    name: "Addy Osmani",
    repoCount: 42,
    location: "Mountain View",
  },
  {
    id: 5,
    username: "tj",
    name: "TJ Holowaychuk",
    repoCount: 150,
    location: "Victoria",
  },
];

app.get("/users", (req, res) => {
  return res.json({ users: users });
});

function findUserById(id) {
  let user = users.find((obj) => obj.id === id);
  return user;
}

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const response = findUserById(id);
  if (response) {
    res.json({ user: response });
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

app.listen(3000, () => console.log("server is listening on Port: 3000"));
