<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title>{{ title }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'src/store';
import { YOUNG_TYPE, PARENT_TYPE } from 'components/constants';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);
    const store = useStore();
    const questionnaireNumber = computed(
      () => store.state.questionnaire.questionnaire_number
    );
    const personType = computed(() => store.state.questionnaire.person_type);
    //const personType = computed(() => store.getters.questionnaire.person_type);

    const title = computed(() => {
      let ret = 'Questionário KIDSCREEN ';
      questionnaireNumber.value > 0 && (ret += questionnaireNumber.value);

      personType.value === YOUNG_TYPE && (ret += ' - Jovem');
      personType.value === PARENT_TYPE && (ret += ' - Pais/Tutores');

      return ret;
    });

    return {
      title,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
