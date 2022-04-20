import "./Container.css"
import Allfeeds from "../../Components/AllFeeds/Allfeeds"
import Allposts from "../../Components/AllPosts/Allposts"
import Feed from "../../Components/Feeds/Feed"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Suggestion from "../../Components/suggestions/Suggestion"


function Container() {
  return (
    <div className="post-container">
    <Sidebar />
    {/* <Allfeeds /> */}
    {/* <Suggestion /> */}
    </div>
  )
}

export default Container