export interface ListProps {
    title: string;
    content?: string;
    func?: Function;
};

export interface FuncListProps {
    title: string,
    func: Function
};

export interface ChatProps {
    email: string;
    message: string;
};

export interface ButtonProps {
    title: string;
    type: string | undefined;
    func: Function;
    loading?: boolean;
}
