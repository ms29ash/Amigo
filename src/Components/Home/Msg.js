import tw from "tailwind-styled-components";
import { UserState } from "../../context/UserProvider";
import moment from "moment/moment";

function Msg({ msg }) {
  const { user } = UserState();
  console.log(msg);
  return (
    <>
      {user._id === msg.sender._id ? (
        <SendContainer $type={true}>
          <SendWrapper $type={true}>
            <Text>{msg?.content}</Text>
            <Small>{moment(msg?.updatedAt).format(" h:mm a")}</Small>
          </SendWrapper>
        </SendContainer>
      ) : (
        <ReceiveContainer $type={true}>
          <ReceiveWrapper $type={true}>
            <Text>{msg?.content}</Text>
            <Small>{moment(msg?.updatedAt).format(" h:mm a")}</Small>
          </ReceiveWrapper>
        </ReceiveContainer>
      )}
    </>
  );
}

export default Msg;

const Container = tw.div`flex my-3  `;
const Wrapper = tw.div`max-w-[300px] py-2 px-4  mx-3 rounded-xl `;
const Text = tw.p`pr-12`;
const Small = tw.small`flex justify-end text-xs opacity-60 font-bold `;
const SendContainer = tw(Container)`  justify-end `;
const ReceiveContainer = tw(Container)` justify-start `;
const ReceiveWrapper = tw(Wrapper)` bg-gray text-white  rounded-bl-none`;
const SendWrapper = tw(Wrapper)`bg-green text-black  rounded-br-none `;
