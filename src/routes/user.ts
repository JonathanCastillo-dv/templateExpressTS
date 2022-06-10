import { Router } from 'express';
import { getUsers, postUsers } from '../controller/user';

const router = Router();

router.get('/', getUsers);

router.post('/', postUsers);

export default  router;