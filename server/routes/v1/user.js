import express from 'express';
import userValidations from '../../middlewares/validations/userValidation';
import userController from '../../controllers/userController';

const router = express.Router();

router.route('/signup')
  .post(userValidations.signup, userController.signup);

router.route('/signin')
  .post(userValidations.signin, userController.signin);

router.route('/agents')
  .get(userController.agents);

router.route('/updateinformation/:id')
  .put(userValidations.updateInformations, userController.updateInformations);

router.route('/changepassword/:id')
  .put(userValidations.changePassword, userController.changePassword);

router.route('/changeavatar/:id')
  .put(userValidations.changeAvatar, userController.changeAvatar);

export default router;