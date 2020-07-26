import {EffectType} from "../Effect";

describe("EffectType", () => {
	test('combining effect types with a .join() implicitly calls .toString()', () => {
		const effects = [EffectType.NONE, EffectType.SPEED, EffectType.DEFENSE];
		const actual = effects.join('_');
		const expected = `${EffectType.NONE}_${EffectType.SPEED}_${EffectType.DEFENSE}`;
		expect(actual).toEqual(expected);
	});
})
