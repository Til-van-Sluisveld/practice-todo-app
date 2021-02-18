import ToDo from "../../store/models/todo";

const newToDo = (title: string, description: string, finished: boolean) =>
  new ToDo({ title, description, finished });

test("creating a new todo item", () => {
  expect(newToDo("first", "first item", false)).toEqual(
    expect.objectContaining({
      title: "first",
      description: "first item",
      finished: false,
      userId: null,
    })
  );
});
