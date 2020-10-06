<template>
    <div class="compCon">
        <div class="compWrap globWrap">
            
            <!-- Loading -->
            <div v-if="!productsLoaded" class="loadingCon">
                <div class="loadingProduct">
                    <div class="loadingProdInner">
                        <Skeleton/>
                    </div>
                </div>
                <div class="loadingProduct">
                    <div class="loadingProdInner">
                        <Skeleton/>
                    </div>
                </div>
                <div class="loadingProduct">
                    <div class="loadingProdInner">
                        <Skeleton/>
                    </div>
                </div>
                <div class="loadingProduct">
                    <div class="loadingProdInner">
                        <Skeleton/>
                    </div>
                </div>
            </div>

            <!-- Loaded -->
            <div v-if="productsLoaded">

                <div class="resultsBar">
                    <p>Results: {{products.length}}</p>
                </div>

                <div class="productsCon">
                    <div class="productOuter" :key="product.id" v-for="product in products">
                        <nuxt-link :to="'/store/product/' + product.id" class="productInner">
                            <div class="priceCon" v-if="product.price">{{product.price}}</div>
                            <img class="productImg" :src="product.picture" :alt="product.title">
                            <div class="productInfoCon">
                                <p class="prodTitle">{{product.title}}</p>
                                <p class="prodDesc">{{product.description}}</p>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
// Libs
import axios from 'axios'

// Components
import Skeleton from '@/components/Global/Skeleton'

export default {
    data() {
        return {
            // Page Logic
            productsLoaded: false,

            // Loadmore logic
            limitIntervals: 9,
            limit: 9,

            // Data
            products: []

        }
    },
    mounted() {
        this.loadProducts()
    },
    components: {
        Skeleton
    },
    methods: {
        loadProducts() {    
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            })
            axios.get('https://api.williamyallop.com/v1/anyrep/products/' + this.limit)
            .then((response) => {
                this.products = response.data
                this.productsLoaded = true
                this.$nuxt.$loading.finish()
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
.compCon {
    padding-top: 80px;
    padding-bottom: 70px;
}

/* Results */
.resultsBar {
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #D8D8D8;
}
.resultsBar p {
    font-weight: bold;
}

/* Products */
.productsCon {
    min-height: 470px;
    width: calc(100% + 20px);
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
} 
.productOuter {
    padding: 10px;
    width: 25%;
}
.productInner {
    background-color: #FFF;
    border: 1px solid #F6F6F6;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    display: block;
    text-decoration: none;
    color: #1B1B1B;
}
.productInner:hover {
    transform: scale(1.05);
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
/* Product Inner Style */
.productImg {
    width: 100%;
    height: 160px;
    background-color: #EAEAEA;
    object-fit: cover;
} 
.productInfoCon {
    padding: 10px;
} 
.prodTitle {
    line-height: 16px;
    font-weight: bold;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
} 
.prodDesc {
    margin-top: 5px;
    font-size: 14px;
    white-space: wrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
    line-height: 14px;
    height: 28px;
}


/* Loading */
.loadingCon {
    width: calc(100% + 20px);
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
    flex-wrap: wrap;
}
.loadingProduct {
    padding: 10px;
    width: 25%;
}
.loadingProdInner {
    height: 250px;
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
}

/* Media Queries */
@media only screen and (max-width: 900px) {
    /* Loading */
    .loadingProduct {width: 33.33%;}
    /* Product */
    .productOuter {width: 33.33%;}
}
@media only screen and (max-width: 768px) {
    .compCon {padding-bottom: 50px; padding-top: 60px;}
    /* Loading */
    .loadingProduct {width: 50%;}
    /* Product */
    .productOuter {width: 50%;}
}
@media only screen and (max-width: 500px) {
    .compCon {padding-bottom: 55px;}
    /* Loading */
    .loadingCon {width: calc(100% + 10px);margin-left: -5px;margin-right: -5px;}
    .loadingProduct {padding: 5px;}
    /* Product */
    .productsCon {width: calc(100% + 10px);margin-left: -5px;margin-right: -5px;}
    .productOuter {padding: 5px;}
}
@media only screen and (max-width: 400px) {
    /* Loading */
    .loadingProduct {width: 100%;}
    /* Product */
    .productsCon {display: block; min-height: 705px;} 
    .productOuter {width: 100%;}
}
</style>