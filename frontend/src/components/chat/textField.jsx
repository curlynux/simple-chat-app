const { useState } = require("react")

function Text() 
{
    const [text, setText] = useState("");
    return(<div className="chat">
        <div className="messageHistory">
            <p>text</p>
        </div>
        <div className="allInput">
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <input type="submit" name="sendMessage" value="send"/>
        </div>
    </div>)
}

export default Text;