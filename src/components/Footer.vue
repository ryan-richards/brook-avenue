<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column has-text-left">
          <p>Brook Avenue</p>
          <p>info@brookavenue.co.uk</p>
          <a
            href="https://tvypnxilpffosyzymcfm.supabase.co/storage/v1/object/public/blotion-assets/Brook_Avenue_Booking_T_Cs_2023.pdf"
          >
            <p>Terms & Conditions © 2024</p>
          </a>
          <div class="block pt-3">
            <a href="https://www.facebook.com/brookavenuegelato">
              <span
                class="iconify"
                data-icon="akar-icons:facebook-fill"
                data-width="22"
                data-height="22"
              ></span>
            </a>
            <a href="https://www.instagram.com/brookavenue/">
              <span
                class="iconify pl-1"
                data-icon="akar-icons:instagram-fill"
                data-width="22"
                data-height="22"
              ></span>
            </a>
            <router-link to="/contact">
              <span
                class="iconify pl-1"
                data-icon="akar-icons:send"
                data-width="22"
                data-height="22"
              ></span>
            </router-link>
          </div>
          <div
            class="columns is-mobile aligned-center"
            style="max-width: 200px"
          >
            <div class="column">
              <a href="https://weddinghelpni.com">
                <img
                  style="max-width: 90px"
                  src="../assets/approved-supplier.png"
                  alt=""
                />
              </a>
            </div>
            <div class="column">
              <a
                href="https://yptpiheqktfmeoisgtea.supabase.in/storage/v1/object/sign/avatars/Were_Good_To_Go_certificate_V3_English_editable.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1dlcmVfR29vZF9Ub19Hb19jZXJ0aWZpY2F0ZV9WM19FbmdsaXNoX2VkaXRhYmxlLnBkZiIsImlhdCI6MTYzNzE1NTExOSwiZXhwIjoxOTUyNTE1MTE5fQ.3LAJspYrz5B8pxnpo0AEyrRFg9KaEjGDW4soMn8WwDg"
              >
                <img
                  style="max-width: 80px"
                  src="../assets/goodwhite.png"
                  alt=""
                />
              </a>
            </div>
            <div class="column centered">
              <a
                href="https://ratings.food.gov.uk/business/en-GB/1111064/Brooke-Avenue-Belfast-City"
              >
                <img
                  style="max-width: 100px"
                  src="../assets/foodrating.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div class="column has-text-left">
          <div class="columns is-mobile">
            <div class="column">
              <p><strong>Behind the scenes.</strong></p>
              <ul>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/about">Team</router-link></li>
                <li><router-link to="/about">Process</router-link></li>
              </ul>
            </div>
            <div class="column">
              <p><strong>Things we do.</strong></p>
              <ul>
                <li><router-link to="/pricing">Flavours</router-link></li>
                <li><router-link to="/pricing">Services</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
.footer {
  color: #363636;
  font-weight: 700;
  background-color: rgb(119, 139, 121);
  margin-left: -2rem;
  margin-right: -2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 2rem;
}

a {
  text-decoration: underline;
  color: #363636;
  font-weight: 700;
}

a:hover {
  color: white;
}

.center,
.center-column,
.top,
.right,
.bottom,
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
</style>
