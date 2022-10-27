import { useEffect, useState, useRef, useMemo } from 'react'
import JoditEditor from "jodit-react"
import { useParams } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'

import { getCode } from '../../functtions/numberManipulation'
import { apiGET, apiPOST, apiPUT } from '../../services/api'
import { PostView, PostDelete, Breadcrumb, ImageFeatureChange } from '../../components'
import { CommentList } from './commentList'



export default function Post() {

    //const urlParams = new URLSearchParams(window.location.search)
    //const id = urlParams.get('id') 
    
    const [post, setPost] = useState([])
    const [categories, setCategories] = useState([])
    const [authors, setAuthors] = useState([])
    const [medias, setMedias] = useState([])
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState([])
    const [content, setContent] = useState("")
    const editor = useRef(null)
    const { id } = useParams()
    const operation = id == 'add' ? 'add' : 'edit'
    const config = { readonly: false }



    const fetchData = async () => {

        if (operation !== 'add') {
            const resultPost = await apiGET(`posts/${id}`)
            setPost(resultPost.data)

            const resultMedias = await apiGET('medias')
            setAuthors(resultMedias.data.filter((m) => m.postid == id && m.status == 1))

            const resultComments = await apiGET('comments')
            setComments(resultComments.data.filter((c) => c.postid == id && c.status == 1))
            setComment(resultComments.data.filter((c) => c.postid == id && c.status == 1)[0])



            if (resultPost.data.text) setContent(resultPost.data.text)
        }

        const resultCategories = await apiGET('categories')
        setCategories(resultCategories.data)

        const resultAuthors = await apiGET('authors')
        setAuthors(resultAuthors.data)
    }



    useEffect(() => {

        fetchData()

    }, [])



    if (!post) return <></> //<NotFoundPost />



    return (
        <div className="content-wrapper">

            <Breadcrumb
                title="post"
                previewPage='posts'
                previewPageLink='posts'
            />

            <PostView postFeatured={post} />

            <PostDelete postFeatured={post} />

            <ImageFeatureChange
                post={post}
                setPost={setPost}
                handleFile={handleFile}
            />

            <section className="content">
                <div className="container-fluid">
                  
                    <FormPost
                        editor={editor}
                        content={content}
                        config={config}
                        setContent={setContent}
                        post={post}
                        setPost={setPost}
                        operation={operation}
                        categories={categories}
                        authors={authors}
                        comments={comments}
                        setComment={setComment}
                        comment={comment}
                    />

                </div>
            </section>
        </div>
    )
}



export const FormPost = ({ editor, content, config, setContent, post, setPost, operation, categories, authors, comments, setComment, comment }) => {



    if (!post) return <></>

    const status = post.id && post.status == 1 ? "publicado" : post.id && post.status == 2 ? "aguardando" : post.id && post.status == 3 ? "lixeira" : "novo"
    const status_color = post.id && post.status == 1 ? "success" : post.id && post.status == 2 ? "secondary" : post.id && post.status == 3 ? "ligth" : "primary"



    return (
        <form onSubmit={(event) => submitForm(event, post, setPost, content)} id="postSubmitForm" encType="multipart/form-data" className="row">


            <FormPostPageLeft
                editor={editor}
                content={content}
                config={config}
                setContent={setContent}
                post={post}
                setPost={setPost}
                operation={operation}
                categories={categories}
                authors={authors}
                comments={comments}
                status={status}
                status_color={status_color}
                setComment={setComment}
                comment={comment}
            />

            <FormPostPageRight
                post={post}
                setPost={setPost}
                categories={categories}
                authors={authors}
                status={status}
                status_color={status_color}
            />
        </form>
    )
}



