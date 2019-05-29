import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInitialComponent } from './game-initial.component';

describe('GameInitialComponent', () => {
  let component: GameInitialComponent;
  let fixture: ComponentFixture<GameInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
