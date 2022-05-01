const URL_CLIENT = `http://localhost:5000`;

Feature("Input TODO List");

Scenario("Add a task", ({ I }) => {
  const task = "My task";
  I.amOnPage(URL_CLIENT);
  I.fillField("#input-todo", task);
  I.click("#btn-create-task");
  I.see(task);
});

Scenario("Pass a task to done", ({ I }) => {
  const task = "Hello";
  I.amOnPage(CLIENT_URL);
  I.fillField("#input-todo", task);
  I.click("#btn-create-task");
  I.see(task, "#todo-body");

  I.click("//tr[last()]/td/button");
  I.see(task, "#done-body");
});
