describe('linked lists', () => {
    it('init list and add 1 item', () => {
        const list = new List();
        list.append('data');
        expect(list.data).toBe('data');
        expect(list.prev).toBe(null);
    })
})