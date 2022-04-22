const { default: blogData } = require("../data/blog");

function Header(){
    return (
        <header>
            <h1>{blogData.name}</h1>
        </header>
    )
}
export default Header