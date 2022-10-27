export const ImageFeatureChange = ({ post, setPost, handleFile }) => {

    if (!post) return <></>


    const _image = post.imageblob ? post.imageblob : post.image ? post.image : "https://via.placeholder.com/200"

    return (

        <div className="modal fade" id="postImageFeature_modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-danger" id="exampleModalLabel">#{post.id} alterar a imagem de destque</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <a data-toggle="modal" data-target="#postImageFeature_modal"><img src={_image} className="img-thumbnail mb-3 mt-3" width={400} height={200} /></a><br />
                    </div>
                    <div className="modal-body">

                        <div className="form-group">
                            <label htmlFor="exampleInputFile">faça o upload</label>
                            <div className="input-group">
                                <div className="custom-file">



                                    <input type="file" className="custom-file-input" id="inputImage" accept="image/*" onChange={(e) => handleFile(e, post, setPost)} />
                                    <label className="custom-file-label" htmlFor="exampleInputFile">escolher imagem</label>
                                </div>
                                <div className="input-group-append">
                                    <span className="input-group-text">upload</span>
                                </div>
                            </div>
                        </div>

                        <label htmlFor="post_pdf">ou indique a url</label>
                        <input type="text" className="form-control" id="post_pdf" placeholder="url da imagem para destque" value={post.image} onChange={(e) => setPost({ ...post, image: e.target.value })} />

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">fechar</button>

                    </div>
                </div>
            </div>
        </div>
    )
}