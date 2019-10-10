import { Injectable, ViewChild } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { catchError } from "rxjs/operators";
import { StorageService } from "../services/storage.service";
import { AlertController } from "ionic-angular";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


    constructor(
        public storage: StorageService,
        public alertCtrl: AlertController) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('passou');
        return next.handle(req)
            .pipe(
                catchError(error => {
                    let errorObj = error;
                    if (errorObj.error) {
                        errorObj = errorObj.error;
                    }
                    console.log('Error detectado pelo interceptor');
                    console.log(errorObj);

                    let status = error.status;

                    switch (status) {
                        case 401:
                            this.handle401();
                            break;

                        case 403:
                            this.handle403();
                            break;

                        default:
                            this.handleDefaultError(errorObj);
                            break;
                    }

                    return Observable.throw(errorObj);
                })
            ) as any;
    }

    handle401() {
        let alert = this.alertCtrl.create({
            title: 'OPS: FALHA DE AUTENTICAÇÃO',
            message: 'Email ou senha incorretos',
            enableBackdropDismiss: false,
            buttons: [{
                text: 'OK'
            }],
            cssClass: 'alert-danger'
        });
        alert.present();
    }


    handle403() {
        let alertForbidden = this.alertCtrl.create({
            title: 'OPS: SEM PERMISSÃO',
            message: 'Atividade não permitida',
            enableBackdropDismiss: false,
            buttons: [{
                text: 'OK',
                handler: () => {
                    this.storage.setLocalUser(null);
                }
            }],
            cssClass: 'alert-danger'
        });
        alertForbidden.present();
    }

    handleDefaultError(erroObj) {
        let alert = this.alertCtrl.create({
            title: 'Erro ' + erroObj.status + ' : ' + erroObj.error,
            message: erroObj.error,
            enableBackdropDismiss: false,
            buttons: [{
                text: 'OK'
            }],
            cssClass: 'alert-danger'
        });
        alert.present();
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};