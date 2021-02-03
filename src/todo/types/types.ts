export type taskType = {
    id: number;
    text: string;
    isDone: boolean;
}

export type InitialStateType = {
    tasks: Array<taskType>;
};