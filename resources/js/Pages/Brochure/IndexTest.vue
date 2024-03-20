<script setup>
    import { ref } from 'vue';
    import { Head } from '@inertiajs/vue3';
    import { Link } from '@inertiajs/vue3';
    
    const props = defineProps({
        brochure: {
            type: Object
        },
        currentQuery: {
            type: Object
        },
        oldestQuery: {
            type: Object
        }
    });
    
    const oldestQueryID  = (props.oldestQuery!=null)? props.oldestQuery.id : null;
    const currentQueryID = (props.currentQuery!=null)? props.currentQuery.id : null;
    const imagesName     = '/storage/images/brochures/'+props.brochure.images_name;
 
    const isOpen = ref(false);
    const toggleClass = () => {
        isOpen.value = !isOpen.value; 
        console.log(isOpen.value)
    };
</script>

<template>
    <Head title="Brochure" />
    <img :src="imagesName" alt="" width="100%">
     
    <div class="footer-icon">
        <div class="mr-auto">
            <div class="box-icon"  @click="toggleClass"> 
                <i class="fe-phone-call icon-font-operator"></i>
            </div>
        </div>

        <div>
            <Link :href="route('brochure.index', oldestQueryID)" class="box-icon" v-if="oldestQueryID!=null"> 
                <i class="fe-chevron-left icon-font-operator"></i>
            </Link> 
        </div>
        <div>
            <Link :href="route('brochure.index', currentQueryID)" class="box-icon" v-if="currentQueryID!=null"> 
                <i class="fe-chevron-right icon-font-operator"></i>
            </Link>  
        </div> 
    </div> 


    <!-- Modal -->
    <div class="modal fade" :class="{ 'show': isOpen, '': !isOpen }" id="contentModal">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content"> 
                <div class="modal-body">
                    <h4>Contact us</h4>
                </div> 
                <div class="modal-footer d-flex justify-content-center">
                    <button type="button" class="btn btn-dark btn-rounded width-md waves-effect waves-light" @click="toggleClass">Close</button> 
                </div>
            </div>
        </div>
    </div>
</template> 

<style scoped>
    .modal-content {
        border-radius: 0;
    }

    .mr-auto {
        margin-right: auto;
    }
    
    .footer-icon {
        width: 100%;
        position: fixed;
        bottom: 0.5rem; 
        display: flex;
        padding: 0.5rem;
    }

    .icon-font-operator {
        font-size: 35px;
        color: #FFF;
    }

    .box-icon { 
        background: #00000059;
        border-radius: 10px;
        padding: 0.7rem;
        margin: 0 5px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
    }

    .box-icon:hover {
        background: #0000008e;
    }

    .fade.show {
        opacity: 1;
        display: block !important;
    }

    .modal.show .modal-dialog {
        background: #000000b8 !important;
        margin: 0 !important;
        padding: 1rem !important;
    }
</style>