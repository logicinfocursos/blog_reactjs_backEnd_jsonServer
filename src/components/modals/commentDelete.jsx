import { apiDELETE } from '../../services/api'



export const CommentDelete = ({ comment, setComment }) => {



    if (!comment) return <></>



    return (

        <div className="modal fade" id="commentDelete_modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">#{comment.id} excluir comentário</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body p-5">
                        <h4>comentãrio</h4>
                        <h5 className="fw-bold mb-3">
                            {comment.author}
                            <small className="text-muted ms-1 fs-6 ml-3">({comment.created_at})</small>
                        </h5>

                        <div className='row'>
                            <p>{comment.comment}</p>
                        </div>

                        <hr />

                        <h4>resposta</h4>
                        <h5 className="fw-bold mb-3">
                            {comment.replyowner}
                            <small className="text-muted ms-1 fs-6 ml-3">({comment.reply_created_at})</small>
                        </h5>

                        <div className='row'>
                            <p>{comment.reply}</p>
                        </div>

                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">fechar</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => deleteComment(comment)}><i className="fas fa-trash"></i> excluir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export const deleteComment = async (comment) => {

    await apiDELETE('comments', comment.id)
    window.location.href = `/post/${comment.postid}`
}