import {MessageComponent} from './message.component';

describe('Testing message state in message.component', () => {
  let app: MessageComponent;

  beforeEach(() => {
    app = new MessageComponent();
  });

  describe('Component: InputText', () => {
    it('should create an instance', () => {
      let component = new MessageComponent();
      expect(component).toBeTruthy();
    });

  it('should set new message', () => {
    app.setMessage('Testing');
    expect(app.message).toBe('Testing');
  });

  it('should clear message', () => {
    app.clearMessage();
    expect(app.message).toBe('');
  });
});
  });
