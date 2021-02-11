<template>
  <div class="plants-container">
    <div
      v-for="plant in filteredPlants"
      :key="`plant-${plant.id}`"
      :style="plantBg(plant)"
      class="plant"
    >
      <div class="eco-benefits">
        <div>
          <img
            v-for="(iconSrc, idx) in ecoIcons(plant)"
            :key="`ico-${idx}`"
            :src="iconSrc"
          />
        </div>
      </div>
      <img
        class="plant-photo"
        :alt="`A photo of ${plant.scientificName}`"
        :src="plant.imageUrl"
      />
      <div class="plant-info">
        <ul>
          <li class="plant-name">
            {{ plant.commonName }} ({{ plant.scientificName }})
          </li>
          <li class="plant-stat">
            <img class="icon" src="/img/sun.svg" /> {{ plant.lighting }}
          </li>
          <li class="plant-stat">
            <img class="icon" src="/img/water.svg" /> {{ plant.water }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import plantData from '../../ar-native-plants';

export default {
  name: 'NativePlants',
  props: {
    season: String,
    lighting: String,
    water: String,
  },
  data() {
    return {
      plants: plantData,
    };
  },
  computed: {
    filteredPlants() {
      let result;
      if (this.season) {
        result = this.plants.filter((p) => p.bloomPeriod === this.season);
      }
      if (this.lighting) {
        result = result.filter((p) => p.lighting === this.lighting);
      }
      if (this.water) {
        result = result.filter((p) => p.water === this.water);
      }
      return result;
    },
    plantsBySeason() {
      const spring = this.plants.filter((p) => p.bloomPeriod === 'Spring');
      const springSummer = this.plants.filter(
        (p) => p.bloomPeriod === 'Spring to Summer'
      );
      const summer = this.plants.filter((p) => p.bloomPeriod === 'Summer');
      const summerFall = this.plants.filter(
        (p) => p.bloomPeriod === 'Summer to Fall'
      );
      const fall = this.plants.filter((p) => p.bloomPeriod === 'Fall');
      let result;
      switch (this.season) {
        case 'Spring':
          result = spring;
          break;
        case 'Spring to Summer':
          result = springSummer;
          break;
        case 'Summer':
          result = summer;
          break;
        case 'Summer to Fall':
          result = summerFall;
          break;
        case 'Fall':
          result = fall;
          break;
        default:
          result = [
            ...spring,
            ...springSummer,
            ...summer,
            ...summerFall,
            ...fall,
          ];
      }
      return result;
    },
    lightingKeys() {
      return [...new Set(plantData.map((p) => p.lighting))];
    },
  },
  methods: {
    plantBg(plant) {
      switch (plant.bloomPeriod) {
        case 'Spring':
          return { border: '2px solid #b4d66a' };
        case 'Spring to Summer':
          return { border: '2px solid #7bb05c' };
        case 'Summer':
          return { border: '2px solid #eacc44' };
        case 'Summer to Fall':
          return { border: '2px solid #f5822c' };
        case 'Fall':
          return { border: '2px solid #bf522a' };
        default:
          return null;
      }
    },
    ecoIcons(plant) {
      return plant.benefits.split(', ').map((b) => {
        switch (b) {
          case 'Bees':
            return '/img/bee.svg';
          case 'Butterflies':
            return '/img/butterfly.svg';
          case 'Moths':
            return '/img/moth.svg';
          case 'Hummingbirds':
            return '/img/hummingbird.svg';
          default:
            return null;
        }
      });
    },
  },
  created() {
    const uniqueLighting = new Set([...this.plants.map((p) => p.lighting)]);
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
        flex-basis 20%
        display flex
        flex-flow column nowrap
        justify-content flex-start
        background-color: rgba(255, 255, 255, .8);
        box-shadow: 1px 1px 8px #ccc;
        img.plant-photo
            max-width 100%
            height 120px
            border-radius 8px
            object-fit cover
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
                    font-family 'Montserrat', sans-serif
                    font-weight: bold
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
