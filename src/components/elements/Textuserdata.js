const Textuserdata = ({userdata}) => {
    return(
        <div className="userdata-title">
            <h1>{userdata.title}</h1>
            <p>{userdata.createdAt}</p>
        </div>
    );
}

export default Textuserdata