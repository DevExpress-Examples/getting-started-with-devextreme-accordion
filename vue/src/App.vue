<template>
    <div id="container">
        <DxAccordion
            :data-source="employees"
            :collapsible="true"
            :multiple="true"
            animation-duration="450"
        >
            <template #title="{ data }">
                {{ data.FirstName + " " + data.LastName }}
            </template>
            <template #item="{ data }">
                {{ data.Position + " from " + data.State }}
            </template>
        </DxAccordion> 
    </div>
</template>

<script>
    import { DxAccordion } from 'devextreme-vue/accordion';
    import { employees } from './data.js';

    export default {
        components: {
            DxAccordion
        },
        data() {
            return {
                employees
            };
        }
    }
</script>

<style>
    #container {
        width: 40%;
    }
</style>