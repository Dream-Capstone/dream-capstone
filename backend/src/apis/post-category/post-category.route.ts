import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {
    deletePostCategoryController,
    // deletePostCategory,
    getPostCategoryByCategoryId,
    getPostCategoryByPrimaryKey, postPostCategoryController
} from "./post-category.controller";
import {check, checkSchema} from "express-validator";
import {postCategoryController} from "../category/category.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

const router = Router()

router.route('/postCategoryId/:postCategoryId').get(asyncValidatorController([
    check('postCategoryId', 'please provide a valid postCategoryId').isUUID()
]), getPostCategoryByCategoryId)

router.route('/postCategoryId/:postCategoryId/postPostId/:postPostId').get(asyncValidatorController([
    check('postCategoryId', 'please provide a valid postCategoryId').isUUID(),
    check('postPostId', 'please provide a valid postPostId').isUUID()
]), getPostCategoryByPrimaryKey)

router.route('/postCategoryId/:postCategoryId/postPostId/:postPostId').delete(asyncValidatorController([
    check('postCategoryId', 'please provide a valid postCategoryId').isUUID(),
    check('postPostId', 'please provide a valid postPostId').isUUID()
]), deletePostCategoryController)

router.route('/')
.post(
    isLoggedIn,
    asyncValidatorController([
    check('postCategoryCategoryId', 'please provide a valid postCategoryId').isUUID(),
    check('postCategoryPostId', 'please provide a valid postPostId').isUUID()
]),postPostCategoryController)

export default router