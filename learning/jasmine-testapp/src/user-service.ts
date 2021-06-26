export class UserService{
    constructor(){}
    public getUsers(): any[]{
      let arr = [{name: 'admin'}, {name: 'perno'}];
      console.log(arr);
      return arr;
    }
  }