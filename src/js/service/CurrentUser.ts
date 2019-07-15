import { SessionStorageKey, Dir } from '../common/Constants';
import store from '../reducers/store';
import LoginAction from '../actions/LoginAction';

class PageStatic {
    public isLogin(): boolean {
        return this.currentPage().endsWith(Dir.LOGIN);
    }

    public to(href: string): void {
        window.location.href = href;
    }

    public toLogin(): void {
        if(!CurrentUser.Page.isLogin()) {
            CurrentUser.Session
                .setReferer(window.location.href);
            LoginAction.logout(store.dispatch);
        }
    }

    private currentPage(): string {
        return window.location.href;
    }
}

const key = SessionStorageKey;
class SessionStatic {
    public setReferer(url: string) {
        this.setItem(key.REFERER, url)
    }

    public getReferer(): string {
        return sessionStorage.getItem(key.REFERER);
    }

    public setToken(token: string) {
        this.setItem(key.TOKEN, token);
    }

    public getToken(): string {
        return sessionStorage.getItem(key.TOKEN);
    }

    public setSocket(socket: Socket) {
        this.setItem(key.SOCKET, JSON.stringify(socket));
    }

    public getSocket(): Socket {
        return JSON.parse(
            sessionStorage.getItem(key.SOCKET)
        )
    }

    private setItem(key: string, value: string) {
        if(value)
            sessionStorage.setItem(key, value);
        else
            sessionStorage.removeItem(key);
    }
}

interface Socket {
    host: string,
    port: number
}

class CurrentUserStatic {
    public Page = new PageStatic();
    public Session = new SessionStatic();
}

export const CurrentUser = new CurrentUserStatic();
