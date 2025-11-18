import React from "react";
import dashboardimg from "../../assets/images/dashboard.jpg";
function CTA() {
  return (
    <div class="">
      <div class="mx-auto w-full sm:px-6 lg:px-8">
        <div class="relative isolate overflow-clip bg-green-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div
            aria-hidden="true"
            class="absolute right-0 top-0 -z-10 aspect-square w-full max-w-3xl translate-x-3/4 rounded-full bg-red-500/60 blur-[10rem] lg:-top-[40rem] lg:left-1/2 lg:-translate-x-1/2"
          ></div>
          <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-start">
            <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Want to partner with design experts in SaaS?
            </h2>
            <p class="mt-6 text-base text-green-300">
              We're excited to talk to you about your project requirements and
              business goals.
            </p>
          </div>
          <div class="relative mt-16 h-80 lg:mt-8 lg:h-auto">
            <img
              width="1920"
              height="1139"
              class="absolute left-0 top-0 w-[800px] max-w-none rounded-2xl bg-white/5 ring-1 ring-white/10 lg:top-24"
              src={dashboardimg}
              alt="dashboard screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
