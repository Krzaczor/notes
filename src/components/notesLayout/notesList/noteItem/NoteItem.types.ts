export interface Note {
    id: string;
    content: string;
    done: Date | null;
    priority: boolean;
}