<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Link, Head, useForm, usePage } from '@inertiajs/vue3';
import PageTitleBox from '@/Components/PageTitleBox.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';
import Dropdown from 'primevue/dropdown';


import { ref } from 'vue';
import Swal from 'sweetalert2'; 

const page = usePage();  
const ObjSubtitle = ref([
    { message: 'รายการข้อมูลโบรชัวร์ Brochures' },
    { message: 'แก้ไขข้อมูลโบรชัวร์ Brochures' },
]);

const props = defineProps({ 
    brochures: {
        type: Object,
        default: () => ({}),
    } 
});
 
const brochures = props.brochures
const date = new Date();
const currentDate = date.toDateString();
 
const form = useForm({
    images_name: (brochures.images_name!=null)? '/storage/images/brochures/'+brochures.images_name : null, 
    description: brochures.description,
    status: brochures.status, 
});  
 
const submit = () => {
    form.put(route('brochures.update', brochures.id), {
       onFinish: () => { 
            Swal.fire({
                title: "Successfully.",
                text: page.props.flash.success,
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });
        },
    });
};
</script>

<template>
    <Head title="Brochures Edit" />

    <AuthenticatedLayout>
        <PageTitleBox titlemain="แดชบอร์ด" :subtitles="ObjSubtitle" />
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row mb-1">
                            <div class="col-md-6 responsive-mobile-title ">
                                <h4 class="header-title"> แก้ไขข้อมูลโบรชัวร์ Brochures (Brochures) </h4>
                                <p class="sub-header"> ข้อมูลประจำวันที่ : {{ currentDate }}</p>
                            </div>
                        </div>

                        <form @submit.prevent="submit" enctype="multipart/form-data">
                            <div class="row"> 
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <InputLabel for="description" value="รายละเอียดเพิ่มเติม : " />
                                        <textarea class="form-control" rows="3" v-model="form.description" placeholder="Description."></textarea>
                                        <InputError class="mt-2" :message="form.errors.description" />
                                    </div>
                                </div> 
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <InputLabel for="status-1" value="สถานะการแสดงผล : " required/> 
                                        <div class="mt-2">
                                            <div class="radio radio-success form-check-inline">
                                                <input type="radio" id="status-1" value="1" v-model="form.status" checked />
                                                <label for="status-1">
                                                    <span class="badge badge-success p-1"> Enable </span>
                                                </label>
                                            </div>
                                            <div class="radio radio-secondary form-check-inline">
                                                <input type="radio" id="status-0" value="0" v-model="form.status" />
                                                <label for="status-0">
                                                    <span class="badge badge-secondary p-1"> Disable </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <InputLabel for="images_name" value="รูปพนักงานขาย : " />
                                        <div class="mt-2 img-file-upload-1">
                                            <div class="box-image-no">
                                                <img v-if="form.images_name" :src="form.images_name" alt="Selected Image">
                                            </div>
                                        </div> 
                                        <div class="mt-1 mb-1"> Max Size Image 30MB. </div>
                                        <input type="file" id="images_name" @change="handleFileInputChange" />
                                    </div>
                                    <InputError class="mt-2" :message="form.errors.images_name" />
                                </div>

                                <div class="col-md-12 text-right">
                                    <hr>
                                    <Link :href="route('brochures.index')" class="btn btn-dark waves-effect waves-light"> <i
                                        class="fe-chevron-left"></i> ย้อนกลับ </Link> 
                                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                        <i class="fe-save"></i> บันทึก
                                    </PrimaryButton>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>
<style scoped> 
</style>