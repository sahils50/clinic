import { getPostbyId } from "../service/user.service";

// export const getViewsById = async (req,res)=>{
//     const {id}  = req.params
//     try{
//         const post = await getPostbyId(id);
//         if(!post){
//             return res.status(404).json({
//                 error: "Post with ID ${id} not found"
//             })
//         }
//         res.json({
//             id:post.id,
//             views:post.viewCount || 0
//         })
//     }
// }



