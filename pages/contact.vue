<script lang="ts" setup>
</script>

<template>
    <div class="">
        <div
            class="bg-[url('~/assets/img/btc-bg.jpg')] relative bg-cover bg-center h-[300px] w-full before:w-full before:h-full before:absolute before:bg-slate-900/50 before:z-0">
            <div class="absolute z-50 top-1/3 left-0 w-full sm:top-1/2 text-white text-center">
                <h1 class="text-3xl tracking-wider">Contact Us</h1>
                <nuxt-link to="/" class="text-violet-300 hover:text-primary-hover">
                    Home</nuxt-link>
                |
                <nuxt-link to="/service" class="text-violet-300 hover:text-primary-hover">
                    Service</nuxt-link>
            </div>
        </div>

        <div>
            <div class=" py-12 px-4 sm:px-6 lg:px-8">
                <div class=" grid sm:grid-cols-2 gap-y-4  py-10 sm:px-6 lg:px-8 ">
                    <!-- Map Section -->
                    <div class="w-full h-full sm:w-1/2 ">

                        <div class="row g-5">
                            <div class="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s"
                                style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                                <p class="mb-2">Our office:</p>
                                <h4 class="text-2xl my-5">312 Lovely Street, NY</h4>
                                <hr class="w-50"> <br>
                                <p >Call us:</p>
                                <h4 class="text-2xl my-5">+1 401 594 9299</h4>
                                <hr class="w-50"> <br>
                                <p>Mail us:</p>
                                <h4 class="text-2xl my-5">service@springfieldinvest.com</h4>
                                <hr>
                             
                            </div>
                            <div class="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s"
                                style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                                <!-- <p class="mb-4">The contact form is currently inactive. Get a functional and working contact
                                    form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little
                                    code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> -->

                            </div>
                        </div>
                    </div>

                    <!-- Form Section -->
                    <div class="w-full h-full  sm:px-4">
                        <form class="w-full max-w-lg">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        First Name
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" placeholder="First Name">
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide  text-xs font-bold mb-2"
                                        for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200  border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-last-name" type="text" placeholder="Last Name">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-email">
                                        Email
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-email" type="email" placeholder="example@example.com">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-message">
                                        Message
                                    </label>
                                    <textarea
                                        class="appearance-none block w-full bg-gray-200  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-message" placeholder="Enter your message"></textarea>
                                </div>
                        </div>
                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3 px-5 mt-5">
                                <button_>send</button_>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001584.5787337353!2d-78.41083034159804!3d42.71991781708411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sng!4v1697368287932!5m2!1sen!2sng" 
       class="w-full h-[400px]" style="border:0;" allowfullscreen="true" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div></template>

<style lang="scss" scoped></style>
