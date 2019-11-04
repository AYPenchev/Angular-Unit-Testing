"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_service_1 = require("./message.service");
describe('MessageService', function () {
    var service;
    beforeEach(function () {
        service = new message_service_1.MessageService();
    });
    it('should have no messages to start', function () {
        expect(service.messages.length).toBe(0);
    });
    it('should add a message when add is called', function () {
        service.add('message1');
        expect(service.messages.length).toBe(1);
    });
    it('should remove all messages when clear is called', function () {
        service.add('message1');
        service.clear();
        expect(service.messages.length).toBe(0);
    });
});
//# sourceMappingURL=message.service.spec.js.map