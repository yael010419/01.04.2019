export class AuthenticationService {
    private isLoggedIn = true;

    getState(): boolean {
        return this.isLoggedIn;
    }

    isAuthenticated(): Promise<boolean> {
        const promise = new Promise<boolean>(
            (resolve, reject) =>  {
                        // todo: call WebAPI to ask for information
                        if (this.isLoggedIn) {
                        resolve(this.isLoggedIn);
                        } else {
                         reject('Error! Not logged in.');
                        }

                    }
        );
        return  promise;
      }





}
