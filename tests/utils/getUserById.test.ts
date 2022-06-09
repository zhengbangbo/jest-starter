describe('getUserById', () => {
  it('可以获取 userId == 1 的用户', async () => {
    const result = await getUserById('1')
    expect(result).toEqual({
      // 非常巨大的一个 JSON 返回...
    })
  })
});
