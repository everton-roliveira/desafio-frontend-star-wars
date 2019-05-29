import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameExampleComponent } from './game-example.component';

describe('GameExampleComponent', () => {
  let component: GameExampleComponent;
  let fixture: ComponentFixture<GameExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
