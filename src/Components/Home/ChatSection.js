import ScrollableFeed from "react-scrollable-feed";
import Msg from "./Msg";

function Chat() {
    return (
        <ScrollableFeed forceScroll={true} >
            {Array(3)
                .fill("")
                .map((i, n) => {
                    return <Msg receive={true} />;
                })}
            {Array(3)
                .fill("")
                .map((i, n) => {
                    return <Msg receive={false} />;
                })}
        </ScrollableFeed>
    );
}

export default Chat;
