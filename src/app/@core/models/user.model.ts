export class UserModel {
    _id: string;
    name: string;
    email: string;
    avatar: string;

    constructor() {
        this._id = null;
        this.name = '';
        this.email = '';
        this.avatar = '../assets/images/avatar.png';
    }
}
