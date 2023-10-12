import tw from "tailwind-styled-components";



function Msg({ receive }) {
    return (
        <Container $type={receive}>
            <Wrapper $type={receive}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
                    consectetur.
                </p>
                <small className="flex justify-end">2:00 pm</small>
            </Wrapper>
        </Container>
    );
}

export default Msg;


const Container = tw.div`flex my-3  ${(p) =>
    p.$type == true ? "justify-start" : "justify-end"} `;
const Wrapper = tw.div` max-w-[300px] p-4 rounded-xl rounded-br-none mx-3   ${(
    p
) => (p.$type == true ? "bg-gray text-white " : "bg-green text-black")} `;
