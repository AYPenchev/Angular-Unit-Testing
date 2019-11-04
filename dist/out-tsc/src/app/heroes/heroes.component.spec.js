"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var heroes_component_1 = require("./heroes.component");
var rxjs_1 = require("rxjs");
describe('HeroesComponent', function () {
    var component;
    var HEROES;
    var mockHeroService;
    beforeEach(function () {
        HEROES = [
            { id: 1, name: 'SpiderDude', strengh: 8 },
            { id: 2, name: 'Wonderful Woman', strengh: 24 },
            { id: 3, name: 'SuperDude', strengh: 55 },
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        component = new heroes_component_1.HeroesComponent(mockHeroService);
    });
    describe('delete', function () {
        it('should remove the indicated hero from the heroes list', function () {
            mockHeroService.deleteHero.and.returnValue(rxjs_1.of(true));
            component.heroes = HEROES;
            component.delete(HEROES[2]);
            expect(component.heroes.length).toBe(2);
        });
    });
});
//# sourceMappingURL=heroes.component.spec.js.map