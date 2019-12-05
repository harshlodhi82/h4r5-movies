import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie-services';
import { Const } from 'src/app/shared/services/const-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit{
  colors: Array<string> = [
    "rgb(98, 0, 120)",
    "rgb(232, 86, 86)",
    "rgb(0, 67, 130)",
    "rgb(46, 46, 46)",
    "rgb(31, 125, 0)",
    "rgb(0, 179, 92)",
    "rgb(23, 179, 168)",
    "rgb(0, 113, 194)",
    "rgb(194, 0, 120)",
    "rgb(87, 56, 75)",
    "rgb(135, 100, 80)",
    "rgb(87, 68, 110)"
  ];

  selected: Array<Boolean> = [
    true, false, false, false, false, false, false, false, false, false, false, false
  ];
  constructor(private rout: ActivatedRoute, private movServ: MovieService, private constColor: Const) { }

  ngOnInit() {
    this.rout.data.subscribe((data) => {
      console.log('>>>', data);
      var index = this.colors.indexOf(this.constColor.THEME_COLOR);
      this.selected.fill(false);
      this.selected[index] = true;
    });
  }

  setCol(colNum: number) {
    this.constColor.THEME_COLOR = this.colors[colNum];
    this.movServ.themeColor = this.constColor.THEME_COLOR;
    this.selected.fill(false);
    this.selected[colNum] = true;
  }

  setStyle(colNum: number) {
    var color = this.colors[colNum];

    var style = { 'background-color': color };
    if (this.selected[colNum]) {
      // color = color.slice(0,-1)+",0.5)";
      style['box-shadow'] = '0px 0px 50px grey';
    }

    return style;
  }

}
