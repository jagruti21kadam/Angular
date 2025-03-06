import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTemplateComponent } from './hello-template.component';

describe('HelloTemplateComponent', () => {
  let component: HelloTemplateComponent;
  let fixture: ComponentFixture<HelloTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
