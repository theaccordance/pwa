import { Component, OnInit } from '@angular/core';

interface Content {
  version: string;
  sha: string;
  github: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  private content: Content;
  constructor() {
    this.content = {
      github: 'https://github.com/theaccordance/pwa',
      sha: '33ea2fc69506b0fa89567ca9128d4f947ea66eb0',
      version: '1.0.0'
    };
  }

  ngOnInit() {
  }

}
