import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionAgentsListComponent } from './region-agents-list.component';

describe('RegionAgentsListComponent', () => {
  let component: RegionAgentsListComponent;
  let fixture: ComponentFixture<RegionAgentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionAgentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionAgentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
