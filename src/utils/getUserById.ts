const getUserById = async (id: string) => {
  return request.get('user', {
    params: { id }
  })
}
