import { ThemesComponent } from "./themes.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MovieService } from 'src/app/shared/services/movie-services';
import { Const } from 'src/app/shared/services/const-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe("ThemeComponent", () => {

    let component: ThemesComponent;
    let fixture: ComponentFixture<ThemesComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [MovieService, Const],
            declarations: [ThemesComponent]
        }).compileComponents();

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ThemesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return {"background-color":"rgb(98, 0, 120)"}',()=>{
        var fun = component.setStyle(0);
        expect(fun).toEqual({"background-color":"rgb(98, 0, 120)"});
    });

});