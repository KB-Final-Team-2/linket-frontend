import { Event } from "./Event";
import { User } from "./User";

export interface Review {
    reviewId: string;
    reviewContent: string;
    rating: number;
    regDate: string;
    user: User;
    event: Event;
};