import { greeting } from "../src/Greeting";

describe('Greeting Test', () => {
    it('should greet the morning when it is in the morning', () => {
        Date.prototype.getHours = jest.fn().mockReturnValue(7);
        expect(greeting()).toBe("Good morning!");
    });
    it('should greet the afternoon when it is in the afternoon', () => {
        Date.prototype.getHours = jest.fn().mockReturnValue(16);
        expect(greeting()).toBe("Good afternoon!");
    });
    it('should greet the evening when it is in the evening', () => {
        Date.prototype.getHours = jest.fn().mockReturnValue(20);
        expect(greeting()).toBe("Good evening!");
    });
    it('should greet the night when it is in the night', () => {
        Date.prototype.getHours = jest.fn().mockReturnValue(22);
        expect(greeting()).toBe("Good night!");
    });
    it('should greet the night when it is in the night', () => {
        Date.prototype.getHours = jest.fn().mockReturnValue(2);
        expect(greeting()).toBe("Good night!");
    });
});
