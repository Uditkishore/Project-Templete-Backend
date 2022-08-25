const {data} = require("./testing");
const {testfunction} = require("./testing");
const {testPromise} = require("./testing");
const {testAsync} = require("./testing");
const {before} = require("./testing");
const {after} = require("./testing");

beforeEach(()=>{
  console.log(before())
})
test('testing', () => {
  expect(data()).toEqual({name : "udit"})
});

test('Promise testing', async () => {
  return await testPromise().then((data)=>{
    expect(data).toBe("Success")
  })
});

test('Acync testing', async () => {
  const data = await testAsync();
  expect(data).toBe("Success")
});

afterEach(()=>{
  console.log(after())
})

test('testing callback function', done=> {
   const testing = (data) =>{
    try {
      expect(data).toBe("test")
      done()
    } catch (error) {
      done(error)
    }
   }
   testfunction(testing)
});

