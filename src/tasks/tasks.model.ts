export interface Task{
    id: string; 
    title: string;
    description: string;
    status: TaskStatus;
}

export enum TaskStatus {
    OPEN="OPEn",
    IN_PROGESS="IN_PROGRESS",
    DONE="DONE",
}
