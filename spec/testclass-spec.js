import { TestClass } from '../src/doctor';

describe('TestClass', function() {
  it('getMessage should return message', function() {
    let testClass = new TestClass();
    expect(testClass.getMessage()).toEqual('DoctorAPIweeklyProject is working.');
  });
});
