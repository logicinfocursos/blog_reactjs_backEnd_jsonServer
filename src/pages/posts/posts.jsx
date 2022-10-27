import { useEffect, useState } from 'react'

import { apiGET } from '../../services/api/apiGET'
import { PostView, PostDelete, Breadcrumb } from '../../components'



export default function Posts() {

    const [posts, setPosts] = useState([])
    const [postFeatured, setPostFeatured] = useState([])
    const [comments, setComments] = useState([])



    const fetchData = async () => {

        const result = await apiGET('posts')
        const resultComments = await apiGET('comments')
        setComments(resultComments.data.filter((c) => c.status == 1))

        setPosts(result.data)
    }



    useEffect(() => {

        fetchData()

    }, [])



    if (!posts) return <></>


    return (
        <div className="content-wrapper">

            <Breadcrumb title="posts" />

            <section className="content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <a href={`/post/add`} className="btn btn-secondary"><i className="fas fa-plus mr-3"></i>  criar um novo post</a>
                                    <div className="card-tools">
                                        <div className="input-group input-group-sm" style={{ width: 150 }}>
                                            <input type="text" name="table_search" className="form-control float-right" placeholder="pesquisar" />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-default">
                                                    <i className="fas fa-search" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body table-responsive p-0" style={{ height: 500 }}>
                                    <table className="table table-head-fixed text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>image</th>
                                                <th>title</th>
                                                <th>category</th>
                                                <th>coments</th>
                                                <th>st</th>
                                                <th>dt</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                posts && posts.length > 0

                                                    ? posts.map((item, key) => {
                                                        return (
                                                            <tr key={key}>

                                                                <PostView postFeatured={postFeatured} />

                                                                <PostDelete postFeatured={postFeatured} />

                                                                <td>{item.id}</td>
                                                                <td><img src={item.imageblob ? item.imageblob : item.image ? item.image : "https://via.placeholder.com/200"} className="img-thumbnail" width={70} height={70} alt="imagem do post" title="imagem do post" /></td>
                                                                <td>{item.title}</td>
                                                                <td>{item.categories}</td>
                                                                <td>{comments.filter((c) => c.postid == item.id).length}</td>
                                                                <td>{item.status}</td>
                                                                <td>{item.created_at}</td>
                                                                <td>
                                                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                                        <button type="button" className="btn btn-link" data-toggle="modal" data-target="#postView_modal" onClick={() => setPostFeatured(item)}><i className="fas fa-eye text-secondary"></i></button>
                                                                        <a href={`/post/${item.id}`} className="btn btn-link"><i className="fas fa-pen text-primary"></i></a>
                                                                        <button type="button" className="btn btn-link" data-toggle="modal" data-target="#postDelete_modal" onClick={() => setPostFeatured(item)}><i className="fas fa-trash text-danger"></i></button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                    : <></>
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}