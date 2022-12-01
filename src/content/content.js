import './content.css'

export default function Content() {
    return (
        <div className='home-page-layout'>
            {createPage("server-tutorial")}
            {createPage("code-cung-knight")}
        </div>
    );
}


function createPage(content){
    let link = ""
    switch(content){
        case "code-cung-knight":
            link = "bkiJu9FV_rY"
            break
        case "server-tutorial":
            link = "5zQ-qSX-e_U"
            break
        default:
            link = ""
    }
    return (
        <div className="home-page-topic-margin">
            <div className='topic-background'>
                {fetchImage(content, "background")}
                {fetchImage(content, "logo")}
                {createContentBox(content, link)}
            </div>
        </div>
    )
}

function fetchImage(content, name) {
    content += "-"
    const isBackground = name === 'background'
    let fullName = content + name + (isBackground ? ".jpg" : ".svg")
    return (
        <div className={"topic-" + name + "-layout"}>
            <img id={"topic-" + name + "-image"} src={process.env.PUBLIC_URL + "images/" + fullName} alt="" />
        </div>
    )
}

function fetchMedia(link) {
    return (
        <div className="topic-video-layout">
            <iframe id="topic-video"
                width="1200" height="675" 
                src={"https://www.youtube.com/embed/" + link}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture" 
            />
        </div>
    )
}

function createContentBox(content, link){
    return (
        <div className='topic-content-margin'>
            <div className="topic-content-box">
                {fetchMedia(link)}
                {fetchImage(content, "slogan")}
            </div>
        </div>
    )
}