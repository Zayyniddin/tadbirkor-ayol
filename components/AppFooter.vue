<template>
  <div class="w-full px-3 pt-12 pb-6 bg-[#01534d]">
    <footer class="flex justify-center">
      <div class="f-container">
        <div
          class="w-full mb-4 grid grid-cols-4 gap-14 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-10">
          <div class="col-span-1">
            <div class="mb-6">
              <nuxt-link :to="localePath(`/`)">
                <svg
                  width="60"
                  height="28"
                  viewBox="0 0 60 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M28.9731 0.00377426H0V5.83619H7.60287V28H14.5893V5.83619H28.9731C28.9731 5.83619 31.2334 6.03101 32.8773 8.16997C34.5211 9.72447 35.1376 12.2521 35.1376 12.2521L38.8358 5.25377C38.8358 5.25377 37.3804 2.91998 34.9321 1.55929C31.8499 -0.153307 28.9731 0.00377426 28.9731 0.00377426Z"
                    fill="url(#paint0_linear_5_701)" />
                  <path
                    d="M16.0254 28.0001V7.19804H23.0118V22.1677H28.9708C28.9708 22.1677 32.2585 22.1677 34.5189 16.9187C36.7792 11.6687 42.7384 0.00390625 42.7384 0.00390625H46.4373L59.9985 28.0001H52.6018L50.7518 24.5005H38.8336C38.8336 24.5005 39.7295 23.3336 40.6836 21.5843C41.5051 20.0767 42.1217 18.4732 42.1217 18.4732H48.2862L44.3825 10.5029C44.3825 10.5029 41.6765 18.3335 38.6287 23.1398C35.5463 28.0001 28.9708 28.0001 28.9708 28.0001H16.0254Z"
                    fill="white" />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5_701"
                      x1="36.576"
                      y1="10.1141"
                      x2="-0.152446"
                      y2="5.77674"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#B8B8B8" />
                      <stop offset="0.105769" stop-color="white" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </nuxt-link>
            </div>
            <p class="text-xs text-white mb-2">
              Tadbirkor ayol — bugun bu so‘z o‘zbek ayoli uchun begona emas.
              Uddaburon, fidoyi, yangilik yarata oladigan va boshqalarga yordam
              bera oladigan ayollar soni yurtimizda tobora ortib bormoqda.
            </p>
          </div>
          <div>
            <p class="text-sm font-bold mb-6 text-white/50">
              {{ $t("footer.usefull_linkes") }}
            </p>
            <div class="w-full flex flex-col gap-4">
              <nuxt-link
                :to="localePath(`/lesson`)"
                class="text-white text-sm font-medium"
                >Ta'lim</nuxt-link
              >
              <nuxt-link
                :to="localePath(`/freejobs`)"
                class="text-white text-sm font-medium"
                >Ish o'rinlari</nuxt-link
              >
              <nuxt-link
                :to="localePath(`/news`)"
                class="text-white text-sm font-medium"
                >Yangiliklar</nuxt-link
              >
              <nuxt-link
                :to="localePath(`/questions`)"
                class="text-white text-sm font-medium"
                >Savol va takliflar</nuxt-link
              >
              <nuxt-link
                :to="localePath(`/market`)"
                class="text-white text-sm font-medium"
                >Mahsulot va xizmat sotish</nuxt-link
              >
            </div>
          </div>
          <div>
            <p class="text-sm font-bold mb-6 text-white/60">
              {{ $t("nav.contact") }}
            </p>
            <div class="w-full flex flex-col gap-4">
              <a href="#" class="text-white text-sm font-medium">info@xb.uz</a>
              <a href="#" class="text-white text-sm font-medium"
                >+998 (71) 210-20-02</a
              >
              <a href="#" class="text-white text-sm font-medium">{{
                $t("footer.address")
              }}</a>
            </div>
          </div>
          <div>
            <div class="w-full mb-6">
              <p class="text-sm font-bold mb-6 text-white/60">
                {{ $t("footer.credit_payment") }}
              </p>
              <p
                class="text-xs text-white mb-3"
                v-html="$t('footer.credit_payment_info')"></p>
              <div class="mb-4">
                <a target="_blank" href="https://xazna.uz/">
                  <img
                    class="w-fit h-9 object-contain"
                    src="@/assets/images/xaznalogo.png"
                    alt="" />
                </a>
              </div>
              <div class="w-full flex gap-2 items-center">
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=uz.tune.xazna&hl=ru&gl=US&pli=1">
                  <img
                    class="h-6"
                    src="@/assets/images/googlestorelogo.png"
                    alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://apps.apple.com/ru/app/xazna/id1642489915">
                  <img class="h-6" src="@/assets/images/appstore.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full border-t flex justify-between gap-3 pt-4 max-md:flex-col">
          <div
            class="flex items-center gap-2 max-md:w-full max-md:justify-center">
            <nuxt-link
              to="/guidedoc"
              class="text-white text-sm font-bold hover:text-green-600"
              >{{ $t("footer.controller") }}</nuxt-link
            >
            <nuxt-link
              to="/stepdoc"
              class="text-white text-sm font-bold hover:text-green-600"
              >{{ $t("footer.take_credit") }}</nuxt-link
            >
          </div>
          <p class="text-sm text-gray-500 max-md:text-center">
            {{ $t("footer.about_company") }}
          </p>

          <div class="items-center gap-2 flex-wrap hidden">
            <a
              target="_blank"
              href="https://www.instagram.com/smartmarketofficial"
              class="h-8 w-8">
              <img class="w-full" src="@/assets/images/instagram.png" alt="" />
            </a>
            <a
              target="_blank"
              href="https://t.me/smartmarketofficial"
              class="h-8 w-8">
              <img class="w-full" src="@/assets/images/telegram.png" alt="" />
            </a>
            <a target="_blank" href="#" class="h-8 w-8">
              <img class="w-full" src="@/assets/images/facebook.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
// LANG
const localePath = useLocalePath();
</script>
