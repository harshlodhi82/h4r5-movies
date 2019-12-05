import { Component, OnInit } from '@angular/core';
import { Const } from 'src/app/shared/services/const-service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private constFile:Const) { }

  ngOnInit() {

    var lobo = document.getElementById("lobo");
    var headerBg = document.getElementById("header-bg");

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");

    var width = window.screen.width;
    lobo.style.color= this.constFile.THEME_COLOR
    var k = 0;

    setInterval(() => {
      // console.log(k);
      if (k == 0) {
        p1.style.backgroundImage = "url('http://localhost:8000/images/p2.jpg')";
        p2.style.backgroundImage = "url('http://localhost:8000/images/p3.jpg')";
        p3.style.backgroundImage = "url('http://localhost:8000/images/p1.jpeg')";

        k += 1;
      } else if (k == 1) {
        p1.style.backgroundImage = "url('http://localhost:8000/images/p3.jpg')";
        p2.style.backgroundImage = "url('http://localhost:8000/images/p1.jpeg')";
        p3.style.backgroundImage = "url('http://localhost:8000/images/p2.jpg')";

        k += 1;
      } else {
        p1.style.backgroundImage = "url('http://localhost:8000/images/p1.jpeg')";
        p2.style.backgroundImage = "url('http://localhost:8000/images/p2.jpg')";
        p3.style.backgroundImage = "url('http://localhost:8000/images/p3.jpg')";

        k = 0;
      }

    }, 2000);

    var i = 0;
    var j = 0;
    setTimeout(() => {
      headerBg.style.transform = "translateY(0px)";
      j += 1;
    }, 500);
    setInterval(() => {
      if (i % 2 == 0) {
        lobo.style.textShadow = "0px 0px 10px white";

      } else {
        lobo.style.textShadow = "0px 0px 100px white";

      }
      i += 1;

      if (width <= 500) {
        if (j == 1) {
          headerBg.style.transform = "translateY(0px)";
        } else if (j == 2) {
          headerBg.style.transform = "translateX(-130px)";
        } else if (j == 3) {
          headerBg.style.transform = "translateY(100px)";
        } else if (j == 4) {
          headerBg.style.transform = "translateX(0px)";
          j = 0;
        }

      } else if (width <= 1050) {

        if (j == 1) {
          headerBg.style.transform = "translateY(0px)";
        } else if (j == 2) {
          headerBg.style.transform = "translateX(-130px)";
        } else if (j == 3) {
          headerBg.style.transform = "translateY(-300px)";
        } else if (j == 4) {
          headerBg.style.transform = "translateX(0px)";
          j = 0;
        }
      } else {
        if (j == 1) {
          headerBg.style.transform = "translateY(0px)";
        } else if (j == 2) {
          headerBg.style.transform = "translateX(-130px)";
        } else if (j == 3) {
          headerBg.style.transform = "translateY(-500px)";
        } else if (j == 4) {
          headerBg.style.transform = "translateX(0px)";
          j = 0;
        }
      }
      j += 1;

    }, 1500);

    var cont = document.getElementById('cont1')
    var rippel = document.getElementById('rippel')
    
    rippel.style.backgroundColor = this.constFile.THEME_COLOR
    cont.addEventListener('click', (data) => {
      console.log(data);
      
      rippel.style.transition = 'width 0.8s ease-in, height 0.8s ease-in'
      if (rippel.style.width === window.screen.width*2+'px') {
        let top = data.offsetY
        let left = data.offsetX
        rippel.style.top = top + 'px'
        rippel.style.left = left + 'px'
        rippel.style.width = '0px'
        rippel.style.height = '0px'
      } else {
        rippel.style.width = '0px'
        rippel.style.height = '0px'
        let top = data.offsetY
        let left = data.offsetX
        rippel.style.top = top + 'px'
        rippel.style.left = left + 'px'
        rippel.style.width = window.screen.width*2+'px'
        rippel.style.height = window.screen.width*2+'px'
      }

    })
  }

}
