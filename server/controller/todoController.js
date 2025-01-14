import TodoModel from "../model/todoModel.js";

export const createTask = async (req, res) => {
  try {
    const { userId } = req;
    const { title, description, dueDate } = req.body;

    const createTask = new TodoModel({
      title,
      description,
      dueDate,
      userId,
    });

    await createTask.save();
    if (!createTask) {
      return res
        .status(422)
        .json({ success: false, message: "unable to create todo" });
    }

    return res.status(201).json({ success: true, task: createTask });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Unable to procced request" });
  }
};

export const updateTodoStatus = async (req, res) => {
  try {
    const { userId } = req;
    const { status, id } = req.body;

    const updateTodo = await TodoModel.findOneAndUpdate(
      {
        _id: id,
        userId,
      },
      { status },
      { new: true }
    );

    if (!updateTodo) {
      return res
        .status(401)
        .json({ success: false, message: "Unable to update task" });
    }

    return res.status(201).json({
      success: true,
      message: "Task updated successfully",
      updateTodo,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

export const getTodo = async (req, res) => {
  try {
    const { userId } = req;
    console.log({ userId });
    const todos = await TodoModel.find({ userId });

    if (!todos || todos.length === 0) {
      return res.status(404).json({ message: "No todos found for this user" });
    }
    const filterTodo = todos.reduce((acc, curr) => {
      if (curr.status === "In-progress") {
        acc["progress"] = acc["progress"] ? [...acc["progress"], curr] : [curr];
      } else if (curr.status === "Pending") {
        acc["pending"] = acc["pending"] ? [...acc["pending"], curr] : [curr];
      } else if (curr.status === "Completed") {
        acc["completed"] = acc["completed"]
          ? [...acc["completed"], curr]
          : [curr];
      }
      return acc;
    }, {});

    res
      .status(200)
      .json({ success: true, message: "Success", todo: { ...filterTodo } });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;

    const todo = await TodoModel.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(201).json({ success: true, message: "Todo deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};
