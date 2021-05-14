const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should return an object containing a 'name', 'id', 'email' and 'github' properties when called with the 'new' keyword", () => {
        const obj = new Engineer('jorge','1','san_lucas2005@yahoo.com','https://github.com/jorgeatcabo');        
        expect(obj.name).toBe('jorge');
        expect(obj.id).toBe('1');
        expect(obj.email).toBe('san_lucas2005@yahoo.com');
        expect(obj.github).toBe('https://github.com/jorgeatcabo');
                
      });
    });
});