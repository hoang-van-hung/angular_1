import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.css']
})
export class AsyncpipeComponent implements OnInit {

  greeting: Promise<string> | null = null;
  arrived: boolean = false;

  private resolve: Function | null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }

  ngOnInit(): void {
  }

}
