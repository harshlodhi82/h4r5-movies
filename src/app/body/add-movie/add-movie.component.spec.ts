import { ComponentFixture, TestBed, inject, async } from "@angular/core/testing";
import { AddMovieComponent } from './add-movie.component';
import { UserService } from 'src/app/shared/services/users-services';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieService } from 'src/app/shared/services/movie-services';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, NgForm, NgModel, ControlContainer } from '@angular/forms';
import { Const } from 'src/app/shared/services/const-service';
import { User } from 'src/app/shared/models/user.model';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
import { execSync } from 'child_process';
import { DebugElement } from '@angular/core';


fdescribe("AddMovieComponent", () => {
    let fixture: ComponentFixture<AddMovieComponent>;
    let compo: AddMovieComponent;
    let httpTestingController: HttpTestingController;
    var http: HttpClient
    let userServ: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientModule, HttpClientTestingModule, FormsModule],
            declarations: [AddMovieComponent],
            providers: [
                UserService,
                MovieService, Const
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(AddMovieComponent);
        compo = fixture.componentInstance;
        httpTestingController = TestBed.get(HttpTestingController);
        http = TestBed.get(HttpClient);

        let user = new User("1", "h", "p", "h@gmail.com", "xyz", "India", [], [], []);
        userServ = TestBed.get(UserService);
        userServ.currentUser = user;

    });



    it("Should have null img file", () => {
        var imgFile = compo.imgFile;
        expect(imgFile).toBeNull();

    });

    it("Should have valid img file", () => {
        var file = new File([''], 'venom.jpeg', { type: 'image/jpeg' });
        var proto = {
            target: {
                files: [file]
            }
        }

        compo.setFile(proto);

        var imgFile = compo.imgFile;

        expect(imgFile).toEqual(file);


    });


    it("Should have null img file to handel Error", () => {
        var proto = {
            target: {
                files: []
            }
        }

        compo.setFile(proto);

        var imgFile = compo.imgFile;

        expect(imgFile).toBeNull();
    });


    it("Should have working addMovie API", () => {

        var file = new File([''], 'venom.jpeg', { type: 'image/jpeg' });


        var formData: FormData = new FormData();


        var movName: string = "dsfdsf";
        var movInfo: string = "sdjflkdsf";
        var movReview: string = "sjfsdfsdfsf";


        formData.append("name", movName);
        formData.append("movInfo", movInfo);
        formData.append("movReview", movReview);
        formData.append("reviewerID", userServ.currentUser.getId);
        formData.append('file', file, file.name);

        var prom = compo.addMovieWithApi("http://localhost:8000/add/movie", formData);

        prom.subscribe((resData) => {
            console.log(resData);

            // expect(compo.testFormSubmited).toEqual(true);

            expect(resData).toEqual(formData);
        });

        var req = httpTestingController.expectOne("http://localhost:8000/add/movie");

        // req.request.body
        expect(req.request.body).toBe(formData);

        expect(req.request.method).toBe('POST');

        req.flush(formData);

    });

    // fit("Should return image name",()=>{
    //     var file = new File([''],"myImage.png");
    //     var ne =  fixture.debugElement.nativeElement;
    //     var formControl = ne.querySelector('#customFile');


    //     var nm = new NgModel(formControl,[],[],[]);

    //     var res = compo.imgFileName(nm);
    //     expect(res).toEqual("myImage.png");
    // })

    fit("add movie btn should be disabled", () => {

        fixture.autoDetectChanges();
        var ngForm = compo.ngForm;

        var btn = fixture.debugElement.nativeElement.querySelector('button');

        console.log(btn.disabled);

        expect(!ngForm.valid).toBeTruthy();


    })





});