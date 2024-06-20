class User {
    id: number;
    name: string;
    email: string;
    password: string;

    constructor(userData?: any) {
        this.id = 0;
        this.name = "";
        this.email = "";
        this.password = "";

        if (userData) {
            this.id = userData.id;
            this.name = userData.name;
            this.email = userData.email;
            this.password = userData.password;
        }
    }
}

export default User;