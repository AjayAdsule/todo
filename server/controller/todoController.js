import dayjs from "dayjs";
import TodoModel from "../model/todoModel.js";
export const createTask = async (req, res) => {
  try {
    const { userId } = req;
    const { title, description, dueDate, category } = req.body;

    const createTask = new TodoModel({
      title,
      description,
      dueDate,
      userId,
      category,
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
    const { id, ...updatedFeild } = req.body;

    const updateTodo = await TodoModel.findOneAndUpdate(
      {
        _id: id,
        userId,
      },
      { ...updatedFeild },
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
    const { category, filterBy } = req.query;

    const filter = { userId };

    if (category) {
      filter.category = category;
    }

    if (filterBy === "today") {
      const today = dayjs().format("DD-MM-YYYY");
      filter.dueDate = today;
    } else if (filterBy === "tomorrow") {
      const date = dayjs().add(1, "day").format("DD-MM-YYYY");
      filter.dueDate = date;
    } else if (filterBy === "next-sevenday") {
      const nextSevenDay = dayjs().add(7, "day").format("DD-MM-YYYY");
      const today = dayjs().format("DD-MM-YYYY");
      filter.dueDate = {
        $gte: today,
        $lte: nextSevenDay,
      };
    }

    const todos = await TodoModel.find({ ...filter });

    if (!todos || todos.length === 0) {
      return res.status(404).json({ message: "No todos found for this user" });
    }
    const filterTodo = todos.reduce((acc, curr) => {
      if (curr.status === "In-progress") {
        acc["Progress"] = acc["Progress"] ? [...acc["Progress"], curr] : [curr];
      } else if (curr.status === "Pending") {
        acc["Pending"] = acc["Pending"] ? [...acc["Pending"], curr] : [curr];
      } else if (curr.status === "Completed") {
        acc["Completed"] = acc["Completed"]
          ? [...acc["Completed"], curr]
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
