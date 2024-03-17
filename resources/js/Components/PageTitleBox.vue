<script setup>
import { ref, onMounted } from 'vue'; 
import { useForm, Link, usePage } from '@inertiajs/vue3'; 
import Swal from 'sweetalert2'; 
import Dropdown from 'primevue/dropdown';

const props = defineProps({
    titlemain: {
        type: String, 
    },
    subtitles: {
        type: Object,
    } 
});   
</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">
                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item">
                            <a> <span> {{ props.titlemain }}</span> </a>
                        </li>
                        <li class="breadcrumb-item active" v-for="(item, index) in props.subtitles" :key="index"> {{ item.message }}</li>
                    </ol>
                </div>
                <h5 class="page-title d-flex align-items-center"> จัดการข้อมูล </h5>
            </div>
        </div>
    </div>
</template>
<style scope> 
</style>