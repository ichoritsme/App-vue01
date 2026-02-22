<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">รายการสินค้า</h2>

    <div v-if="loading" class="text-center"><p>กำลังโหลดข้อมูล...</p></div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <div class="row">
      <div class="col-md-3" v-for="data in Alldata" :key="data.product_id">
        <div class="card shadow-sm mb-4">
          <img
            :src="'http://localhost/App-vue01/php_api/uploads/' + data.image"
            width="70%"
            height="340"
            class="card-img-top"
            :alt="data.product_name"
          />
          <div class="card-body text-center">
            <h5 class="card-title">{{ data.product_name }}</h5>
            <p class="card-text text-muted small">{{ data.category_name }}</p>
            <p class="card-text">{{ data.price }} บาท</p>
            <router-link
              :to="'/ProductDetail?id=' + data.product_id"
              class="btn btn-sm btn-outline-primary w-100 mb-2"
            >
              ดูรายละเอียด
            </router-link>
            <button class="btn btn-primary w-100">สั่งซื้อ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "DataList",
  setup() {
    const Alldata = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/app-vue01/php_api/api_product.php");
        if (!response.ok) {
          throw new Error("ไม่สามารถดึงข้อมูลได้");
        }
        const data = await response.json();
        Alldata.value = data.success ? data.data : [];
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      Alldata,
      loading,
      error
    };
  }
};
</script>