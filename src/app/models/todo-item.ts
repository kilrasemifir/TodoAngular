export interface TodoItem {
    titre: string;
    description: string;
    date: Date;
}

export class BasicTodoItem implements TodoItem {
    constructor(
        public titre: string = "",
        public description: string ="",
        public date: Date = new Date(Date.now())){};
}