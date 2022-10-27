import { PostBody } from './postBody'



export const PostView = ({ postFeatured }) => {

    if (!postFeatured) return <></>



    return (

        <div className="modal fade" id="postView_modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">detalhes do post</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <PostBody postFeatured={postFeatured} />

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">fechar</button>
                        <a href={`/post/${postFeatured.id}`} className="btn btn-primary"><i className="fas fa-pen"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}