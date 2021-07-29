export interface TodoItem {
    id?: number;
    titre: string;
    description: string;
    date: Date;
    tags:TodoTag[];
}

export interface TodoTag {
    nom: string;
    color: string;
}
export class BasicTodoItem implements TodoItem {
    constructor(
        public titre: string = "",
        public description: string ="",
        public date: Date = new Date(Date.now()),
        public tags:TodoTag[] = []){};
}