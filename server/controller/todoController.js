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
