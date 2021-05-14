const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
      it("should return an object containing a 'name', 'id', 'email' and 'school' properties when called with the 'new' keyword", () => {
        const obj = new Intern('jorge','1','san_lucas2005@yahoo.com','Harvard');        
        expect(obj.name).toBe('jorge');
        expect(obj.id).toBe('1');
        expect(obj.email).toBe('san_lucas2005@yahoo.com');
        expect(obj.school).toBe('Harvard');
                
      });
    });
});