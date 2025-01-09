export interface ITask {
  id: string;
  tittle: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
}

export interface IUser {
  id: string;
  name: string;
}
