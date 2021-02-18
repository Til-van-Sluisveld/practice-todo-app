import ToDo from "../../store/models/todo";
import User from "../../store/models/user";

const newToDo = (title: string, description: string, finished: boolean) =>
  new ToDo({ title, description, finished });

test("creating a new todo item", () => {
  expect(newToDo("first", "first item", false)).toEqual(
    expect.objectContaining({
      title: "first",
      description: "first item",
      finished: false,
    })
  );
});

const newUser = (firstName: string, lastName: string, email: string) =>
  new User({ firstName, lastName, email });

test("creating a new user", () => {
  expect(newUser("James", "McGill", "SlippinJimmy@HHM.com")).toEqual(
    expect.objectContaining({
      firstName: "James",
      lastName: "McGill",
      email: "SlippinJimmy@HHM.com",
    })
  );
});
