import { Component, Injectable } from '@angular/core';
import { Qoute, QouteService } from '../qoute.service';

@Component({
  selector: 'app-random-quote',
  standalone: true,
  imports: [],
  templateUrl: './random-quote.component.html',
  styleUrl: './random-quote.component.css'
})

@Injectable({
  providedIn: 'root'
})
export class RandomQuoteComponent {

  public constructor(private qouteService: QouteService) {}

  qoute = "";
  author = "";

  public getQoute() {

    this.qoute = "Fetching Qoute...";
    this.author = "";

    this.qouteService.getQoute()
    .subscribe((json) => {
      const res = json as Qoute;
      this.qoute = res.quote;
      this.author = res.author;
    });
  }

}
