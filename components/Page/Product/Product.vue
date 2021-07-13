<template>
    <div class="compCon evenPad">
        <div class="compWrap globWrap">
            <!-- Loading -->
            <div v-if="pageLoading" class="loadingCon">
                <Skeleton/>
            </div>
            <!-- Loaded -->
            <div v-if="!pageLoading" class="pageContainer">
                <div class="productCon">
                    <div class="imageCol" >
                        <div class="imageContainer" :style="{ backgroundImage: `url(${product.picture})` }">
                            <div class="priceCon" v-if="product.price">{{product.price}}</div>
                        </div>
                    </div>
                    <div class="dataCol">
                        <div class="dataHeader">
                            <h1 class="productTitle">{{product.title}}</h1>
                            <ul>
                                <li><b>Category</b> {{product.category}}</li>
                                <li><b>Brand</b> {{product.brand}}</li>
                                <li><b>Model</b> {{product.model_number}}</li>
                                <li><b>Type</b> {{product.product_type}}</li>
                            </ul>
                        </div>
                        <div class="dataBody">
                            <p class="descTitle">Description:</p>
                            <p class="productDesc">{{product.description}}</p>
                            <button class="btnStyle1" v-on:click="modalStatus = !modalStatus">Order</button>
                        </div>
                    </div>
                </div>


                <!-- Modal -->
                <OrderModal
                :modalStatus="modalStatus"
                :product="product"
                :prodId="prodId"
                @toggle-modal="toggleModal"/>
            </div>

        </div>
    </div>
</template>

<script>
// Libs
import axios from 'axios'

// Components
import Skeleton from '@/components/Global/Skeleton'
import OrderModal from '@/components/Page/Product/OrderModal'

export default {
    data() {
        return {
            // Page logic
            pageLoading: true,
            modalStatus: false,

            // Page Data
            prodId: false,
            product: [],



        }
    },
    head() {
        return {
            title: 'Purchase ' + this.product.title + ' | Anyrep | Norwich',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.product.description
                }
            ]
        }
    },
    components: {
        Skeleton,
        OrderModal

    },
    mounted() {
        this.prodId = this.$router.currentRoute.params.id
        this.getProduct()
    },
    methods: {
        getProduct() {
            axios.get('https://api.williamyallop.com/v1/anyrep/product/' + this.prodId)
            .then((response) => {
                this.product = response.data
                this.pageLoading = false
                if(this.product.length === 0) {
                    this.$router.push('/store')
                }
            })
            .catch((err) => {
                console.log(err)
            })
        },
        toggleModal() {
            this.modalStatus = !this.modalStatus
        }
    }
}
</script>

<style scoped>
.compCon {
    padding-top: 40px;
}
/* Product */
.pageContainer {
    width: 100%;
}
.breadcrumbCon {
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 1px solid #D8D8D8;
    padding-bottom: 10px;
}
.productCon {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}
.imageCol {
    width: 30%;
    padding: 10px;
    background-color: #FFF;
    border: 1px solid #F6F6F6;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.imageContainer {
    width: 100%;
    max-width: 400px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    position: relative;
}
.imageContainer::after {
    padding-bottom: 100%;
    display: block;
    content: '';
}
.priceCon {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background-color: var(--secondary-bg-color);
    border-radius: 20px;
    color: #FFF;
    font-weight: bold;
}



.dataCol {
    width: 70%;
    padding-left: 20px;
}
.dataHeader {
    width: 100%;
    padding: 30px;
    background-color: #FFF;
    border: 1px solid #F6F6F6;
    border-radius: 20px;
}   
.productTitle {
    font-size: 20px;
    margin-bottom: 10px;
}
.dataHeader ul {
    padding: 0;
    list-style-type: none;
}
.dataHeader ul li {
    margin-top: 2px;
}
.dataHeader ul li:first-child {
    margin-top: 0;
}
.dataBody {
    width: 100%;
    padding: 30px;
    background-color: #FFF;
    border: 1px solid #F6F6F6;
    border-radius: 20px;
    margin-top: 10px;
}
.descTitle {
    font-weight: bold;
    margin-bottom: 10px;
}
.productDesc {
    margin-bottom: 20px;
}

/* Loading */
.loadingCon {
    width: 100%;
    height: 500px;
    overflow: hidden;
    border-radius: 20px;
}


@media only screen and (max-width: 900px) {
    .dataCol {width: 100%; padding-left: 0; margin-top: 10px;} 
    .imageCol {width: 100%;} 
}
</style>