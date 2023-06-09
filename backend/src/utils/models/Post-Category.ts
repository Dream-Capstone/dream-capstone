import {sql} from "../database.utils";

export interface PostCategory {
    postCategoryCategoryId: string|null,
    postCategoryPostId: string|null
}

export async function insertPostCategory (postCategory: PostCategory): Promise<string> {
    console.log(postCategory)
    const {postCategoryCategoryId, postCategoryPostId} = postCategory
    await sql `INSERT INTO  post_category (post_category_category_id, post_category_post_id) VALUES (${postCategoryCategoryId}, ${postCategoryPostId})`
    return 'post category created successfully'
}

export async function selectPostCategoryByCategoryId (postCategoryCategoryId: string): Promise<PostCategory[]> {
    return <PostCategory[]> await sql `SELECT post_category_category_id, post_category_post_id FROM post_category WHERE post_category_category_id = ${postCategoryCategoryId}`
}

export async function selectPostCategoryByPostId (postCategoryPostId: string): Promise<PostCategory[]> {
    return <PostCategory[]> await sql `SELECT post_category_category_id, post_category_post_id FROM post_category WHERE post_category_post_id = ${postCategoryPostId}`
}

export async function selectPostCategoryByPrimaryKey (postCategoryCategoryId: string, postCategoryPostId: string): Promise<PostCategory|null> {
    console.log(postCategoryPostId, postCategoryCategoryId)
    const result = <PostCategory[]> await sql `SELECT post_category_category_id, post_category_post_id FROM post_category WHERE post_category_category_id = ${postCategoryCategoryId} AND post_category_post_id = ${postCategoryPostId}`
    return result.length === 1 ? result[0] : null
}


export async function deletePostCategory (postCategory: PostCategory): Promise<string> {
    const {postCategoryCategoryId, postCategoryPostId} = postCategory
    await sql`DELETE FROM "post_category" WHERE post_category_category_id = ${postCategoryCategoryId} AND post_category_post_id = ${postCategoryPostId}`
    return 'Post category deleted successfully'
}