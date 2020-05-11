import { isPrimitive } from 'util';


export class AuthService {


  getUser() {
    return 'Shimon';
  }

  // login(userName: string, password: string,
  //   okCallBack: (isOk: boolean) => void,
  //   errorCallback: (error: any) => void) {
  //   setTimeout(() => {
  //     // return true;
  //     okCallBack(true);
  //     errorCallback('error details');
  //   }, 4000);
  // }
  login(userName: string, password: string): Promise<boolean> {
    console.log('login invoked');
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        // okCallBack(true);
        console.log('login finished');
        resolve(true);
        // errorCallback('error details');
        reject('error details');
      }, 4000);
    });
  }

  constructor() { }
}







