import { pad } from './helpers'

describe('pad', () => {
    test('should pad single digit with leading zero', () => {
        // Вызываем функцию pad с различными значениями
        expect(pad(5)).toBe('05')
        expect(pad(10)).toBe('10')
        expect(pad(1)).toBe('01')
    })

    test('should not pad double digit', () => {
        // Вызываем функцию pad с двузначным числом
        expect(pad(55)).toBe('55')
        expect(pad(100)).toBe('100')
        expect(pad(99)).toBe('99')
    })
})
