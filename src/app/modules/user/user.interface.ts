
export type TUser = {
    id: string;
    password: string;
    needsPasswordChnage: boolean;
    role: 'admin' | 'faculty' | 'student';
    ststus: 'in-progress' | 'blocked';
    isDeleted: boolean;
};

