import React from "react";

function Table() {
  return (
    <>
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center mb-6">
          <div class="w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search students..."
              class="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <a href="#" target="blank">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Add New Student
            </button>
          </a>
        </div>

        <div class="overflow-x-auto bg-white rounded-lg shadow">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">ID</th>
                <th class="py-3 px-6 text-left">Name</th>
                <th class="py-3 px-6 text-left">Email</th>
                <th class="py-3 px-6 text-left">Grade - Section</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm">
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left">2025-123</td>
                <td class="py-3 px-6 text-left">Sample Name</td>
                <td class="py-3 px-6 text-left">sampleEmail@kerala.com</td>
                <td class="py-3 px-6 text-left">Grade 2 - B</td>
                <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center gap-4">
                    <button class="w-4 mr-2 flex flex-col items-center transform hover:text-blue-500 hover:scale-110 duration-300 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      <p className="text-xs mr-1">Edit</p>
                    </button>
                    <button class="w-4 mr-2 flex flex-col items-center transform hover:text-red-500 hover:scale-110 duration-300 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      <p className="text-xs">Delete</p>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex justify-between items-center mt-6">
          <div>
            <span class="text-sm text-gray-700">Total of 15 data</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
