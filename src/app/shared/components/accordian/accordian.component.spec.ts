import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordianComponent } from './accordian.component';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ACCORDION_DATA, ACCORDION_TITLES } from '../../helper/accordion.constant';

describe('AccordianComponent', () => {
  let component: AccordianComponent;
  let fixture: ComponentFixture<AccordianComponent>;
  const accordionTitles = ACCORDION_TITLES

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordianComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    component.accordianInput = ACCORDION_DATA;
    fixture.detectChanges();
    const titles = fixture.nativeElement.querySelectorAll('.accordian-title');
    expect(titles.length).toBe(component.accordianInput.length);
    for (let i = 0; i < titles.length; i++) {
      const expectedTitle = accordionTitles[i];
      expect(titles[i].textContent).toContain(expectedTitle);
    }
    expect(component).toBeTruthy();
  });
});
