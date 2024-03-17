<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PageTitleBox from '@/Components/PageTitleBox.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

const ObjSubtitle = ref();
</script>

<template> 
    <Head title="Dashboard" />
    <AuthenticatedLayout>
        <PageTitleBox titlemain="แดชบอร์ด" :subtitles="ObjSubtitle" />

        <div class="card"> 
            <div class="card-body">
                <blockquote class="card-bodyquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.</p>
                    <footer>Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </div>
        </div> 
    </AuthenticatedLayout>
</template>
