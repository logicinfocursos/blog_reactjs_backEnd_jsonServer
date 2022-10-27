export const PostBody = ({ postFeatured }) => {

    if (!postFeatured) return <></>

    return (

        <>
           <img src={postFeatured.featureImage} className="img-thumbnail" width={70} height={70} />
            <p>{postFeatured.title}</p>
            <p>{postFeatured.categories}</p>
     {/*        <p>{postFeatured.comments.length ? postFeatured.comments.length : 0}</p> */}
            <p>{postFeatured.created_at}</p>
        </>
    )
}