import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss'],
  animations: [
    trigger('changeState', [
      state('state1', style({
        transform: 'translateY(100%)', opacity: 0, visibility: 'visible'
      })),
      state('state2', style({
        transform: 'translateY(0)', opacity: 1, display: 'flex'
      })),
      transition('state1=>state2', animate('2000ms'))
    ]),
    trigger('viewDashboard', [
      state('start', style({
        backgroundColor: '#ffff',
        transform: 'translateX(0)', opacity: 0, visibility: 'visible', width: '5%',
        height: '4px'
      })),
      state('end', style({
        backgroundColor: '#ffff',
        transform: 'translateX(100%)', opacity: 1, display: 'flex', width: '33%',
        height: '4px'
      })),
      transition('start=>end', animate('2000ms'))
    ])
  ]
})
export class SplashscreenComponent implements OnInit {

  currentState: string | undefined;
  dashboardState: string | undefined;
  arrowClicked: boolean = false;
  viewDashboardClicked: boolean = false;

  constructor(public router: Router) { }

  ngOnInit() {
    this.currentState = "state1";
    this.dashboardState = "start";
  }

  changeState() {
    this.currentState = "state2";
    this.arrowClicked = true;
  }
  viewDashboard() {
    this.dashboardState = "end";
    this.viewDashboardClicked = true;
  }

  endState() {
    this.currentState = "state1";
  }
  endviewDashboard(event:any) {
    this.dashboardState = "start";
    if(event.toState === 'end') {
      this.router.navigateByUrl('/home');
    }
  }

}
