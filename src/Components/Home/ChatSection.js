import ScrollableFeed from "react-scrollable-feed";
import Msg from "./Msg";

function Chat() {
    return (
        <ScrollableFeed forceScroll={true} >
            {Array(3)
                .fill("")
                .map((i, n) => {
                    return <Msg key={n} receive={true} />;
                })}
            {Array(3)
                .fill("")
                .map((i, n) => {
                    return <Msg key={n * 2} receive={false} />;
                })}
        </ScrollableFeed>
    );
}

export default Chat;
