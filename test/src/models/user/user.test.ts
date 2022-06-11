import User from '../../../../src/models/user/user';
import userMock from '../../../mock/user.json';
test('should return the same sent object', () => {
    const user = new User(userMock);
    expect(user).toMatchObject(userMock)
});