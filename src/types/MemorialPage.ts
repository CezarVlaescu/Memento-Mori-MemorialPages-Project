export type TRoles = "Admin" | "Colaborator";

export type TPhotoType = "Cartoon" | "Real Image";

export type TTags = "Soulmate" | "Life Lover";

export type TStatus = "Published" | "Editing" | "Deleted";

export interface IPage {
   id: string;
   owner_id: string;
   name: string | null;
   birth_date: Date | null;
   dead_date: Date | null;
   date_format: string | null;
   synopsis: IShortDescriptionsTitleBody | null;
   memoir: IShortDescriptionsTitleBody | null;
   feature_image: IImage;
   donation: IDonation | null;
   story: IShortDescriptionsTitleBody | null;
   galery: IGalery[];
   galery_info: IGaleryInfo | null;
   highlights: IHighlight[];
   events: IEvent[];
   video: IVideoMusic | null;
   theme: ITheme | null;
   feature: IFeature | null; 
   status: TStatus;
   privacy: boolean | null;
   highlight_status: boolean;
   memoir_status: boolean
   event_status: boolean;
   donation_status: boolean;
   video_status: boolean
   created_at: Date;
   updated_at: Date
   tags: TTags[];
   music: IVideoMusic | null;
   isPremium: boolean;
   slug: string | null;
   payment_status: boolean | null;
   theme_id: number | null;
   sections: string[]; // structura paginii intr-un array
   isLocked: boolean;
   lockedBy: IUserInPage | null;
   lockedAt: Date | null;
   permissions: IPermision[] | null;
}


export interface IPermision {
    id: string;
    user: IUserInPage[];
    role: TRoles;
}

export interface IHighlight {
    id: string;
    title: string | null;
    body: string | null;
    image_status: boolean;
    highlight_image: IImage[] | IImage | null;
}

export interface IEvent {
    id: string;
    title: string | null;
    body: string | null;
    address: string | null;
    event_date: string | null;
    email_reciever: string | null;
    map_location: ILocation | null;
    map_image: IImage | null;
}

export interface IShortDescriptionsTitleBody {
    title: string | null;
    body: string | null;
}

export interface IImage {
    id: string;
    url: string | null;
}

export interface IDonation {
    id: string;
    title: string | null;
    body: string | null;
    button: IButton | null;
    imagine_status: boolean;
    donation_image: IImage[] | IImage | null;
}

export interface IButton {
    text: string | null;
    url: string | null;
}

export interface IGalery {
    id: string;
    url: string | null;
    priority: number | null;
}

export interface IGaleryInfo {
    id: string;
    title: string | null;
    body: string | null;
    url_upload: string | null;
}

export interface ILocation {
    name: string | null;
    address: string | null;
    location_url: string | null;
}

export interface IVideoMusic {
    id: string;
    title: string | null;
    link: string | null; 
    media_type: string | null
}

export interface ITheme {
    id: string;
    color: string | null;
    style: string | null;
    primary_text: string | null;
}

export interface IFeature {
    id: string;
    feature_type: TPhotoType | null;
    scope: string | null;
    media: IImage | IImage[] | null;
}

export interface IUserInPage {
    id: string;
    email: string | null;
    full_name: string | null;
    avatar_url: string | null;
    isConfirmed: boolean;
    role_name: TRoles | null;
    createdAt: Date | null;
}