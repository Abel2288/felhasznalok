import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { felhasznalo } from './Felhasznalo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  @Render('index')
  getUsers() {
    return {
      felhasznalok: felhasznalok,
    };
  }
}

const felhasznalok: felhasznalo[] = [
  {
    nev: 'Egyip Tomi',
    nem: 'Féfi',
    szuletes: '1980.04.30',
    egyenleg: 1,
    aktiv: 'active',
  },
  {
    nev: 'Egyip Ági',
    nem: 'nő',
    szuletes: '1981.04.30',
    egyenleg: 2,
    aktiv: 'inactive',
  },
  {
    nev: 'Egyip Xáviér',
    nem: 'Féfi',
    szuletes: '1982.04.30',
    egyenleg: 3,
    aktiv: 'inactive',
  },
  {
    nev: 'Egyip Laci',
    nem: 'Féfi',
    szuletes: '1983.04.30',
    egyenleg: 4,
    aktiv: 'active',
  },
  {
    nev: 'Egyip Feri',
    nem: 'Féfi',
    szuletes: '1984.04.30',
    egyenleg: 5,
    aktiv: 'inactive',
  },
  {
    nev: 'Egyip Csilla',
    nem: 'nő',
    szuletes: '1985.04.30',
    egyenleg: 6,
    aktiv: 'active',
  },
];
