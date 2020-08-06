## Take the Pledge

![MOC Signing](/img/signing.jpeg)
<div class="form-container">
    <div class="input-group">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName"/>
    </div>
    <div class="input-group">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName"/>
    </div>
    <div class="input-group">
        <label for="email">Email</label>
        <input type="text" id="email"/>
    </div>
    <div class="input-group">
        <label for="city">City/Town/County</label>
        <input type="text" id="city"/>
    </div>
    <div class="input-group">
        <label for="profession">I am taking the Pledge as a(n)</label>
        <select id="profession">
            <option v-for="p in professions">{{ p }}</option>
        </select>
    </div>
    <div class="checkbox-group">
        <div>I Pledge To:</div>
        <div class="checkbox-item" v-for="(pg, idx) in pledgeGoals">
            <input type="checkbox" :id="`goal-${idx}`">
            <label :for="`goal-${idx}`">{{ pg }}</label>
        </div>
    </div>
    <div class="input-group">
        <label for="comments">Comment about your commitment</label>
        <textarea type="text" id="comments"/>
    </div>
    <div class="input-group">
        <label for="comments">Questions?</label>
        <textarea type="text" id="questions"/>
    </div>
</div>

<script>
export default {
    data() {
        return {
            professions: [
                'artist', 'business', 'individual', 'farm/ranch', 'government agency',
                'school', 'municipality', 'non-profit', 'place of worship', 'tribe', 'other'
            ],
            pledgeGoals: [
                'Reduce/eliminate my use of pesticides, herbicides, and fungicides',
                'Collect seeds from my milkweed (or pollinator plant) and share with at least two friends',
                'Share this website with my friend on social media',
                'Plant a garden with milkweed and nextar plants',
                'Enhance existing monarch habitat',
                'Manage invasive species',
                'Teach monarch curriculum or teach others about monarchs',
                'Host an educational event',
                'Participate in an educational event',
                'Encourage my city mayor to sign the Mayor\'s Monarch Pledge',
                'Volunteer to help others with monarch efforts',
                'Register my garden with the Arkansas Monarch Conservation Partnership and Monarch Watch',
                'Participate in monarch citizen science projects such as journey north and monarch watch tagging',
                'Participate in the Arkansas Monarch Mapping Project on iNaturalist',
                'Other',
            ]
        }
    }
}
</script>

<style lang="scss">
.form-container {
    position: relative;
    top: -160px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
    min-height: 100px;

    display: flex;
    flex-flow: column nowrap;
    padding: 8px;
    
    .form-row {
        display: flex;
        flex-flow: row nowrap;
    }

    .input-group {
        display: flex;
        flex-flow: column nowrap;
        margin: 8px;
        input {
            width: 200px;
        }
        select {
            height: 24px;
            width: 208px;
        }
        label {
            font-size: .8rem;
            font-weight: bold;
            margin-bottom: 4px;
        }
        option {
            text-transform: capitalize;
        }
    }
    .checkbox-group {
        display: flex;
        flex-flow: column nowrap;
        margin: 8px;
        .checkbox-item {
            margin: 2px;
            label {
                margin-left: 8px;
            }
        }
    }
}
</style>