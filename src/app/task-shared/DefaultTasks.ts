import { TaskInterface } from "./TaskInterface"

export let DefaultTasks : TaskInterface[] = [
    {taskName: "Text translations",  personName: "Mario Rossi", startDate: "12/01/2022", dueDate: "31/07/2022", priority: "LOW", involved: "1", state: "Ended", progress: "100%"},
    {taskName: "Bugfix database", personName: "Joe Black", startDate: "24/01/2022",dueDate: "31/01/2022", priority: "HIGH", involved: "3", state: "In Progress", progress: "60%"},
    {taskName: "New UI proposal", personName: "Antonio Bianchi", startDate: "12/01/2022",dueDate: "31/12/2022", priority: "LOW", involved: "1", state: "Blocked", progress: "0%"},
    {taskName: "Bugfix crash at startup", personName: "Joe Black", startDate: "01/02/2022",dueDate: "15/02/2022", priority: "HIGH", involved: "1", state: "In Progress", progress: "40%"},
    {taskName: "Bugfix French translation", personName: "Joe Black", startDate: "12/01/2022",dueDate: "31/12/2022", priority: "LOW", involved: "2", state: "Blocked", progress: "20%"},
    {taskName: "Customer compliant",  personName: "Mario Rossi", startDate: "12/01/2022", dueDate: "31/01/2022", priority: "HIGH", involved: "3", state: "Ended", progress: "100%"},
    {taskName: "Compatibility issue", personName: "Antonio Bianchi", startDate: "24/01/2022",dueDate: "31/01/2022", priority: "MEDIUM", involved: "3", state: "In Progress", progress: "60%"},
    {taskName: "Customer change request", personName: "Antonio Bianchi", startDate: "01/04/2022",dueDate: "15/08/2022", priority: "LOW", involved: "1", state: "In Progress", progress: "0%"},
    {taskName: "Customer meeting", personName: "Maria Brambilla", startDate: "01/02/2022",dueDate: "15/02/2022", priority: "HIGH", involved: "1", state: "Ended", progress: "100%"},
    {taskName: "Product price update", personName: "Maria Brambilla", startDate: "12/01/2022",dueDate: "31/12/2022", priority: "LOW", involved: "2", state: "Blocked", progress: "20%"},
]
