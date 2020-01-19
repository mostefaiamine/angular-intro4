import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private mails = ['mostefaiamine@gmail.com', 'm_mostefai@esi.dz', 'm_mostefai@edu.esi.dz']

  constructor() { }

  public exists(mail: string): Observable<boolean> {
    const result = this.mails.indexOf(mail) !== -1;
    return timer(3000).pipe(
      map(s => result)
    );
  }

}
