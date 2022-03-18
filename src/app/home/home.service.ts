import { Injectable } from '@angular/core';
import '../home/card';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getCards(): card[] {
    return [
      { titulo: 'Titulo 1', conteudo: 'Conteudo 1' },
      { titulo: 'Titulo 2', conteudo: 'Conteudo 2' },
      { titulo: 'Titulo 3', conteudo: 'Conteudo 3' },
    ];
  }
}
