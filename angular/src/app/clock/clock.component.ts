import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";

@Component({
  selector: "hln-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.scss"]
})
export class Clock implements OnInit, OnDestroy {
  time = new Date();
  rxTime = new Date();
  intervalId : any;
  subscription: Subscription | any;
  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
