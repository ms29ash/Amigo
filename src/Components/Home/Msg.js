import tw from "tailwind-styled-components";
import { UserState } from "../../context/UserProvider";

function Msg({ msg }) {
  const { user } = UserState();
  console.log(msg);
  return (
    <>
      {user._id === msg.sender._id ? (
        <SendContainer $type={true}>
          <SendWrapper $type={true}>
            <p>{msg?.content}</p>
            <Small>2:00 pm</Small>
          </SendWrapper>
        </SendContainer>
      ) : (
        <ReceiveContainer $type={true}>
          <ReceiveWrapper $type={true}>
            <p>{msg?.content}</p>
            <Small>2:00 pm</Small>
          </ReceiveWrapper>
        </ReceiveContainer>
      )}
    </>
  );
}

export default Msg;

const Container = tw.div`flex my-3  `;
const Wrapper = tw.div`max-w-[300px] p-4 rounded-xl rounded-br-none mx-3 `;
const Small = tw.small`flex justify-end text-xs mt-2 `;
const SendContainer = tw(Container)`  justify-end `;
const ReceiveContainer = tw(Container)` justify-start} `;
const ReceiveWrapper = tw(Wrapper)` bg-gray text-white `;
const SendWrapper = tw(Wrapper)`bg-green text-black `;
