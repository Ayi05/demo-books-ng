import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  isbns = [
    "978-2-409-01883-1",
    "978-2-409-01657-8",
    "978-2-409-01130-6",
    "978-2-409-02310-1",
    "978-2-746-00646-7",
    "978-2-746-09835-0",
    "978-2-409-01090-3",
    "978-2-409-02205-0",
    "978-2-409-02073-5",
    "978-2-409-01342-3",
    "978-2-409-01709-4",
    "978-2-409-01140-5",
    "978-2-409-02199-2",
    "978-2-409-01664-6",
    "978-2-409-01945-6",
    "978-2-409-02218-0",
    "978-2-409-02155-8",
    "978-2-409-01511-3",
    "978-2-409-02135-0",
    "978-2-409-02060-5",
    "978-2-409-02280-7",
    "978-2-409-01875-6",
    "978-2-409-02292-0",
    "978-2-409-01400-0",
    "978-2-409-02170-1",
    "978-2-409-02096-4",
  ];

  images = [];

  // isbn: string = "978-2-409-01090-3";
  // image: string = "assets/BooksCover/"+this.isbn +".jpg";

  constructor() { 

    for (let i = 0; i < this.isbns.length; i++) {
      this.images[i] = "assets/BooksCover/" + this.isbns[i] + ".jpg";
    };
    
  }

  ngOnInit(): void {
  }

}
