export const ButtonVariant = {
    primary: "focus:outline-none bg-green text-white font-semibold rounded-md hover:bg-green-dark transition duration-300 ease-in-out flex-auto",
    secondary: "focus:outline-none bg-white text-green-dark font-semibold rounded-md hover:bg-gray-100 transition duration-300 ease-in-out flex-auto",
    inverse_secondary: "focus:outline-none bg-white text-green-dark font-semibold rounded-md hover:bg-green hover:text-white transition duration-300 ease-in-out flex-auto",
    outlined: "focus:outline-none bg-white border-green border-2 text-green-dark font-semibold rounded-md hover:bg-green-dark hover:text-white hover:border-green-dark transition duration-300 ease-in-out flex-auto",

};

export const ButtonSize = {
  sm: "py-2 px-4",
  lg: "py-3 px-6"
}

export const AlertVariant = {
  success: [
    "space-x-2 bg-green p-4 rounded flex items-center my-2 shadow-lg mx-auto",
    "text-green-dark text-2xl transition duration-150 ease-in-out",
    "cursor-pointer text-gray-100 hover:text-green-dark text-2xl transition duration-150 ease-in-out"
  ],
  danger: [
    "space-x-2 bg-red-400 p-4 rounded flex items-center my-2 shadow-lg mx-auto",
    "text-gray-100 text-2xl transition duration-150 ease-in-out",
    "cursor-pointer text-gray-100 hover:text-red-900 text-2xl transition duration-150 ease-in-out"
  ]
}
