import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseSearchComponent } from './verse-search.component';

describe('VerseSearchComponent', () => {
  let component: VerseSearchComponent;
  let fixture: ComponentFixture<VerseSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerseSearchComponent]
    });
    fixture = TestBed.createComponent(VerseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
