const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
      it("should return an object containing a 'name', 'id', 'email' and 'officenumber' properties when called with the 'new' keyword", () => {
        const obj = new Manager('jorge','1','san_lucas2005@yahoo.com','1');        
        expect(obj.name).toBe('jorge');
        expect(obj.id).toBe('1');
        expect(obj.email).toBe('san_lucas2005@yahoo.com');
        expect(obj.officenumber).toBe('1');
                
      });
    });
});