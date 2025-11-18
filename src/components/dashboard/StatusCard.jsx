import React from "react";

function StatusCard() {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 sm:px-12 mt-8">
      <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div class="flex justify-between items-start">
          <div class="flex flex-col space-y-1">
            <span class="text-sm font-medium text-gray-500">
              Ventas Totales
            </span>
            <span class="text-3xl font-bold text-gray-900">$48,250.00</span>
          </div>
          <div class="p-2 bg-green-100 rounded-full">
            <svg
              class="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          </div>
        </div>
        <div class="mt-4">
          <span class="inline-flex items-center text-sm font-semibold text-green-600">
            <svg
              class="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            +12.5% vs. mes pasado
          </span>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div class="flex justify-between items-start">
          <div class="flex flex-col space-y-1">
            <span class="text-sm font-medium text-gray-500">
              Nuevos Usuarios
            </span>
            <span class="text-3xl font-bold text-gray-900">1,240</span>
          </div>

          <div class="p-2 bg-red-100 rounded-full">
            <svg
              class="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
              ></path>
            </svg>
          </div>
        </div>
        <div class="mt-4">
          <span class="inline-flex items-center text-sm font-semibold text-red-600">
            <svg
              class="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            -3.2% vs. semana pasada style
          </span>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div class="flex flex-col space-y-2">
          <span class="text-sm font-medium text-gray-500">Total Student</span>
          <span class="text-3xl font-bold text-gray-900">25.8%</span>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full"></div>
          </div>
          <span class="text-sm text-gray-500 text-right">Objetivo: 30%</span>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div class="flex flex-col items-center justify-center h-full text-center">
          <span class="text-sm font-medium text-gray-500">Total Students</span>
          <span class="text-4xl font-bold text-gray-900 my-2">120</span>
          <span class="text-sm text-gray-500">in 2025</span>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
