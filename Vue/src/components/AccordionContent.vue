<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxAccordion from 'devextreme-vue/accordion';
import type { Employee } from '../types';

const employees: Employee[] = [
  {
    ID: 1,
    Prefix: 'Mr.',
    FirstName: 'John',
    LastName: 'Heart',
    Position: 'CEO',
    State: 'California',
    BirthDate: '1964/03/16',
  },
  {
    ID: 2,
    Prefix: 'Mrs.',
    FirstName: 'Olivia',
    LastName: 'Peyton',
    Position: 'Sales Assistant',
    State: 'California',
    BirthDate: '1981/06/03',
  },
  {
    ID: 3,
    Prefix: 'Mr.',
    FirstName: 'Robert',
    LastName: 'Reagan',
    Position: 'CMO',
    State: 'Arkansas',
    BirthDate: '1974/09/07',
  },
  {
    ID: 4,
    Prefix: 'Ms.',
    FirstName: 'Greta',
    LastName: 'Sims',
    Position: 'HR Manager',
    State: 'Georgia',
    BirthDate: '1977/11/22',
  },
];
</script>

<template>
  <div id="container">
    <DxAccordion
      :data-source="employees"
      :collapsible="true"
      :multiple="true"
      :animation-duration="450"
      item-template="item"
      item-title-template="title"
    >
      <template #title="{ data }">
        {{ data.FirstName + ' ' + data.LastName }}
      </template>
      <template #item="{ data }">
        {{ data.Position + ' from ' + data.State }}
      </template>
    </DxAccordion>
  </div>
</template>

<style scoped>
#container {
  width: 40%;
}
</style>
