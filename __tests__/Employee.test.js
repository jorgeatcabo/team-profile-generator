const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should return an object containing a 'name', 'id' and 'email' properties when called with the 'new' keyword", () => {
        const obj = new Employee('jorge','1','san_lucas2005@yahoo.com');        
        expect(obj.name).toBe('jorge');
        expect(obj.id).toBe('1');
        expect(obj.email).toBe('san_lucas2005@yahoo.com');
                
      });
    });
});