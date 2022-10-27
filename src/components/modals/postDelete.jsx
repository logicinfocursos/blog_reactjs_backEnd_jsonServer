import { apiDELETE } from '../../services/api'
import { PostBody } from './postBody'



export const PostDelete = ({ postFeatured }) => {
    
    if (!postFeatured) return <></>



    return (

        <div className="modal fade" id="postDelete_modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-danger" id="exampleModalLabel">#{postFeatured.id} excluir post</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        
                        <PostBody postFeatured={postFeatured}/>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">fechar</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal"  onClick={()=>deletePost(postFeatured)}><i className="fas fa-trash"></i> excluir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const deletePost  = async (postTodelete) =>{

    await apiDELETE('posts', postTodelete.id) 
    window.location.href = `/posts`
}