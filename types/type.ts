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


