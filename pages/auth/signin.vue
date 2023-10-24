<script  setup>
import Cookies from "js-cookie";
const url = inject("url");
const remember_me = ref(null);
const form = reactive({
  username: "",
  password: "",
});
const Login = async (e) => {
  let submit_btn = document.getElementById("sbutton");
  submit_btn.disabled = true;
  const res = await useFetch(`${url}auth/`, {
    method: "get",
    query: form,
    key: new Date().getTime().toString(),
    watch: false,
  });

  if (res.data.value.status == "success") {
    e.target.reset();
    if (remember_me.value) {
      Cookies.set('userId', res.data.value.userId, { expires: 30 })
    } else {
      Cookies.set('userId', res.data.value.userId)
    }
    useRouter().push("/user/");
  } else if(res.data.value.status == "unverified"){
    if (remember_me.value) {
      Cookies.set('userId', res.data.value.userId, { expires: 30 })
    } else {
      Cookies.set('userId', res.data.value.userId)
    }
    useRouter().push('/auth/verify/')
  }else{
    alert("User Not Found!!!");
    submit_btn.disabled = false;
  }
}
</script>

<template>
  <div class="flex justify-center">
    <br />
    <div class="h-max py-2 sm:mt-28 w-full mt-[110px]">
      <section class="">
        <div class="flex items-center justify-center px-4 py-8 mx-auto sm:px-10 sm:py-0">
          <div class="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 px-4 py-8 shadow-lg shadow-violet-300">
            <div class="space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" @submit.prevent="Login">
                <div>
                  <label for="username" class="block mb-2 text-sm font-medium">Username</label>
                  <input type="text" v-model="form.username" id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username" required />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                  <input type="password" v-model="form.password" id="password" placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
                </div><br>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" v-model="remember_me"
                        class="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="">Remember me</label>
                    </div>
                  </div>
                  <a href="#" class="text-sm font-medium text-primary-hover hover:text-violet-300">Forgot password?</a>
                </div>

                <div class="my-5 text-center">
                  <btn type="submit" id="sbutton" class=" group my-5"> 
                    <i class="fas fa-spinner !hidden group-disabled:!inline-block animate-spin "></i> Sign In
                    </btn>
                </div>

                <p class="text-sm font-light">
                  Don’t have an account yet?
                  <NuxtLink to="/auth/signup" class="font-medium text-primary-600 text-primary-hover hover:text-violet-300">
                    Sign up</NuxtLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