export const FormPostPageLeft = ({ editor, content, config, setContent, post, setPost, operation, categories, authors, comments, status, status_color, setComment, comment }) => {



    const operation_title = operation == "add" ? "novo!" : `#${post.id} (editar esse post)`



    return (
        <div className="col-md-8">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">{operation_title} <strong>{post.title ? post.title.substr(0, 70) + (post.title && post.title.length > 70 ? ' (...)' : '') : ""}</strong></h1>
                </div>

                <div className="card-body">

                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => {
                            // setContent(newContent.target.innerHTML);
                        }}
                        onChange={(newContent) => {
                            setContent(newContent);
                        }}
                    />

                </div>

                <div className="card-footer">

                    <Buttons post={post} />

                </div>

            </div>

            <div className="card">
                <div className="card-header">
                    preview do post
                </div>
                <div className="card-body">

                    <span dangerouslySetInnerHTML={{ __html: content }} />

                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    comentários do post
                </div>
                <div className="card-body">

                    <CommentList
                        comments={comments}
                        comment={comment}
                        setComment={setComment}

                    />

                </div>
            </div>

        </div>
    )
}



export const FormPostPageRight = ({ post, setPost, categories, authors, status, status_color }) => {



    const image = post.imageblob ? post.imageblob : post.image ? post.image : "https://via.placeholder.com/200"



    return (
        <div className="col-md-4">

            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">info <span className={`badge badge-${status_color} ml-3`}>{status}</span></h3>

                </div>

                <div className="card-body">

                    <Buttons post={post} />

                    {
                        post.id
                            ? <><a data-toggle="modal" data-target="#postImageFeature_modal"><img src={image} className="img-thumbnail mb-3 mt-3" width={400} height={200} /></a><br /></>
                            : <><img src={image} className="img-thumbnail mb-3 mt-3" width={400} height={200} /><br /></>
                    }
                    {
                        post.id
                            ? <button data-toggle="modal" className='btn btn-link mb-5' data-target="#postImageFeature_modal">alterar a imagem</button>
                            : <></>
                    }

                    <div className="form-group">
                        <label htmlFor="post_title">título do post</label>
                        <input type="text" className="form-control" id="post_title" placeholder="titulo do post" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
                        <small id="post_title_errorMessage" className="form-text h6" style={{ color: "red", display: "none" }}><strong>*** um [título para o post] é requerido ***</strong></small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="post_subtitle">subtítulo do post</label>
                        <input type="text" className="form-control" id="post_subtitle" placeholder="subtitulo do post" value={post.subtitle} onChange={(e) => setPost({ ...post, subtitle: e.target.value })} />
                        <small id="post_subtitle_errorMessage" className="form-text h6" style={{ color: "red", display: "none" }}><strong>*** um [subtítulo para o post] é requerido ***</strong></small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="post_tags">tags do post</label>
                        <textarea type="text" className="form-control" id="post_tags" rows="3" placeholder="tags do post" value={post.tags} onChange={(e) => setPost({ ...post, tags: e.target.value })}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="post_obs">observações (esse campo não será exibido no post)</label>
                        <textarea type="text" className="form-control" id="post_obs" rows="3" placeholder="observações" value={post.obs} onChange={(e) => setPost({ ...post, obs: e.target.value })}></textarea>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label for="post_categories">categorias</label>
                            <select id="post_categories" className="form-control" value={post.categories} onChange={(e) => setPost({ ...post, categories: e.target.value })}>

                                <option selected>escolher...</option>

                                {
                                    categories && categories.length > 0

                                        ? categories.map((item, key) => {

                                            return <option value={item.slug} key={key}>{item.name}</option>

                                        })

                                        : <option>...</option>
                                }

                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <label for="post_author">autor</label>
                            <select id="post_author" className="form-control" value={post.author} onChange={(e) => setPost({ ...post, author: e.target.value })}>

                                <option selected>escolher...</option>

                                {
                                    authors && authors.length > 0

                                        ? authors.map((item, key) => {

                                            return <option value={item.position} key={key} >{item.name}</option>

                                        })

                                        : <option>...</option>
                                }

                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <label for="inputState">status</label>
                            <select id="inputState" className="form-control" value={post.status} onChange={(e) => setPost({ ...post, status: e.target.value })}>

                                <option selected value={1}>ativo</option>
                                <option value={2}>para publicar</option>
                                <option value={3}>lixeira</option>

                            </select>
                        </div>
                    </div>
                </div>

                <div className="card-footer">

                    <Buttons post={post} />

                </div>

            </div>

            <div className="card">
                <div className="card-header">
                    informações complementares
                </div>
                <div className="card-body">
                    <br />
                    <label htmlFor="post_pdf">pdf</label>
                    <input type="text" className="form-control" id="post_pdf" placeholder="pdf" value={post.pdf} onChange={(e) => setPost({ ...post, pdf: e.target.value })} />
                    <br />
                    <label htmlFor="post_pdfText">texto pdf</label>
                    <input type="text" className="form-control" id="post_pdfText" placeholder="texto do pdf" value={post.pdftext} onChange={(e) => setPost({ ...post, pdftext: e.target.value })} />
                    <br />
                    <label htmlFor="post_url">url</label>
                    <input type="text" className="form-control" id="post_url" placeholder="url" value={post.url} onChange={(e) => setPost({ ...post, url: e.target.value })} />
                    <br />
                    <label htmlFor="post_urlText">texto url</label>
                    <input type="text" className="form-control" id="post_urlText" placeholder="texto da url" value={post.urltext} onChange={(e) => setPost({ ...post, urltext: e.target.value })} />
                    <br />
                    <label htmlFor="post_video">vídeo</label>
                    <input type="text" className="form-control" id="post_video" placeholder="vídeo" value={post.video} onChange={(e) => setPost({ ...post, video: e.target.value })} />
                    <br />
                    <label htmlFor="post_videoText">texto vídeo</label>
                    <input type="text" className="form-control" id="post_videoText" placeholder="texto do vídeo" value={post.videotext} onChange={(e) => setPost({ ...post, videotext: e.target.value })} />
                </div>

                <div className="card-footer">

                    <Buttons post={post} />

                </div>
            </div>
        </div>
    )
}



