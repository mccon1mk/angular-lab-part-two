export const tasks = [
    {
        task: "Do Laundry",
        completed: false,
    },
    {
        task: "Clean my room",
        completed: false,
    },
    {
        task: "Study for Assessment four",
        completed: false,
    },
    {
        task: "Do performance review",
        completed: true,
    },
    {
        task: "Pay credit card bill",
        completed: true,
    }
]

export class taskModel {
    task: string;
    complete: boolean;
    taskClass: string;
    isVisible: boolean;
}