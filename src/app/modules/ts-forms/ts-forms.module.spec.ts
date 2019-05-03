import { TsFormsModule } from './ts-forms.module';

describe('TsFormsModule', () => {
  let tsFormsModule: TsFormsModule;

  beforeEach(() => {
    tsFormsModule = new TsFormsModule();
  });

  it('should create an instance', () => {
    expect(tsFormsModule).toBeTruthy();
  });
});
