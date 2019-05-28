export class UserModel {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    cpf: string;
    street: string;
    telephone: string;

    constructor() {
        this._id = null;
        this.name = '';
        this.email = '';
        this.avatar = '../assets/images/avatar.png';
        this.cpf = '';
        this.street = '';
        this.telephone = '';
    }
}