export const submitForm = (event, post, setPost, content) => {

    event.preventDefault()

    const newPost = {
        title: post.title ?? "",
        code: post.code ?? getCode(5, "post_"),
        subtitle: post.subtitle ?? "",
        author: post.author ?? "",
        categories: post.categories ?? "",
        tags: post.tags ?? "",
        obs: post.obs ?? "",
        text: content,
        image: post.image,
        imageblob: "",

        pdf: post.pdf ?? "",
        pdftext: post.pdftext ?? "",
        url: post.url ?? "",
        urltext: post.urltext ?? "",
        video: post.video ?? "",
        videotext: post.videotext ?? "",

        tags: post.tags ?? "",
        acceptComments: true ?? "",
        status: parseInt(post.status),
        created_at: post.id && post.id > 0 ? post.created_at : Date(),
        updated_at: Date()
    }


    console.log(">>> submitForm newPost", newPost)
    if (post.id && post.id > 0) newPost.id = post.id

    savePost(newPost)
}



export const savePost = async (itemToSave) => {

    let result = false

    if (itemToSave.id) {
        result = await apiPUT('posts', itemToSave)

        console.log(">>> put result", result)
        toast.danger("post atualizado com sucesso!")

        //else toast.danger("não consegui salvar, ocorreu um erro!")

    }

    else {
        result = await apiPOST('posts', itemToSave)
        // toast.danger("post atualizado com sucesso!")

        const resultSearchCode = await apiGET('posts', itemToSave.code, 'code')

        window.location.href = `/post/${resultSearchCode.data[0].id}`
    }

    return result
}



export const handleFile = async (e, post, setPost) => {

    if (e.target.files[0]) {
        const file = e.target.files[0]


        /*  if (file.size > 100000) {
             console.log(">>> arquivo muito grande")
             return false
         } */

        let reader = new FileReader();

        reader.readAsDataURL(file)

        reader.onload = (async (event) => {

            const imageblob = event.target.result
            const _post = {
                ...post,
                imageblob: event.target.result
            }

            setPost(_post)

            await apiPUT('posts', _post)
        })
    }
}



export const Buttons = ({ post }) => {

    return (
        <>

            <button type="submit" className="btn btn-primary">salvar</button>

            {
                post.id ? <button type="button" className="btn btn-danger ms-3" data-toggle="modal" data-target="#postDelete_modal">excluir post</button> : <></>
            }

            <a href={`/post/add`} className="btn btn-secondary">criar um novo post</a>
        </>
    )
}