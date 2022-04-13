import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Route} from '../../interfaces/route';
import {Observable} from 'rxjs';
import {DataService} from '../../services/data.service';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public routes: Observable<Route[]>;

  constructor(private appComponent: AppComponent, private dataService: DataService, private menuController: MenuController) {
    // Nothing to implement
  }

  ngOnInit() {
    this.routes = this.dataService.getMenuOptions();
  }

  public async signOut() {
    await this.appComponent.signOut();
  }
}
