import {InputTextComponent} from './input-text.component';


describe('Component: InputText', () => {
  it('should create an instance', () => {
    let component = new InputTextComponent();
    expect(component).toBeTruthy();
  });
});

describe('Testing value in stateColor', () => {
  let app: InputTextComponent;

  beforeEach(() => {
    app = new InputTextComponent();
  });


  it('should set new be Set to primary by default', () => {
    app.stateColor = "Primary";
    expect(app.stateColor).toBe('Primary');
  });

  it("should be required by default" , () => {
    app.isRequired = "false";
    expect(app.isRequired).toBe('false');
  });
  it("should be named: myLabel", () => {
    app.inputType = "text";
    expect(app.inputType).toBe('text');

  });
  it("should be named: myLabel", () => {
    app.inputName = "myLabel";
    expect(app.inputName).toBe("myLabel");

  });
  it("should be named: top", () => {
    app.toolTipLocation = "top";
    expect(app.toolTipLocation).toBe("top");
  });

});
