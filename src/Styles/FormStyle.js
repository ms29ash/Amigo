
import tw from 'tailwind-styled-components'

export const Form = tw.form`flex flex-col items-center`
export const InputWrapper = tw.div` relative w-full min-w-[400px] my-3 flex items-center bg-lightGray  rounded-lg border-2 border-lightGray  ${p => p.$error === true ? 'border-red-500' : ""} `
export const Input = tw.input`
 px-4 py-2  bg-lightGray flex-1   outline-none rounded-lg
`
export const Button = tw.button`bg-green w-full py-2 rounded-lg text-black font-bold text-lg my-2 hover:bg-sgreen disabled:opacity-25  `

export const ShowPass = tw.span`text-sm mr-4 cursor-pointer hover:text-green select-none `

export const Error = tw.small`absolute text-red-500  right-0 -bottom-4 text-xs`