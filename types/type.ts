import 'next-auth';

export type NoticeListData = {
    id : number;
    title : string;
    userid?: string;
    file? : string;
    createdAt : string;
}


export type User = {
    id: number;
    userid: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    role: 'ADMIN' | 'USER';  // UserRole 타입
};


export interface FileInfo {
    filePath: string;
    fileName: string;
}

export interface FileInput {
    file: File | null;
    path? : string;
}

export interface FileInfoTypes {
    path: string;
}

export interface NoticeTypes {
    id: number;
    title: string;
    content: string;
    boardfile:FileInfoTypes[];
    postedAt: Date;
}


export interface TechnicTypes {
    id: number;
    title: string;
    content: string;
    boardfile:FileInfoTypes[];
    postedAt: Date;
}

export interface EditorComponentProps {
    onContentChange: (newValue: string) => void;
    initialValue?: string;
}

export interface SubHeaderProps {
    imgsrc : string;
    title : string;
    menuitem : { id : number; menutitle : string; href : string;}[];
}



export interface NoticeLatestProps {
    id : number;
    title : string;
    content : string;
    date : string;
}

export const NoticeLatestData:Array<NoticeLatestProps> = [
    {
        id : 1,
        title : '(주)중산기업 공지사항',
        content : '공지사항 내용이 입력됩니다.',
        date : '2023.10.05'
    },
    {
        id : 2,
        title : '(주)중산기업 공지사항',
        content : '공지사항 내용이 입력됩니다.',
        date : '2023.10.05'
    },
    {
        id : 3,
        title : '(주)중산기업 공지사항',
        content : '공지사항 내용이 입력됩니다.',
        date : '2023.10.05'
    },
    {
        id : 4,
        title : '(주)중산기업 공지사항',
        content : '공지사항 내용이 입력됩니다.',
        date : '2023.10.05'
    }
]


export interface VideoPlayerProps {
    videoid? : string;
    width : string;
    height : string;
    thumsrc? : string;
}


export interface BoardSearchProps {
    onSearch: (searchTrem : string) => void;
}

export interface InquiryFormType {
    inquiryname: string;
    inquiryemail: string;
    phoneNumber: string;
    inquirycontury: string;
    inquirybusiness: string;
    inquirycontent: string;
}




declare module 'next-auth' {
    export interface Session {
        role?: string;
    }
}