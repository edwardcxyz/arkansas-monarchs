---
layout: PrimaryLayout
---
# Arkansas Native Plants

<select v-model="lighting">
    <option value="0">All</option>
    <option value="1">Sun to Shade</option>
    <option value="2">Sun to Light Shade</option>
    <option value="3">Sun to Medium Shade</option>
    <option value="4">Partial Sun to Shade</option>
    <option value="5">Sun</option>
    <option value="6">Sun to Partial Shade</option>
    <option value="7">Partial Shade to Shade</option>
    <option value="8">Shade</option>
    <option value="9">Partial Sun</option>
</select>

## Spring
<native-plants
    season="Spring"
/>

## Spring to Summer
<native-plants season="Spring to Summer" />

## Summer
<native-plants season="Summer" />

## Summer to Fall
<native-plants season="Summer to Fall" />

## Fall
<native-plants season="Fall" />

<script>
export default {
    data() {
        return {
            lighting: 0,
        }
    }
}
</script>