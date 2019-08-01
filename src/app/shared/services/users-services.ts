import { User } from '../models/user.model';

export class UserService {
    currentStatus:string = "Offline";

    currentUser:User;

    allUser: Array<User> = [
        new User("harshlodhi82@gmail.com", "harsh999")
    ];


    validate(email: string) {
        var flag = true;
        this.allUser.forEach(user => {
            if (user.getEmail === email) {
                this.currentStatus = "Online";
                this.currentUser = user;
                flag = false;
                return;
            }
        });

        return flag;
    }

    validatePass(email, pass) {
        var flag = false;
        this.allUser.forEach(user => {
            if (user.getEmail === email) {
                if(user.getPass === pass){
                    this.currentStatus = "Online";
                    this.currentUser = user;
                    flag = true;
                    return;
                }
            }
        });

        return flag;
    }

    createUser(email: string, pass: string) {
        var newUser = new User(email, pass);
        this.allUser.push(newUser);
        this.currentUser = newUser;
        this.currentStatus = "Online";
    }

    

}
