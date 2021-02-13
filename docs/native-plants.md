---
layout: PrimaryLayout
---
# Arkansas Native Plants

<div class="filter-field">
    <label for="lighting-select">Lighting Requirements</label>
    <select id="lighting-select" v-model="lighting">
        <option
            v-for="(lt, idx) in lightingTypes"
            :key="lt"
            :value="lt"
        >{{ lt }}</option>
    </select>
</div>
<div class="filter-field">
    <label for="water-select">Watering Needs</label>
    <select id="water-select" v-model="water">
        <option
            v-for="(wtr, idx) in waterTypes"
            :key="wtr"
            :value="wtr"
        >{{ wtr }}</option>
    </select>
</div>


## Spring
<native-plants
    season="Spring"
    :lighting="lighting"
    :water="water"
/>

## Spring to Summer
<native-plants
    season="Spring to Summer"
    :lighting="lighting"
    :water="water"
/>

## Summer
<native-plants
    season="Summer"
    :lighting="lighting"
    :water="water"
/>

## Summer to Fall
<native-plants
    season="Summer to Fall"
    :lighting="lighting"
    :water="water"
/>

## Fall
<native-plants
    season="Fall"
    :lighting="lighting"
    :water="water"
/>

<script>
export default {
    data() {
        return {
            lighting: 'All',
            water: 'All',
            lightingTypes: [
                'All',
                'Sun to Shade',
                'Sun to Light Shade',
                'Sun to Medium Shade',
                'Partial Sun to Shade',
                'Sun',
                'Sun to Partial Shade',
                'Partial Shade to Shade',
                'Shade',
                'Partial Shade',
            ],
            waterTypes: [
                'All',
                'High',
                'Medium',
                'Low',
            ]
        }
    }
}
</script>
<style lang="stylus">
.filter-field
    margin-bottom 24px
    label
        display inline-block
        width 180px
</style>
