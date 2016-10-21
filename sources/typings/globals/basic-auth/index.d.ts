// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/basic-auth/basic-auth.d.ts
declare module "basic-auth" {
    function auth(req: Express.Request): auth.BasicAuthResult;

    namespace auth {
        interface BasicAuthResult {
            name: string;
            pass: string;
        }
    }

    export = auth;
}