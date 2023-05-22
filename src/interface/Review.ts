export interface Review {
    reviewId: number;
    ticketId: number;
    eventId: number;
    conpanyId: number;
    rateFacilChair: number;
    rateFacilRest: number;
    rateStaffIn: number;
    rateStaffTicket: number;
    rateEventContent: number;
    rateEventGo: number;
    reviewEtc: string;
    regDate: string;
};

export const INIT_REVIEW : Review = {
    reviewId: -1,
    ticketId: -1,
    eventId: -1,
    conpanyId: -1,
    rateFacilChair: -1,
    rateFacilRest: -1,
    rateStaffIn: -1,
    rateStaffTicket: -1,
    rateEventContent: -1,
    rateEventGo: -1,
    reviewEtc: "",
    regDate: ""
}

export const DUMMY_REVIEW : Review = {
    reviewId: 1,
    ticketId: 1,
    eventId: 1,
    conpanyId: 1,
    rateFacilChair: 5,
    rateFacilRest: 5,
    rateStaffIn: 5,
    rateStaffTicket: 5,
    rateEventContent: 5,
    rateEventGo: 5,
    reviewEtc: "밥이 맛있으면 좋겠어요",
    regDate: "2023-03-01"
}