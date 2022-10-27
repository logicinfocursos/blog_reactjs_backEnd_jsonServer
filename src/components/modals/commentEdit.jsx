import { apiPOST, apiPUT } from '../../services/api'



export const CommentEdit = ({ comment, setComment }) => {

    if (!comment) return <></>

    console.log(">>> item to edit", comment)

    return (

        <div className="modal fade" id="commentEdit_modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">#{comment.id} responder à comentário</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body p-5">

                        <h5 className="fw-bold mb-3">
                            {comment.author}
                            <small className="text-muted ms-1 fs-6 ml-3">({comment.created_at})</small>
                        </h5>

                        <div className="form-group">
                            <label htmlFor="repcommnently">comentário</label>
                            <p>{comment.comment}</p>
                        </div>

                        <div className="form-group">
                            <label htmlFor="reply">resposta</label>
                            <textarea type="text" className="form-control" id="reply" rows="3" placeholder="resposta" value={comment.reply} onChange={(e) => setComment({ ...comment, reply: e.target.value })}></textarea>
                        </div>





                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">fechar</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => saveComment(comment, setComment)}><i className="fas fa-trash"></i> salvar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export const saveComment = async (comment, setComment) => {

    const _comment = {
        ...comment,
        status: parseInt(comment.status),
        created_at: comment.id && comment.id > 0 ? comment.created_at : Date(),
        updated_at: Date()
    }

    if (comment.id) {

        await apiPUT('comments', _comment)
    } else {
        await apiPOST('comments', _comment)
    }

    setComment(_comment)
    window.location.href = `/post/${comment.postid}`
}