import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms'
import { MovieService } from 'src/app/shared/services/movie-services';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/services/users-services';
import { Const } from 'src/app/shared/services/const-service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @ViewChild('f',{static:true}) ngForm: NgForm;

  imgFile: File = null;


  // testFormSubmited = false;

  constructor(private usrServ: UserService, private router: Router, private movServ: MovieService, private http: HttpClient) {
  }

  ngOnInit() {


  }


  setFile(event) {
    if (event.target.files[0]) {
      this.imgFile = event.target.files[0];
    }else{
      console.log("no file selected!");
      
    }
  }

  addMovieWithApi(url:string, formData:FormData){
    return this.http.post(url, formData);
  }

  addReview(form: NgForm) {

    ///////////////////////////

    var url = "http://localhost:8000/add/movie";
    var formData: FormData = new FormData();

    var movName: string = form.value.name;
    var movInfo: string = form.value.info;
    var movReview: string = form.value.review;


    formData.append("name", movName);
    formData.append("movInfo", movInfo);
    formData.append("movReview", movReview);
    formData.append("reviewerID", this.usrServ.currentUser.getId);
    formData.append('file', this.imgFile, this.imgFile.name);
    // console.log("runn!!22");

    this.addMovieWithApi(url, formData).subscribe((resData) => {
      this.movServ.getAllMovies().then((data) => {
        this.router.navigate(["/home"]);
        
      });
    });

  }

  

  imgFileName(file: NgModel) {
    var str = "Upload Image";
    // console.log(file);
    
    if (file.value) {
      var arr = file.value.split("\\");
      str = arr[arr.length - 1];
    }
    return str;
  }

}
