# Arkansas Native Plants

<template>
<div class="plants-container">
    <div
        v-for="plant, idx in plants"
        :key="`plant-${plant.id}`"
        :style="plantBg(plant)"
        class="plant"
    >
        <div class="eco-benefits">
            <div>
                <img v-for="iconSrc in ecoIcons(plant)" :src="iconSrc">
            </div>
        </div>
        <img :alt="`A photo of ${plant.scientificName}`" :src="plant.imageUrl">
        <div class="plant-info">
        <ul>
            <li class="plant-name">{{ plant.commonName }} ({{ plant.scientificName }})</li>
            <li class="plant-stat"><img class="icon" src="/img/sun.svg"> {{ plant.lighting }}</li>
            <li class="plant-stat"><img class="icon" src="/img/water.svg"> {{ plant.water }}</li>
        </ul>
        </div>
    </div>
</div>
</template>

<script>
import plantData from './ar-native-plants.js';
export default {
  name: 'NativePlants',
  data() {
    return {
        plants: plantData,
    };
  },
  methods: {
      plantBg(plant) {
          switch (plant.bloomPeriod) {
            case 'Spring':
                return { backgroundColor: '#b4d66a' }
            case 'Spring to Summer':
                return { backgroundColor: '#7bb05c' }
            case 'Summer':
                return { backgroundColor: '#eacc44' }
            case 'Summer to Fall':
                return { backgroundColor: '#f5822c' }
            case 'Fall':
                return { backgroundColor: '#bf522a' }
          }
      },
      ecoIcons(plant) {
          return plant.benefits.split(', ')
            .map((b) => {
                switch (b) {
                    case 'Bees': return '/img/bee.svg';
                    case 'Butterflies': return '/img/butterfly.svg';
                    case 'Moths': return '/img/moth.svg';
                    case 'Hummingbirds': return '/img/hummingbird.svg';
                }
            })
      },
  },
};
</script>

<style lang="stylus" scoped>
    .plants-container
        width 100%
        display flex
        flex-flow row wrap
        .plant
            margin 6px
            padding 8px
            border-radius: 6px
            min-width 200px
            max-width 200px
            display flex
            flex-flow column nowrap
            justify-content flex-start
            img
                max-width 100%
                border-radius 8px
            .plant-info
                padding 12px 0
                ul
                    list-style none
                    list-style-type none
                    margin 0
                    padding 0
                    li
                        font-size 0.8rem
                        display flex
                        img
                            width 16px
                            margin-right 8px
                    li.plant-name
                        font-weight: bold;
                    li.plant-stat
                        /* padding-top 4px */
                        line-height 24px
                        font-size 0.6rem
        .eco-benefits
            display flex
            justify-content space-between
            img
                width 24px
                margin 4px
</style>