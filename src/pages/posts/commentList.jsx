import './commentList.styles.css'
import { CommentDelete, CommentEdit } from '../../components'
/* import robot  from "assets/images/elements/robot.jpg"
import robot2 from "assets/images/elements/robot2.jpg" */

export const CommentList = ({ comments, comment, setComment }) => {



    if (!comments || comments.length < 1) return <h3>sem comentários nesse post!</h3>



    return (
        <>
            {
                comments && comments.length > 0
                    ? comments.map((item, key) => {
                        return (

                            <CommentItem
                                item={item}
                                comment={comment}
                                setComment={setComment}
                                key={key}
                            />
                        )
                    })
                    : <></>
            }
        </>
    )
}



export const CommentItem = ({ item, comment, setComment }) => {

    console.log(">>> comment in commentItem", comment)
    return (
        <div className="d-flex p-3 list-group-item" key={item.id}>

            <CommentDelete comment={comment} setComment={setComment} />
            <CommentEdit comment={comment} setComment={setComment} />

            <div className="col-md-2">
                <img src="https://cdn0.woolworths.media/content/wowproductimages/large/091776.jpg" alt="visit" className={`row mb-3 rounded-circle ms-${item.type == 'adm' ? '5' : '1'}`} style={{ width: 60, height: 60 }} />
                <div className='row'>
                    <button type="button" className="btn btn-danger mb-3" data-toggle="modal" data-target="#commentDelete_modal" onClick={() => setComment(item)}><i className="fas fa-trash"></i>apagar</button>
                </div>

                <div className='row'>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#commentEdit_modal" onClick={() => setComment(item)}>responder</button>
                </div>

            </div>

            <div className="col-md-10">

                <h5 className="fw-bold ms-3">
                    {item.author}
                    <small className="text-muted ms-1 fs-6 ml-3">({item.created_at})</small>
                </h5>
                <p>{item.comment}</p>

                <hr />

                {
                    item.reply
                        ? <div className="row">
                            <div className="col-md-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnWNLnljV15w-nD5UHrWNnr316QiN8QOwug&usqp=CAU" alt="visit" className={`row mb-3 rounded-circle ms-${item.type == 'adm' ? '5' : '1'}`} style={{ width: 60, height: 60 }} />
                            </div>
                            <div className="col md-10">
                                <h5 className="fw-bold ms-3">
                                    {item.replyowner}
                                    <small className="text-muted ms-1 fs-6 ml-3">({item.reply_created_at})</small>
                                </h5>
                                <p className={`ms-3 ${item.type == 'adm' ? 'fst-italic' : 'fw-normal'}`}>{item.reply}</p>
                            </div>
                        </div>
                        : <></>
                }

            </div>
        </div>
    )
}

