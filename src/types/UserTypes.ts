import {IPage} from "./MemorialPage";

export interface IMongoUserData {
    id: string;
    email: string;
    fullName: string;
    isPremium: boolean;
    memorialPages: Array<IPage>;
}
