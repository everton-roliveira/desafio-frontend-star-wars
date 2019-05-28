import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <footer>
    <span>&copy; 2019 STAR WARS - v{{ version }}</span>
  </footer>`,
})
export class FooterComponent implements OnInit {

  version: string;

  ngOnInit() {
    this.version = environment.version;

    /**
     * Para gerar novas versões,  npm run release
     */
    // this.version = environment.version;
  }

}
