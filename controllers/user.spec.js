const userController = require('../controllers/user.controller');
const bcrypt = require('bcrypt');


// The method create is working correctly.
describe('UserController', () => {
    describe('create', () => {
        it('should create a new user', () => {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync('password', salt);
            const req = {
                body: {
                    name: 'John',
                    email: 'John@hotmail.com',
                    password: hash,
                }
            };
            const res = {
                send: jest.fn()
            };
            userController.create(req, res);
            expect(res.send).toHaveBeenCalledWith({
                name: 'John',
                email: 'John@hotmail.com',
                password: hash,
        });
    })
 })
})