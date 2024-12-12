import React from 'react';

const Form = () => {
    return (
<form class="max-w-sm mx-auto mb-4 justify-center w-96">
  <div class="mb-5">
      <label for="email" class="block mb-2 text-md px-3 font-medium text-black-550">Email</label>
      <input type="email" id="email" class="block w-full p-2 text-black-550 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 ">
        </input>
  </div>
  <div class="mb-5">
      <label for="name" class="block mb-2 text-md px-3 font-medium text-black-550">Name</label>
      <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
        </input>
  </div>
  <div class="mb-5">
      <label for="message" class="block mb-2 text-md px-3 font-medium text-black-550">Message</label>
      <input type="text" id="message" class="block w-full p-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 ">
        </input>
  </div>
  <div class="mb-5 max-w    ">
    <button type="submit" class="text-white bg-cyan-400 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
  </div>
</form>
    );
};

export default Form;