import * as jwt from './token/JwtUtil';
import { Claims } from './token/Claims';
import { CurrentUser } from '../service/CurrentUser';
// import { Dir } from '../common/Constants';
import IdentityService from '../service/IdentityService';
import store from '../reducers/store';
import LoginAction from '../actions/LoginAction';
// import * as moment from 'moment';

class IdentityStatic {
    // private claims: Claims;
    private baseUrl: string;
    private handle: string;

    public getHandle() {
        if(!this.handle) {
            this.handle = jwt.getUser();
        }
        return this.handle;
    }

    public getToken(): Promise<string> {
        const jwt = CurrentUser.Session.getToken(); 
        if(jwt)
            if(this.isExpired())
                return new IdentityService()
                    .refresh(jwt)
                    .then(refreshed => {
                        const token = refreshed.token;
                        CurrentUser.Session.setToken(token);
                        return token
                    })
                    .catch(err => {
                        CurrentUser.Session
                            .setReferer(window.location.href);
                        this.logout();
                    });
            else
                return Promise.resolve(jwt);
        else {
            CurrentUser.Page.toLogin();
            return Promise.resolve(null);
        }
    }

    private doCall() { 
        const token = CurrentUser.Session.getToken(); 
        if(token) {
            if(!this.isExpired()) {
                new IdentityService()
                    .refresh(token)
                    .then(refreshed => {
                        const token = refreshed.token;
                        CurrentUser.Session.setToken(token);
                    })
                    .catch(err => {
                        CurrentUser.Session
                            .setReferer(window.location.href);
                        this.logout();
                    });
            } else {
                if(CurrentUser.Page.isLogin())
                    this.reset();
                else
                    this.logout();
            }
        } else {
            if(CurrentUser.Page.isLogin())
                this.reset();
            else
                this.logout();
        }
    }

    public heartBeat() {
        this.doCall();
        setInterval(() => {
            this.doCall();
        }, 180000);
    }

    public login(token: string) {
        CurrentUser.Session.setToken(token);
        // const referer = CurrentUser.Session.getReferer();
        // CurrentUser.Page.to(referer || '\\');
    }

    public isLoggedInAsync(): Promise<boolean> {
        return this.getToken()
        .then(token => token !== null);
    }

    public isLoggedIn(): boolean {
        return this.hasToken()
            && !this.isExpired();
    }

    public logout(): void {
        this.reset();
        //CurrentUser.Page.to(Dir.LANDING);
        LoginAction.logout(store.dispatch);
    }

    public reset(): void {
        CurrentUser.Session.setToken(null);
        CurrentUser.Session.setSocket(null);
        this.baseUrl = null;
        // this.claims = null;
        this.handle = null;
    }

    public Server = {
        getBaseUrl: () => this.getBaseUrl(),
        describe: this.visuallyIdentify
    }

    private getBaseUrl(): string {
        if(!this.baseUrl) {
            const socket = CurrentUser.Session.getSocket();
            if(!socket) {
                this.logout();
                return null;
            }
            const host = socket.host;
            const port = socket.port 
                ? `:${socket.port}` 
                : '';
            this.baseUrl = `${host}${port}`    
        }
        
        return this.baseUrl;
    };

    private visuallyIdentify(): void {
        const DEFAULT_SEED = 'Skiff';
        const socket = CurrentUser.Session.getSocket(); 
        const seed = socket ? `${socket.host}${socket.port}` : DEFAULT_SEED;
        const GeoPattern = require('geopattern');
        let pattern;
        // if(seed == DEFAULT_SEED)
            pattern = GeoPattern.generate('Skiff', { color: '#333333', baseColor: '#333333' });
        // else
        //     pattern = GeoPattern.generate(seed);

        document.body.style.backgroundImage = pattern.toDataUrl();
        document.body.style.backgroundColor = pattern.color;
    }

    private hasToken(): boolean{
        return jwt.decode() ? true: false;
    }

    private isExpired(): boolean {
        //return jwt.isExpired(this.getClaims());
        return jwt.isExpired();
    }

    // private getClaims(): Claims {
    //     if(!this.claims) {
    //         this.claims = jwt.decode();
    //     }

    //     return this.claims;
    // }
}

export const Identity = new IdentityStatic();
